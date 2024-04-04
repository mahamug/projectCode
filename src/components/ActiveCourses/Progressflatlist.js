import React from "react";
import {View,Text,Dimensions,StyleSheet}from "react-native";
import { Neomorph } from 'react-native-neomorph-shadows';
import { ProgressChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;


const Progressflatlist = ({item}) =>{
    const data = {
        
        data: [0.4]
      
    };
   
    return(
       <View style={styles.container}>
        <Neomorph
             swapShadows 
              lightShadowColor="#1c1c1c"
              style={styles.Neomorph}
            >
             <View style={{flexDirection:"row"}}>
                <View style={{flex:1}}>
              <Text style={styles.textheading}>{item.Text}</Text>
              <Text style={styles.text1}>Nice job! You have successfully completed {item.days} days </Text>
              <Text style={styles.text2}>in your week {item.week}. </Text>
              </View>
              <View style={{flex:1 }}>
              
              <ProgressChart
                 data={data}
                 height={130}
                 width={screenWidth-210}
                 strokeWidth={8}
                 radius={25}
                  chartConfig={{
                    backgroundGradientFrom:"#2b3138",
                    backgroundGradientFromOpacity:1,
                    backgroundGradientTo:  "#2b3138",
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 2) => `rgba(255, 240, 0, ${opacity})`,
                    
                  

                    }}
                    
                      />
               
              </View>
              
              
              </View>
            </Neomorph>
       </View>
    )
};
const styles = StyleSheet.create({
  container:{
    margin:15,alignItems:"center"
  },
  Neomorph:{
    shadowRadius: 3,
             shadowOffset:{width:4,height:5.5},
             borderRadius: 13,
             shadowOpacity:0.4,
             backgroundColor: "#2b3138",
             width: 350,
             height: 150,
  },
  textheading:{
    color:"#f8e473",marginTop:15,marginLeft:10,fontFamily:"Poppins-SemiBold",fontSize:20
  },
  text1:{
    color:"grey",marginLeft:10,fontFamily:"Poppins-Regular"
  },
  text2:{
    color:"grey",marginLeft:10,fontFamily:"Poppins-Regular",top:-5
  }
})
export default Progressflatlist;