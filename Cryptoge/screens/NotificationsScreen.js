
import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'

const  NotificationsScreen = () =>  {
  
    return (
      
      <View style={styles.container}>
          <Header
                backgroundColor="blue"
                leftComponent={<Icon name="bars" style={styles.headerMenu} onPress={() => props.navigation.openDrawer()} />}
                centerComponent={{ text: 'Minhas Criptomoedas', style: { color: '#fff' } }}
                />
      </View>
      
    );
  };

  const styles = StyleSheet.create({
   
    container: {
     flex: 1,
     paddingTop: 22
    },
    headerMenu:{
        color: '#fff'
    },

  });

  export default NotificationsScreen;