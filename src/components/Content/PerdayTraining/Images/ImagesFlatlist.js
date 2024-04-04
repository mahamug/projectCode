import React,{useState} from "react";
import { Image,Text,TouchableOpacity, View } from "react-native";
import {Card} from 'react-native-paper';
import ImageZoom from 'react-native-image-pan-zoom';
import Modal from 'react-native-modal';
import { Neomorph } from "react-native-neomorph-shadows";

const ImagesFlatlist = ({item}) =>{
  const [modalVisible, setModalVisible] = useState(false);
  const [SelectedItem, setSelectedItem] = useState();
    return(
      <View style={{marginTop:20}}>
         <Neomorph
        swapShadows // <- change zIndex of each shadow color
        lightShadowColor="#1c1c1c"
          style={{
            shadowRadius:3,
            shadowOffset:{width:4,height:5.5},
            borderRadius: 10,
            shadowOpacity:0.4,
            backgroundColor: "#2b3138",
            height: 100,
            width: 100,
            marginHorizontal: 7,
            alignItems:"center",
            justifyContent:"center"
           
           
          }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setSelectedItem(item.image);
          }}>
          <Image
            style={{
              height: 90,
              width: 90,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              
            }}
            source={{uri: item.image}}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </Neomorph>
      
      <Modal
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        isVisible={modalVisible}>
        <View
          style={{
            orderRadius: 10,
            height: 400,
            width: 350,
            backgroundColor: 'rgba(0,0,0,0.4)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageZoom
            imageWidth={350}
            imageHeight={400}
            cropHeight={400}
            cropWidth={350}>
            <Image
              style={{height: 400, width: 350}}
              source={{uri: SelectedItem}}></Image>
          </ImageZoom>
        </View>
      </Modal>
       </View>
      
    )
};
export default ImagesFlatlist