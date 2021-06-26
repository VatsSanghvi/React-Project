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




const MainTabScreen = () => {
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

            <View style={{ backgroundColor: "black", width: "100%", height: 300, }}>
                <View >
                    <View style={{ width: "100%", height: 150, flexDirection: 'row', justifyContent: 'space-evenly', padding: 20, }}>


                        <View style={{ width: 100, backgroundColor: "#FFFFFF", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                            <BIcon name="cards" size={15} />
                            <Text>Flash Cards</Text>

                        </View>

                        <View style={{ width: 100, backgroundColor: "#FFFFFF", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                            <CIcon name="profile" size={15} />
                            <Text>Writing</Text>

                        </View>

                        <View style={{ width: 100, backgroundColor: "#FFFFFF", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                            <DIcon name="bullhorn" size={15} />
                            <Text>Listening</Text>

                        </View>






                    </View>
                </View>



                <View style={{ width: "100%", height: 150 }}>
                    <View style={{ width: "100%", height: 150, flexDirection: 'row', justifyContent: 'space-evenly', padding: 20 }}>


                        <View style={{ width: 100, backgroundColor: "#FFFFFF", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                            <Icon name="document-outline" size={15} />
                            <Text>Speaking</Text>

                        </View>



                        <View style={{ width: 100, backgroundColor: "#FFFFFF", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                            <Icon name="document-outline" size={15} />
                            <Text>Matching</Text>

                        </View>




                        <View style={{ width: 100, backgroundColor: "#FFFFFF", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                            <Icon name="document-outline" size={15} />
                            <Text>Test</Text>

                        </View>
                    </View>



                </View>
            </View>


            <View style={{ flex: 1, backgroundColor: "#000000", padding: 15 }}>
                <View style={{ width: '100%', height: 100, flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 10 }}>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                        <Text style={{ fontSize: 25, color: "red" }}>
                            Keep Improving!
                        </Text>
                        <Text style={{ fontSize: 14, paddingTop: 5, color: "red" }}>
                            Your Current Score
                        </Text>
                    </View>
                    <View style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <ProgressCircle
                            percent={30}
                            radius={25}
                            borderWidth={3}
                            color="#3399FF"
                            shadowColor="#999"
                            bgColor="#FFFFFF"
                        >
                            <Text style={{ fontSize: 15 }}>{'30%'}</Text>
                        </ProgressCircle>
                    </View>
                </View>


                <View style={{ width: "100%", height: 70, justifyContent: "center", alignItems: "flex-start", backgroundColor: "black" }}>
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Overview
                    </Text>
                </View>



                <View style={{ flex: 1, backgroundColor: "white", padding: 10 ,borderRadius:10}}>
                    <View style={{  width: "100%", height: "100%", justifyContent: "space-evenly" }}>
                        <View style={{ width: "100%", flexDirection: "row" }}>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>
                                <Text>
                                    Learned Phrase
                                </Text>
                            </View>
                            <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }} >
                                <Text>12</Text>
                            </View>
                        </View>




                        <View style={{ width: "100%", flexDirection: "row" }}>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>
                                <Text>
                                    Learned Phrase
                                </Text>
                            </View>
                            <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }} >
                                <Text>36</Text>
                            </View>
                        </View>




                        <View style={{ width: "100%", flexDirection: "row" }}>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>
                                <Text>
                                    Learned Phrase
                                </Text>
                            </View>
                            <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }} >
                                <Text>1.5h</Text>
                            </View>
                        </View>
                    </View>
                </View>



            </View>

        </View>

    );
};

export default MainTabScreen;