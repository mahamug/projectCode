import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Neomorph} from 'react-native-neomorph-shadows';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageZoom from 'react-native-image-pan-zoom';
import Modal from 'react-native-modal';
import BackButtonNavbar from '../../components/Navbar/BackButtonNavbar';
import {useNavigation} from '@react-navigation/native';

const Video = ({route}) => {
  const CoureImage = route.params;
  const navigation = useNavigation();
  const [SelectedItem, setSelectedItem] = useState(CoureImage);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <BackButtonNavbar title="Per Day Training" navigation={navigation} />
      <Text style={styles.heading}>Video</Text>
      <Neomorph
        swapShadows // <- change zIndex of each shadow color
        lightShadowColor="#1c1c1c"
        style={styles.VideoNeomorph}>
        <Image style={styles.Image} source={{uri: CoureImage}}></Image>
      </Neomorph>
      <View style={styles.View}>
        <Neomorph
          swapShadows
          lightShadowColor="#1c1c1c"
          style={styles.pauseNeomorph}>
          <AntDesign
            name="pausecircleo"
            size={33}
            color="white"
            style={styles.icon}
          />
        </Neomorph>
        <Neomorph
          swapShadows
          lightShadowColor="#1c1c1c"
          style={styles.playNeomorph}>
          <AntDesign
            name="playcircleo"
            size={33}
            color="white"
            style={styles.icon}
          />
        </Neomorph>
        <Neomorph
          swapShadows
          lightShadowColor="#1c1c1c"
          style={styles.fullscreenNeomorph}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <MaterialCommunityIcons
              name="fullscreen"
              size={33}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </Neomorph>
      </View>
      <Text style={styles.Text}>Foot And Ankle Integrity</Text>
      <Text style={styles.text2}>(Level 1)</Text>
      <Text style={styles.textSubheading}>
        Here you will find a foot and ankle routine meant to restore and/ or
        fortify the necessary components of strong, injury resistant feet and
        ankles.
      </Text>

      <Modal
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        style={styles.modalContainer}
        isVisible={modalVisible}>
        <View style={styles.modalView}>
          <ImageZoom
            imageWidth={350}
            imageHeight={400}
            cropHeight={400}
            cropWidth={350}>
            <Image
              style={styles.Imagezoom}
              source={{uri: SelectedItem}}></Image>
          </ImageZoom>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202329',
  },
  heading: {
    alignSelf: 'center',
    color: '#f8e473',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  VideoNeomorph: {
    shadowRadius: 3,
    shadowOffset: {width: 4, height: 5.5},
    borderRadius: 10,
    shadowOpacity: 0.4,
    borderRadius: 10,
    backgroundColor: '#2b3138',
    width: 368,
    height: 350,
    marginLeft: 7,
    margin: 10,
  },
  Image: {
    height: 305,
    width: 340,
    margin: 20,
    alignSelf: 'center',
  },
  View: {
    flexDirection: 'row',
    margin: 20,
    alignSelf: 'center',
  },
  pauseNeomorph: {
    backgroundColor: '#2b3138',
    shadowRadius: 3,
    shadowOffset: {width: 4, height: 5.5},
    shadowOpacity: 0.4,
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  icon: {
    alignSelf: 'center',
    top: 16,
  },
  playNeomorph: {
    backgroundColor: '#2b3138',
    shadowRadius: 3,
    shadowOffset: {width: 4, height: 5.5},
    shadowOpacity: 0.4,
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
  },
  fullscreenNeomorph: {
    backgroundColor: '#2b3138',
    shadowRadius: 3,
    shadowOffset: {width: 4, height: 5.5},
    shadowOpacity: 0.4,
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
  },
  Text: {
    color: '#f8e473',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    marginLeft: 14,
  },
  text2: {
    color: '#f8e473',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 14,
    fontFamily: 'Poppins-SemiBold',
  },
  textSubheading: {
    color: 'grey',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    marginLeft: 14,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    orderRadius: 10,
    height: 600,
    width: 350,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imagezoom: {
    height: 300,
    width: 350,
    marginTop: 40,
  },
});
export default Video;
