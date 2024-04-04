import React, { useState } from "react";
import { View, FlatList,StyleSheet } from "react-native";
import DrawerNavbar from "../../components/Navbar/DrawerNavbar";
import { useNavigation } from '@react-navigation/native';
import Membershipflatlist from "../../components/Membership/membershipflatlist";


const Membership = () =>{

    const navigation=useNavigation();
    const [Memberships,setMemberships] = useState([{
        membership:"Free",
        Text:"This is testing membership",
        description:"Description will be here",
    },{
        membership:"Silver",
        Text:"This is testing membership",
        description:"Description will be here",
    },{
        membership:"Gold",
        Text:"This is testing membership",
        description:"Description will be here",
    },{
        membership:"Platinum",
        Text:"This is testing membership",
        description:"Description will be here",
    },])
    return(
      <View style={styles.container}>
        <DrawerNavbar title="Memberships" navigation={navigation}/>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={Memberships}
        renderItem={({item})=>{
          return <Membershipflatlist item={item}/>
        }}
        />
      </View>
    )
};
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#202329",flex:1
  }
})
export default Membership;