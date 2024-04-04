import React from "react";
import { View,Text,Image, TouchableOpacity,StyleSheet } from "react-native";
import DrawerNavbar from "../../../components/Navbar/DrawerNavbar";
import { Shadow } from 'react-native-neomorph-shadows';
import { useNavigation } from '@react-navigation/native';


const AvailableCourses = ()=>{

    const navigation=useNavigation();
    return(
     <View style={styles.container}>
        <DrawerNavbar title="Progress" navigation={navigation}/>
        <Text style={styles.heading}>Available Courses </Text>
        <View style={styles.View}>
        <Shadow
           useArt 
          style={styles.shadow}
         >
          <View style={styles.shadowView}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('ProgressReport')
          }} 
          >
            <Image style={styles.Image} source={{uri:"https://i.pinimg.com/564x/ef/6e/d8/ef6ed893bbbe4b482970dcec27bc22dc.jpg"}}></Image>
            <Text style={styles.Imageheading}>Foot and Ankle Integrity (Level 1)</Text>
            </TouchableOpacity>
          </View>
           </Shadow>
           
            </View>
     </View>
    )
};
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#202329",flex:1
  },
  heading:{
    color:"#f8e473",fontSize:20,margin:20,fontFamily:"Poppins-SemiBold"
  },
  View:{
    margin:20,marginTop:1
  },
  shadow:{
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,          
   shadowRadius: 5,
   borderRadius: 15,
   backgroundColor: '#2b3138',
   width: 150,
  height: 150,
  },
  shadowView:{
    alignItems: 'center', justifyContent: 'center',flex:1
  },
  Image:{
    height:50,width:50,borderRadius:25,marginLeft:35
  },
  Imageheading:{
    color:"white",marginTop:10,fontFamily:"Poppins-SemiBold"
  }
})
export default AvailableCourses;