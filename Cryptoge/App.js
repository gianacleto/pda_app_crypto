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
//import MainScreen from './screens/MainScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  HomeScreen  from '../Cryptoge/screens/HomeScreen'
import NotificationsScreen  from '../Cryptoge/screens/HomeScreen'
import { DrawerContent } from "../Cryptoge/screens/DrawerContent";

const Drawer = createDrawerNavigator();

 function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
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
    
    
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> }>
        <Drawer.Screen name="Home" component={NotificationsScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );

}

export default App;
