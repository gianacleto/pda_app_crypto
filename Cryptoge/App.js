/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import MainScreen from './screens/MainScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  HomeScreen  from '../Cryptoge/screens/HomeScreen'
import  NotificationsScreen  from '../Cryptoge/screens/HomeScreen'

const Drawer = createDrawerNavigator();

GoogleSignin.configure({
  webClientId: '341492908696-qingoj65as98qtkkivrdk6673vvfs34s.apps.googleusercontent.com',
});

 function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
  }

  function logoff () {
    GoogleSignin.signOut()
    return auth().signOut();
    
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
          <Button
            title="Google Sign-In"
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
          />
      </View>
    );
  }

 
  return (
    <>
    {/* <View>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View> */}
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
      <Button
        title="Logoff"
        onPress={() => logoff()}
      />
    </NavigationContainer>
    </>
  );

}

export default App;
