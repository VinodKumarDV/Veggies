import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from 'react-native-vector-icons';
import { Entypo, AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-web';
import Rating from './Rating'

export default function Profile() {
    return (
        <View style={style.container}>
            <View style={style.container1}>
                <Image source={require('../images/penico.jpg')} style={style.icons} />
                <Text style={style.title}>Profile</Text>
                <Feather name="message-square" size={25} style={style.icons1} />
            </View>
            <View style={{ padding: 7, alignItems: 'center' }}>
                <Image source={{ uri: "https://media.gqindia.com/wp-content/uploads/2018/05/26-866x956.jpg" }} style={style.userImage} />
                <View style={{ position: 'absolute' }}>
                    <View style={style.addBtnContainer}>
                        <Ionicons name="add-outline" style={style.addBtn} />
                    </View>
                    <View>
                        <Text style={style.userName}>Your Story</Text>
                        <Text style={style.userName}>600 Pts</Text>
                        <Text style={style.about}>
                            I'm a software developer that has been in the crypto space since 2012.
                            And I've seen grow and falter over a period of time.
                            Really happy to be here!
                        </Text>
                        <TouchableOpacity style={style.logico} onPress={() => { console.log("logout"); }}>
                            <Entypo name="log-out" size={25}> Logout</Entypo>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        marginTop: 30,
                        marginBottom: 0
                    }}>
                        <Image source={require('../images/starico.jpg')} style={style.icons3} />
                    </View>
                    <View style={style.ratingcont}>
                        <Rating/>
                    </View>
                </View>

            </View>

        </View>

    );
}


const style = StyleSheet.create({
    container: {
        height: 500,
        width: '100%',
        borderColor: "#ffffff",
        alignItems: 'center'
    },

    container1: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },

    title: {
        fontWeight: 'bold',
        fontSize: '25'
    },

    userImage: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: "#ffffff"
    },

    userName: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: 5,
        letterSpacing: 2
    },

    addBtnContainer: {
        marginTop: 55,
        backgroundColor: '#4c68d7',
        marginLeft: '53%',
        width: 19,
        height: 19,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: '#fff',
        justifyContent: 'center',
    },

    addBtn: {
        alignItems: 'center'
    },

    icons: {
        height: 30,
        width: 30,
        borderRadius: 50,
        borderColor: "yellow",
        borderWidth: 3,
        marginStart: 10
    },

    icons1: {
        marginEnd: 10
    },

    about: {
        alignItems: 'center',
        width: '100%',
        margin: 10
    },

    logico: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: 25,
    },

    icons3: {
        height: 30,
        width: 26,
        marginBottom: 15
    },
    ratingcont: {
        width: 300,
        height: 200,
        borderWidth: 1,
        borderColor: 'gray',
    },
    
});