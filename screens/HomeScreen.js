import React from 'react';
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
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import { Surface, Shape } from '@react-native-community/art';
import ProgressCircle from 'react-native-progress-circle'
import BIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CIcon from "react-native-vector-icons/AntDesign";
import DIcon from "react-native-vector-icons/FontAwesome";


const HomeScreen = () => {
    return (

        <View style={{ flex: 1, backgroundColor: '#000000' }}>


            {/* Header View */}
            <View style={{ width: '100%', height: 50, flexDirection: 'row', backgroundColor: '#FFFFFF' }}>
                <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="arrow-back" size={15} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>
                        Dashboard
                    </Text>
                </View>
                <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="notifications" size={15} />
                </View>
            </View>

            <View style={{ width: '100%', height: 50, flexDirection: 'row', backgroundColor: '#FFFFFF', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 15 }}>
                    <Text>
                        Job Interview
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="document-outline" size={15} />
                        <Text>48 Cards</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="bookmark" size={15} />
                        <Text>Career</Text>
                    </View>
                </View>

            </View>



            <View style={{ padding: 15 }}>
                <View style={{ backgroundColor: "white", width: "100%", height: "60%" }}>

                    <View style={{ flex: 1, backgroundColor: "red" ,flexDirection:"row",}}>

                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"white",borderRadius:10 }}>
                            <Icon name="document-outline" size={15} />
                            <Text>Speaking</Text>
                        </View>


                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"white",borderRadius:10  }}>
                            <Icon name="document-outline" size={15} />
                            <Text>Speaking</Text>
                        </View>



                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"white",borderRadius:10  }}>
                            <Icon name="document-outline" size={15} />
                            <Text>Speaking</Text>
                        </View>
                    </View>


                    <View style={{ flex: 1, backgroundColor: "blue" }}>


                    </View>




                </View>



            </View>
        </View>


    );
};

export default HomeScreen;