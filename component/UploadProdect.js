import React from 'react';
import {  Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

export default function UploadProdect() {
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={30} color="black" style={styles.headericon} />
                <Text style={styles.headerphoto}>ADD PHOTO</Text>
                <Text style={styles.headerskip}>SKIP</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.instructions1}>
                    Upload and mention details below
                </Text>
                <TouchableOpacity onPress={openImagePickerAsync}>
                    <Image source={{ uri: 'https://cdn0.iconfinder.com/data/icons/interface-10/128/_add_image-512.png' }} style={styles.logos} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    logos: {
        width: '100%',
        height: 265,
        marginBottom: 5,
        marginTop: 5,
    },
    instructions1: {
        color: '#888',
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 15
    },
    header: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        backgroundColor: '#51d1af',
        justifyContent: 'space-between',
    },
    headericon: {
        marginStart: 10,
        marginTop: 50
    },
    headerphoto: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50
    },
    headerskip: {
        marginEnd: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50
    },
});