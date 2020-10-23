import React from 'react'
import {View,Text,Image,ImageBackground,TouchableOpacity,} from 'react-native'
import { Modalize } from 'react-native-modalize'
import Bid from '../screens/Bid'


export default class Xd extends React.Component{
    render(){
        return(
          <ImageBackground
                source={require('../images/crs.png')}
                style={{width:"100%",height:"100%"}}
          >
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20
                }}>
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate("Cources")}
                        style={{
                            paddingHorizontal:10,
                            paddingVertical:13,
                            borderRadius:10,
                            marginTop:30,
                            backgroundColor:"#9a3c7e"
                        }}
                    >
                            <Image
                                source={require('../images/a1.png')}
                                style={{height:15,width:20}}
                            />
                    </TouchableOpacity>
                    <View style={{
                        paddingHorizontal:10,
                        paddingVertical:13,
                        borderRadius:10,
                        marginTop:30,
                        backgroundColor:"#9a3c7e",
                        marginLeft:240
                    }}>
                        <Image
                            source={require('../images/hum.png')}
                            style={{height:15,width:20}}
                        />
                    </View>
                </View>



                <Text style={{
                    color:"#FFF",
                    fontFamily:"Bold",
                    fontSize:35,
                    width:200,
                    alignSelf:"center",
                    textAlign:"center"
                }}>Contract Name</Text>




                <Modalize
                    handleStyle={{
                        marginTop:30,
                        backgroundColor:"#e9e9e9",
                        width:80
                    }}
                    modalStyle={{
                        borderTopLeftRadius:60,
                        borderTopRightRadius:60
                    }}
                    alwaysOpen={510}
                    scrollViewProps={{ showsVerticalScrollIndicator:false }}
                >
                    <View style={{
                        flexDirection:"row",
                        marginHorizontal:30,
                        marginTop:40
                    }}>
                        <Image
                            source={require('../images/2.jpg')}// image for icon
                            style={{
                                height:50,
                                width:50,
                                borderWidth:2,
                                borderColor:"#f58084",
                                borderRadius:50,
                            }}
                        />
                        <View style={{marginHorizontal:20}}>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:18
                            }}>Mikolaj Galezioski</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:12
                            }}>
                               Designation
                            </Text>
                        </View>
                        <View style={{
                            alignItems:"center",
                            justifyContent:"center",
                            backgroundColor:"#fff2f2",
                            width:40,
                            height:40,
                            borderRadius:40
                        }}>
                            <Image
                                source={require('../images/a2.png')}
                            />
                        </View>
                    </View>
                    <View>

                        <Bid
                            num={1}
                            color="#fde6e6"
                            percent={25}
                            amount="2 hours, 20 minutes"
                            title="Introduction"
                            onPress={()=>this.props.navigation.navigate('VideoPage')}
                        />
                         <Bid
                            num={2}
                            color="#f9e1fc"
                            percent={50}
                            amount="1 hours, 35 minutes"
                            title="Design Tools"
                        />
                         <Bid
                            num={3}
                            color="#e8f1fd"
                            percent={0}
                            amount="2 hours, 20 minutes"
                            title="Prototyping Tools"
                        />
                         <Bid
                            num={4}
                            color="#e5ffef"
                            percent={0}
                            amount="2 hours, 20 minutes"
                            title="Summary & Exercise"
                        />
                         <Bid
                            num={5}
                            color="#fbfaf6"
                            percent={0}
                            amount="0 hours, 30 minutes"
                            title="Conclusion"
                        />
                    </View>



                    <View>

                    </View>
                </Modalize>

          </ImageBackground>
        )
    }
}
