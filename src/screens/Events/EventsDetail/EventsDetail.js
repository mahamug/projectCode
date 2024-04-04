import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text, StyleSheet,Image, TouchableOpacity } from "react-native";
import BackButtonNavbar from "../../../components/Navbar/BackButtonNavbar";
import { Shadow } from 'react-native-neomorph-shadows';
import Ionicons from"react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from"react-native-vector-icons/MaterialCommunityIcons";

const EventsDetail = () =>{

    const navigation=useNavigation();
    return(
        <View style={styles.container}>
        <BackButtonNavbar title='Event Detail' navigation={navigation}/>
        <Text style={styles.IntroText}>Introductory Event</Text>
        <Text style={styles.subheading}>dummy description for introduction event.</Text>
        <View style={{flexDirection:"row",marginLeft:45}}>
        <Shadow
        useArt 
       style={styles.Shadow} >
        <Ionicons name = "calendar-sharp"size={30} color='#f8e473' style={styles.icon}/>
        <Text style={styles.icontext}>07-24-2022</Text>
        </Shadow>
        <Shadow
        useArt 
       style={styles.Shadow} >
         <MaterialCommunityIcons name = "clock-fast"size={30} color='#f8e473' style={styles.icon}/>
        <Text style={styles.icontext}>16:00</Text>
        </Shadow>
        </View>
        <Text style={styles.IntroText}>Image</Text>
        <Shadow
        useArt 
       style={styles.ImageShadow} >
        <Image resizeMode='contain' style={styles.Image} source={{uri:"https://i.pinimg.com/236x/a6/ed/99/a6ed9923c24942636e1f26cb836b26d3.jpg"}}></Image>
        </Shadow>
        <TouchableOpacity>
        <Shadow
        useArt 
       style={styles.ButtonShadow} >
        <Text style={styles.ButtonText}>Join Class</Text>
        </Shadow>
        </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:"#202329"
   },
   IntroText:{
    color:"#f8e473",
    fontFamily:"Poppins-Bold",
    fontSize:19,
    margin:22,
    
   },
   subheading:{
    fontFamily:"Poppins-Regular",
    color: '#A9A9A9',
    marginLeft:20,
    bottom:22
   },
   Shadow:{
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 5,
   borderRadius: 15,
   backgroundColor: '#2b3138',
   width: 110,
  height: 88,
  marginLeft:20,
  
   },
   icon:{
    alignSelf:"center",
    marginTop:10
   },
   icontext:{
    color: '#A9A9A9',
    alignSelf:"center",
    marginTop:5,
    fontSize:15
   },
   ImageShadow:{
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 5,
   borderRadius: 15,
   backgroundColor: '#2b3138',
   width: 343,
  height: 310,
  marginLeft:20,
   },
   Image:{
    height:270,
    width:300,
    alignSelf:"center",
    marginTop:19
   },
   ButtonShadow:{
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    backgroundColor: '#2b3138',
    borderRadius: 20,height: 40, width: 200,
    marginTop:40,
    marginLeft:85
   },
   ButtonText:{
    fontFamily:"Poppins-SemiBold",
    color: '#f8e473',
    alignSelf:"center",
    marginTop:8,
    fontSize:15
   },
});
export default EventsDetail;