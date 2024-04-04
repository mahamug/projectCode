import React, { useState } from "react";
import { View,Text,StyleSheet,FlatList } from "react-native";
import DrawerNavbar from "../../../components/Navbar/DrawerNavbar";
import { useNavigation } from '@react-navigation/native';
import EventFlatlist from "../../../components/Events/EventFlatlist";

const Events = () =>{
   
    const navigation=useNavigation();
    const [eventsDetail,setEventsDetail] = useState([
        {
     image:'https://i.pinimg.com/236x/b3/76/8e/b3768ebc318afff8de1f5c7e10625044.jpg',
      name:'Event Name',
      Date:'07-22-2022',
      Time: '16:00'
    },
    {
        image:'https://i.pinimg.com/236x/55/44/52/55445261aba17592487ebc8d44f02bef.jpg',
        name:'Boxing',
        Date:'10-12-2022',
        Time: '01:00'
    },
    {
     
        image:'https://i.pinimg.com/236x/ff/35/11/ff3511f2cfb9afda7e8bfade233f251d.jpg',
        name:'Strength',
        Date:'04-24-2022',
        Time: '01:00'   
    },
    {
      
        image:'https://i.pinimg.com/236x/82/7a/a9/827aa9e3b0354e09aebe36f8a50ba3ca.jpg',
        name:'Weight Lifting',
        Date:'12-31-2022',
        Time: '13:00'   
    },
    {
        
        image:'https://i.pinimg.com/236x/c4/18/b9/c418b97a1f0c11390309d32475784c55.jpg',
        name:'Stretching',
        Date:'02-31-2022',
        Time: '8:00'  
    },
    {
        image:'https://i.pinimg.com/236x/33/5e/44/335e44bae9c0f7e797e15999536f0424.jpg',
        name:'Yoga',
        Date:'07-10-2022',
        Time: '20:00'   
    }])
    return(
        <View style={styles.container}>
        <DrawerNavbar title="Events" navigation={navigation}/>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={eventsDetail}
        renderItem={({item})=>{
          return <EventFlatlist item={item}/>
        }}
        />
        </View>
    )
};

const styles = StyleSheet.create({
   container:{
      flex:1,
      backgroundColor:"#202329"
   },
});
export default Events;