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
import { color } from 'react-native-reanimated';


const SignUpScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text style={styles.SignUp_Text}>
          Sign Up
        </Text>
      </View>

      <View
        style={{
          flex: 5,
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderTopLeftRadius: 50,
          backgroundColor: '#FFF',
          paddingHorizontal: '5%',
        }}>




        <View style={styles.Buttons}>

          <Text style={styles.Text}>
            First Name
          </Text>


          <TextInput
            placeholder="Vats"
            placeholderTextColor="#acacac"
            style={{
              padding: 0,
              fontSize: 13,
              color: '#acacac'
            }}
          />
        </View>



        <View style={styles.Buttons}>

          <Text style={styles.Text}>
            Last Name
          </Text>


          <TextInput
            placeholder="Sanghvi"
            placeholderTextColor="#acacac"
            style={{
              padding: 0,
              fontSize: 13,
              color: '#acacac'
            }}
          />
        </View>


        <View style={styles.Buttons}>

          <Text style={styles.Text}>
            Email
          </Text>


          <TextInput
            placeholder="vatssanghvi7@gmail.com"
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


        <View style={styles.Buttons}>

          <Text style={styles.Text}>
            Confirm Password
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

        <View style={styles.SignUp_Button}>
          <Text style={{
            fontSize: 15,
            fontFamily: 'Lexend-Medium',
            color: '#FFFFFF',
          }}>
            Sign Up
          </Text>
        </View>



      </View>
      <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center' }}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={{
          fontSize: 15,
          fontFamily: 'Lexend-Medium',
          color: '#000000',
        }}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>

    </View>

  );
};

const styles = StyleSheet.create({
  Buttons: {
    width: '100%',
    height: 55,
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
    fontFamily: 'Lexend-Medium',
    color: '#000000',
  },
  SignUp_Text: {
    fontSize: 30,
    fontFamily: 'Lexend-Medium',
    color: '#FFFFFF',
  },
  SignUp_Button: {
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
  Signup_Text: {
    fontSize: 15,
    fontFamily: 'Lexend-Medium',
    color: '#FFFFFF',
  },

});
export default SignUpScreen;