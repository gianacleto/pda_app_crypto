/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//React
import React, { useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import { Chip, Text, Image } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from "../Cryptoge/screens/DrawerContent";

//Autentication
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

//Screens
import HomeScreen from '../Cryptoge/screens/HomeScreen';
import NotificationsScreen  from '../Cryptoge/screens/NotificationsScreen'

//Admob
// import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
// import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

// const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-1146949807943869/2403390532';


 function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Autenticação com o Google 
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
                                                                           

  GoogleSignin.configure({
    webClientId: '341492908696-qingoj65as98qtkkivrdk6673vvfs34s.apps.googleusercontent.com',
  });
    
 async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();
  
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    return auth().signInWithCredential(googleCredential);
  }
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

 

  //Tela de login principal
  if (!user) {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       {/* <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        /> */}

       <Image   
          source={ require('./assets/imgs/coin.jpg') }
          style={{ width: 200, height: 200 }}
       />
 
        <Text h1 style={{marginBottom: 50}}>Cryptoge</Text>
         <Chip
              title="Entrar com o Google"
              icon={{
              name: "google",
              type: "font-awesome",
              size: 20,
              color: 'white',
              }}
              onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
          />
      </View>
    );
  }

  const Drawer = createDrawerNavigator();
  return (
    <>

      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} userProps={user} /> }>
          <Drawer.Screen name="Home" component={HomeScreen} drawerContent={props => <DrawerContent {...props} />} />
          <Drawer.Screen name="Notification" component={NotificationsScreen} drawerContent={props => <DrawerContent {...props} />} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});

export default App;
