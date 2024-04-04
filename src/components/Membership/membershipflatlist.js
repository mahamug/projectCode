import React from "react";
import { View,Text, TouchableOpacity,StyleSheet } from "react-native";
import { Shadow } from 'react-native-neomorph-shadows';
import { Neomorph } from 'react-native-neomorph-shadows';
import { useState } from "react";
import Modal from 'react-native-modal';
import {RadioButton} from 'react-native-paper';



const Membershipflatlist = ({item}) =>{
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState('first');
  const [Active,setActive] = useState('Upgrade');
  const [Color,setColor] = useState('#A9A9A9');

    return(
        <View style={styles.container}>
          <Shadow
          useArt 
          style={styles.shadow}
         >

          <View style={{flexDirection: 'row'}}>
        <View style={{flex:1,height: 190,}}>
          <View style={{marginLeft:10}}>
         <Text style={styles.membershipText}>{item.membership}</Text>
         <Text style={styles.itemText}>{item.Text}</Text>
         <Text style={styles.itemText}>{item.description}</Text>
         </View>

         <View style={styles.View}>
         <Text style={styles.dollarText}>$</Text>
         <Text style={styles.monthdescriptionText}>0/mo</Text>
         <Text style={styles.yellowText}>$</Text>
         <Text style={styles.greyText}>0/yr</Text>
         <Text style={styles.yellowText}>$</Text>
         <Text style={styles.greyText}>0 for lifetime</Text>
         </View>
         </View>


         <View style={{flex:1/1.6}}>
             <TouchableOpacity onPress={()=>{
              setModalVisible(true);
             }} 
             >
             <Neomorph
             swapShadows // <- change zIndex of each shadow color
             lightShadowColor="#1c1c1c"
             style={styles.buttonShadow}
            >
              <Text style={{ color:Color,alignSelf:"center",marginTop:10,fontFamily:"Poppins-SemiBold"}}>{Active}</Text>
              
            </Neomorph>
          </TouchableOpacity>
          </View>
          </View>
        </Shadow>    

         
      <Modal
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        style={styles.modalcontainer}
        isVisible={modalVisible}>
        <View
          style={styles.modalView}>
         <Text style={styles.modalheading}>Choose Membership Plan</Text>

        <View style={styles.radiobuttonView}>
            <RadioButton
              color="white"
              uncheckedColor="grey"
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={styles.modalText}>
              $3/mo
            </Text>
           </View> 
           <View style={styles.radiobuttonView2}>
              <RadioButton
                color="white"
                uncheckedColor="grey"
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
            
            <Text style={styles.modalText}>
              $10/yr
            </Text>
            </View>
            <View style={styles.radiobuttonView3}>
              <RadioButton
                color="white"
                uncheckedColor="grey"
                value="second"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
            <Text style={styles.modalText}>
              $50 for lifetime
            </Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <TouchableOpacity   onPress={()=>{
              if (Active=="Active")
              {
               setActive('Active')
               setColor('#f8e473')
              
              }
                
             else{
              setActive('Active')
              setColor('#f8e473')
              }
              console.log("Upgrade clicked")
              setModalVisible(false);
              }}>
              <Neomorph
             // <- enable shadow inside of neomorph
             swapShadows // <- change zIndex of each shadow color
             lightShadowColor="#1c1c1c"
             
             style={{
              shadowRadius: 3,
              shadowOffset:{width:4,height:5.5},
              borderRadius: 25,
              shadowOpacity:0.4,
              backgroundColor: "#2b3138",
              width: 100,
              height: 40,
              marginTop:40,
              
             }}
            >
              <Text style={{color:"#f8e473",alignSelf:"center",marginTop:10,fontFamily:"Poppins-SemiBold"}}>Upgrade</Text>
            </Neomorph>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{
                 setModalVisible(false);
              }}
              >
              <Neomorph
             // <- enable shadow inside of neomorph
             swapShadows // <- change zIndex of each shadow color
              lightShadowColor="#1c1c1c"
             
             style={{
             shadowRadius: 3,
             shadowOffset:{width:4,height:5.5},
             borderRadius: 25,
             shadowOpacity:0.4,
             backgroundColor: "#2b3138",
             width: 100,
             height: 40,
             marginTop:40,
             marginLeft:20,
             
             }}
            >
              <Text style={{color:"#f8e473",alignSelf:"center",marginTop:10,fontFamily:"Poppins-SemiBold"}}>Cancel</Text>
            </Neomorph>
              </TouchableOpacity>
            </View>
           </View>
      </Modal> 
      
      </View>
    )    
};
const styles = StyleSheet.create({
  container:{
    margin:20,alignItems:"center"
  },
  shadow:{
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,

   shadowRadius: 5,
   borderRadius: 15,
   backgroundColor: '#2b3138',
   width: 350,
  height: 150,
  },
  membershipText:{
    color:"#f8e473",fontSize:18,fontFamily:"Poppins-SemiBold",marginTop:15
  },
  itemText:{
    color:"grey",fontFamily:"Poppins-Regular"
  },
  View:{
    flexDirection:"row",marginLeft:10,margin:5
  },
  dollarText:{
    color:"#f8e473",fontFamily:"Poppins-Regular"
  },
  monthdescriptionText:{
    color:"grey",marginLeft:3,fontFamily:"Poppins-Regular"
  },
  yellowText:{
    color:"#f8e473",marginLeft:7,fontFamily:"Poppins-Regular"
  },
  greyText:{
    color:"grey",marginLeft:4,fontFamily:"Poppins-Regular"
  },
  buttonShadow:{
    shadowRadius: 3,
    shadowOpacity:0.3,
    shadowOffset:{width:4,height:5.5},
    borderRadius: 25,
    backgroundColor: "#2b3138",
    width: 100,
    height: 40,
    marginTop:40,
    marginLeft:20,
    
  },
  // buttonText:{
  //   color:Color,alignSelf:"center",marginTop:10,fontFamily:"Poppins-SemiBold"
  // },
  modalcontainer:{
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  modalView:{
    borderRadius: 20,
    height: 300,
    width: 300,
    backgroundColor: '#202329',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalheading:{
    color:"#f8e473",fontFamily:"Poppins-SemiBold",fontSize:18
  },
  radiobuttonView:{
    flexDirection: 'row',marginRight:160
  },
  modalText:{
    color: 'grey', top: 6, fontSize: 15, right: 4,fontFamily:"Poppins-Regular"
  },
  radiobuttonView2:{
    marginRight:165,flexDirection:"row"
  },
  radiobuttonView3:{
    marginRight: 95,flexDirection:"row"
  }
})
export default Membershipflatlist;