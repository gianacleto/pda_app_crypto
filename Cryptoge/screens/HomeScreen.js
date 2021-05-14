
import React, {useEffect, useState} from 'react';
import { View,Text, FlatList, StyleSheet, ScrollView} from 'react-native';
import { Header, ListItem, Avatar, PricingCard, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'
import api from '../src/services/api';

const HomeScreen = () => {

    const [dados, setDados]=useState([]);
    //coletando os dados da api                                                                                                                           
    useEffect( () => {
        api.get("v2/assets").then((response) => {
            setDados(response.data.data);
        });
    }, [])
    

    return (
        
        <View style={styles.container}>
            <Header
                backgroundColor="black"
                leftComponent={<Icon name="bars" style={styles.headerMenu} onPress={() => props.navigation.openDrawer()} />}
                centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                />

        <ScrollView>
        {
            dados.map((l, i) => (
        <TouchableOpacity>
            <ListItem  bottomDivider>
                <Avatar source={{}} />
                <ListItem.Content>
                <ListItem.Title>{l.symbol}</ListItem.Title>
                <ListItem.Subtitle>{l.id}</ListItem.Subtitle>
                <Text>$ {Number(l.priceUsd).toFixed(2)}</Text>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
            ))
        }
        </ScrollView>

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
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default HomeScreen;