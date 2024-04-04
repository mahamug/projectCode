import React,{useState} from "react";
import { View,Text,TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Toggle =()=>{
    const[toggleoff,settoggleon]=useState('toggle-off')
   return(
    <TouchableOpacity onPress={()=>{
        if (toggleoff=="toggle-on")
        {
          settoggleon('toggle-off')
        }
        else{
          settoggleon('toggle-on')
        }
        console.log("toggle-off clicked")
      }}>
       <FontAwesome name={`${toggleoff}`} size={30} color="white" style={{left:5}}/>
        </TouchableOpacity>)
}
export default Toggle;