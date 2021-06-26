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
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => { 
  return(
    <View style={{flex: 1,alignItems:'center',justifyContent:"center"}}>
      <Text>
        Home Screen
      </Text>
      <Button 
        title="Go to Details Screen"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  )
}


const DetailsScreen = () => { 
  return(
    <View style={{flex: 1,alignItems:'center',justifyContent:"center"}}>
      <Text>
        Details Screen
      </Text>
    </View>
  )
}




const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen  />
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>

      </Stack.Navigator> */}
     

    </NavigationContainer>
  );
}



export default App;