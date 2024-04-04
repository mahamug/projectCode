import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text,StyleSheet,Image, TouchableOpacity } from "react-native";
import { Shadow } from 'react-native-neomorph-shadows';
import { Item } from "react-native-paper/lib/typescript/components/List/List";

const EventFlatlist = ({item}) =>{
    const navigation = useNavigation();
    return(
        <View style={styles.Container}>
          <TouchableOpacity
          onPress={()=>{
            navigation.navigate('EventsDetail')
          }}>
        <Shadow
        useArt 
       style={styles.Shadow} >
        <View style={{flexDirection:"row"}}>
        <Image   source={{uri:item.image}} style={styles.Image}></Image>
        <Text style={styles.Text}>{item.name}</Text>
        </View>
        <Text style={styles.Date}> Date : {item.Date}</Text>
        <Text style={styles.Time}>Time : {item.Time}</Text>
        </Shadow>
        </TouchableOpacity>  
        </View>
    )
};
 const styles = StyleSheet.create({
    Container:{
        margin:15,
         },
         Shadow:{
            shadowOffset: {width: 3, height: 6},
            shadowOpacity: 0.4,
            shadowRadius: 5,
           borderRadius: 15,
           backgroundColor: '#2b3138',
           width: 350,
          height: 90,
         },
        Image: {
        height:50,
        width:50,
        borderRadius:25,
        margin:18,
        
         },
         Text:{
            color:"#f8e473",
            margin:15,
            fontFamily:"Poppins-SemiBold",
            fontSize:15,
            marginTop:10
            
         },
         Date:{
            fontFamily:"Poppins-Regular",
            color: '#A9A9A9',
            marginLeft:96,
            bottom:52
         },
         Time:{
            fontFamily:"Poppins-Regular",
            color: '#A9A9A9',
            marginLeft:99,
            bottom:53
         }
 });
export default EventFlatlist;