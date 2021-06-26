import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Button,
    TextInput,
    TouchableOpacity,

} from 'react-native';




const LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Image
                    source={require('../assets/image/logo.png')}
                    style={{ width: 100, height: 50, tintColor: "#FFF" }}

                />
            </View>

            <View
                style={{
                    flex: 2,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderTopLeftRadius: 50,
                    marginTop: -30,
                    backgroundColor: '#FFF',
                    paddingHorizontal: '5%',
                    paddingVertical: '10%'
                }}>


                <Text style={{ fontSize: 30, fontFamily: 'Lexend-SemiBold' }}>
                    Login
          </Text>

                <View style={styles.Buttons}>
                    <Text style={styles.Text}>
                        Email
                    </Text>
                    <TextInput
                        placeholder="vatssanghavi@gmail.com"
                        placeholderTextColor="#acacac"
                        style={{
                            padding: 0,
                            fontSize: 13,
                            color: '#acacac'
                        }}
                        keyboardType="email-address"//this is for the email suggestions which comes as soon as we click on email box
                    />
                </View>

                <View style={styles.Buttons}>

                    <Text style={styles.Text}>
                        Password
                    </Text>
                    <TextInput
                        placeholder="******"
                        placeholderTextColor="#acacac"
                        style={{
                            padding: 0,
                            fontSize: 13,
                            color: '#acacac'
                        }}
                        keyboardType="name-phone-pad"
                        secureTextEntry//so that no one can see what password we are entering
                    />

                </View>
                <View style={styles.Login_Button}>
                    <Text style={styles.Login_Text}>
                        Login
                        </Text>
                </View>



            </View>
            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center' }}
                onPress={() => navigation.navigate('SignUpScreen')}
            >
                <Text style={{
                    fontSize: 15,
                    fontFamily: 'Lexend-Medium',
                    color: '#000000',
                }}>
                    Don't have any account? Sign Up
                </Text>
            </TouchableOpacity>
        </View>



    );
};


const styles = StyleSheet.create({
    Buttons: {
        width: '100%',
        height: 70,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginTop: '10%',
        shadowColor: "#0000FF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        justifyContent: 'center'
    },
    Text: {
        fontSize: 15,
        fontFamily: 'Lexend-Medium'
    },
    Login_Button: {
        width: '100%',
        height: 50,
        backgroundColor: '#000000',
        borderRadius: 15,
        marginTop: '10%',
        shadowColor: "#0000FF",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Login_Text: {
        fontSize: 15,
        fontFamily: 'Lexend-Medium',
        color: '#FFFFFF',

    },
});

export default LoginScreen;
