import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
    Avatar, 
    Title, 
    Caption, 
    Paragraph, 
    Drawer, 
    Text, 
    TouchableRipple, 
    Switch
} from 'react-native-paper'

import { 
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

export function DrawerContent(props){

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{flex:1}}>
            
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image 
                                source={props.userProps.photoUrl}
                            />
                            <View style={{marginLeft:10, flexDirection: 'column'}}>
                                <Title style={styles.title}>{props.userProps.displayName}</Title>
                                <Caption style={styles.caption}>{props.userProps.email}</Caption>
                            </View>
                        </View>
                    </View>

                   
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                                name="home"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                      <DrawerItem
                        icon={({color, size}) => (
                            <Icon 
                                name="info"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Informações Pessoais"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section styles={styles.bottomDraveSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name={'sign-out-alt'}
                            color={color}
                            size={size}
                        />
                     )}
                    label="Sing Out"
                    onPress={() => {  GoogleSignin.signOut()
                                      return auth().signOut(); }}
                />
            </Drawer.Section>
        </View>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1, 
    }, 
    userInfoSection: {
        paddingLeft: 5, 
    },
    title: {
        fontSize: 12, 
        marginTop: 3, 
        fontWeight: 'bold', 
    }, 
    caption: {
        fontSize:10, 
        lineHeight:14,
    },
    row: {
        marginTop:20, 
        flexDirection: 'row', 
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold', 
        marginRight: 3,
        marginLeft: 14,
    },
    drawerSection:{
        marginTop: 15, 
    }, 
    bottomDraveSection: {
        marginBottom: 15, 
        borderTopColor: "#f4f4f4", 
        borderTopWidth: 1
    },
    preference: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        paddingVertical: 12, 
        paddingHorizontal: 16
    }
})
