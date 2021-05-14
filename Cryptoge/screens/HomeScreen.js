
import React, {useEffect, useState} from 'react';
import { View, FlatList, StyleSheet, ScrollView} from 'react-native';
import { Header,Tooltip, Card, Text, PricingCard} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'
import api from '../src/services/api';

const HomeScreen = () => {

    const [dados, setDados]=useState([]);

    //coletando os dados da api                                                                                                                           
    useEffect( () => {
        api.get("v2/assets?limit=5").then((response) => {
            setDados(response.data.data);
        });
    }, [])
    
    return (
        <View style={styles.container}>
            <Header
                backgroundColor="black"
                //leftComponent={<Icon name="bars" style={styles.headerMenu} onPress={() => props.navigation.openDrawer()} />}
                centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                />
        <Text h4 style={styles.card}>Moedas da Semana</Text>
    
      <ScrollView>
      {dados.map((crypto) => (
          <TouchableOpacity>

            <PricingCard
                color="#4f9deb"
                title={crypto.symbol}
                price={'$ '+Number(crypto.priceUsd).toFixed(2)}
                info={[crypto.id]}
                button={{ title: 'Mais detalhes ' }}
            />
        </TouchableOpacity>
        
            ))}
        </ScrollView>
        </View>
        
        );
  };

  const styles = StyleSheet.create({
    card: {
        marginLeft: 60,
        padding: 10 
    },
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