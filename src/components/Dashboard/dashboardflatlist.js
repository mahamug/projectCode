import React from "react";
import { View,Text,TouchableOpacity,Image,StyleSheet } from "react-native";
import {Card} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Neomorph } from "react-native-neomorph-shadows";

const Dashboardflatlist = ({item}) =>{
    const navigation=useNavigation();
    return(
        <View  style={styles.container}>
        <Neomorph
        swapShadows // <- change zIndex of each shadow color
        lightShadowColor="#1c1c1c"
          style={styles.Neomorph}>
          <TouchableOpacity
            onPress={() => {
              {
              navigation.navigate('Course',item.name)
             
              }
            }}>
            <Image
              source={{uri: item.image}}
              style={styles.Image}></Image>
            <Text
              style={styles.text}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </Neomorph>
      </View>
    )
};
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center', alignItems: 'center',flex:1,margin:15
  },
  Neomorph:{
    shadowRadius:3,
    shadowOffset:{width:4,height:5.5},
    borderRadius: 10,
    shadowOpacity:0.4,
    backgroundColor: "#2b3138",
    height: 133,
    width: 120,
    paddingBottom:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image:{
    height: 100,
    width: 100,
    borderRadius: 50,
    top: 15,
  },
  text:{
    color: '#A9A9A9',
    alignSelf: 'center',
    left: 1,
    fontSize: 13,
    top: 18,
    fontFamily:"Poppins-SemiBold",
  }
})
export default Dashboardflatlist;