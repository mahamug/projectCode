import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import { useNavigation } from '@react-navigation/native';


const WeekDetailsFlatlist = ({item}) =>{

  const navigation=useNavigation();
    return(
        <View style={{marginLeft:20,marginTop:10}}>
        <Text
          style={{
            fontSize: 18,
            color: '#f8e473',
        
            fontFamily:"Poppins-SemiBold",
          }}>
          {item.week}
        </Text>
        <View style={{flexDirection: 'row',marginTop:8}}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('PerdayTraining')
          }}
          >
          <Neomorph
          lightShadowColor="#1c1c1c"
            style={{
              shadowRadius: 3,
              shadowOffset:{width:4,height:5.5},
              borderRadius: 10,
              shadowOpacity:0.4,
             backgroundColor: "#2b3138",
              height: 57,
              width: 57,
            }}>
            <Text style={{color: 'grey', alignSelf: 'center', top: 5,fontFamily:"Poppins-Regular"}}>
              Day
            </Text>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                
                fontSize: 18,
              }}>
              1
            </Text>
          </Neomorph>
          </TouchableOpacity>
          <Neomorph
          lightShadowColor="#1c1c1c"
            style={{
              shadowRadius: 3,
              shadowOffset:{width:4,height:5.5},
              borderRadius: 10,
              shadowOpacity:0.4,
             backgroundColor: "#2b3138",
              height: 57,
              width: 57,
              marginLeft:13
            }}>
            <Text style={{color: 'grey', alignSelf: 'center', top: 5,fontFamily:"Poppins-Regular"}}>
              Day
            </Text>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                
                fontSize: 18,
              }}>
              2
            </Text>
          </Neomorph>
          <Neomorph
          lightShadowColor="#1c1c1c"
            style={{
              shadowRadius: 3,
              shadowOffset:{width:4,height:5.5},
              borderRadius: 10,
              shadowOpacity:0.4,
             backgroundColor: "#2b3138",
              height: 57,
              width: 57,
              marginLeft:13
            }}>
            <Text style={{color: 'grey', alignSelf: 'center', top: 5,fontFamily:"Poppins-Regular"}}>
              Day
            </Text>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                
                fontSize: 18,
              }}>
              3
            </Text>
          </Neomorph>
          <Neomorph
          lightShadowColor="#1c1c1c"
            style={{
              shadowRadius: 3,
              shadowOffset:{width:4,height:5.5},
              borderRadius: 10,
              shadowOpacity:0.4,
             backgroundColor: "#2b3138",
              height: 57,
              width: 57,
              marginLeft:13
            }}>
            <Text style={{color: 'grey', alignSelf: 'center', top: 5,fontFamily:"Poppins-Regular"}}>
              Day
            </Text>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
              
                fontSize: 18,
              }}>
              4
            </Text>
          </Neomorph>
          <Neomorph
          lightShadowColor="#1c1c1c"
            style={{
              shadowRadius: 3,
              shadowOffset:{width:4,height:5.5},
              borderRadius: 10,
              shadowOpacity:0.4,
             backgroundColor: "#2b3138",
              height: 57,
              width: 57,
              marginLeft:13
            }}>
            <Text style={{color: 'grey', alignSelf: 'center', top: 5,fontFamily:"Poppins-Regular"}}>
              Day
            </Text>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                
                fontSize: 18,
              }}>
              5
            </Text>
          </Neomorph>
        </View>
        <View style={{flexDirection: 'row',marginTop:15,right:10}}>
        <Neomorph
          lightShadowColor="#1c1c1c"
            style={{
              shadowRadius: 3,
              shadowOffset:{width:4,height:5.5},
              borderRadius: 10,
              shadowOpacity:0.4,
             backgroundColor: "#2b3138",
              height: 57,
              width: 57,
              marginLeft:13
            }}>
            <Text style={{color: 'grey', alignSelf: 'center', top: 5,fontFamily:"Poppins-Regular"}}>
              Day
            </Text>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                
                fontSize: 18,
              }}>
              6
            </Text>
          </Neomorph>
          <View style={{flexDirection: 'row'}}>
          <Neomorph
          lightShadowColor="#1c1c1c"
            style={{
              shadowRadius: 3,
              shadowOffset:{width:4,height:5.5},
              borderRadius: 10,
              shadowOpacity:0.4,
             backgroundColor: "#2b3138",
              height: 57,
              width: 57,
              marginLeft:13
            }}>
              <Text style={{color: 'grey', alignSelf: 'center', top: 5,fontFamily:"Poppins-Regular"}}>
                Day
              </Text>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  fontSize: 18,
                }}>
                7
              </Text>
            </Neomorph>
          </View>
        </View>
      </View>
    )
    
};
export default WeekDetailsFlatlist;