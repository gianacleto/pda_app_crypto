
import React, {useEffect, useState} from 'react';
import { View,Text, Button, FlatList, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../src/services/api';

const HomeScreen = () => {

//    const [carregando, setCarregando]=useState(true)
    const [dados, setDados]=useState([]);

    // getCoins()(
    //     () => {
    //         api.get('v2/assets');
    //         .then((resp) => resp.json())
    //     }
        
        
    // )
    
    // getCoins();
    useEffect( () => {
        api.get("v2/assets").then((response) => {
            console.log(response.data);
            setDados(response.data);
        });
    }, [])
    

    return (
        <View style={styles.container}>
            <FlatList
                data={dados.data}
                renderItem={({item}) => <Text style={styles.item}>{item.symbol} - {item.id}</Text>}
            />
        {/* { dados.data.map((item) => (
            <TouchableOpacity>
                <Text>
                    moeda: {item.id}
                </Text>
            </TouchableOpacity>
        ))} */}
            
        
        
            
        
        </View>
        );
  };

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default HomeScreen;