import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import users from '../userList.json';


export default function ProdectList() {
    return (
        <View style={style.container}>
            <ScrollView style={{ flex: 1, marginTop: 10 }} vertical showsVerticalScrollIndicator={false} >
                {users.map((item, index) => (
                    <View style={{ width: '95%', padding: 5, flexDirection: 'row', marginLeft: 10, marginRight: 10, borderWidth: 1, marginBottom: 5, backgroundColor: 'white', }}>
                        <LinearGradient
                            colors={['#bc2a8d', '#e95950', '#fccc63']}
                            style={{ padding: 2, borderRadius: 50 }}>
                            <Image source={{ uri: item.image }} style={[style.userImage, { borderWidth: 1 }]} />
                        </LinearGradient>
                        <Text style={style.userName}>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>

    );
}


const style = StyleSheet.create({
    container: {
        height: 500,
        width: '100%',
        backgroundColor: '#E6E0F8',
        borderColor: "#ffffff"
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
        textTransform: 'lowercase',
        marginTop: 5
    },

    addBtnContainer: {
        marginTop: 55,
        backgroundColor: '#4c68d7',
        marginLeft: 55,
        width: 19,
        height: 19,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: '#fff',
        justifyContent: 'center',

    },

    addBtn: {

    }
});