import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BackButtonNavbar = ({title,navigation}) =>{
    return(
        <View style={{flexDirection: 'row', margin: 20,justifyContent:"space-between",alignItems:"center"}}>
          <TouchableOpacity  onPress={() => {
          navigation.goBack();
        }}>
        <AntDesign name="left" size={20} color="#f8e473" />
        </TouchableOpacity>
        <Text style={{color: '#f8e473', fontSize: 17,fontFamily:"Poppins-SemiBold" }}>
          {title}
        </Text>
        <FontAwesome
          name="home"
          size={20}
          color="#f8e473"
          
        />
      </View>
    )
};
export default BackButtonNavbar;