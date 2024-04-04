import React, { useState } from "react";
import { View,Text, FlatList,StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BackButtonNavbar from "../../../components/Navbar/BackButtonNavbar";
import Progressflatlist from "../../../components/ActiveCourses/Progressflatlist";

const ProgressReport = () =>{

    const navigation=useNavigation();
    const [Data,setData] = useState([{
        Text:"Week 1",
        days:"3",
        week:"1",
        percentage:"20%"
    },{
        Text:"Week 2",
        days:"0",
        week:"2",
        percentage:"20%"
    },{
        Text:"Week 3",
        days:"0",
        week:"3",
        percentage:"20%"
    },{
        Text:"Week 4",
        days:"0",
        week:"4",
        percentage:"20%"
    },
    ])

    return(
        <View style= {styles.container}>
            <BackButtonNavbar title="Progress" navigation={navigation}/>
            <Text style={styles.text}>Foot and Ankle Integrity (Level 1)</Text>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={Data}
            renderItem={({item})=>{
              return<Progressflatlist item={item}/>
            }}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        flex:1,backgroundColor:"#202329"
    },
    text:{
        color:"#f8e473",fontFamily:"Poppins-SemiBold",fontSize:20,alignSelf:"center",margin:18
    }
})
export default ProgressReport;