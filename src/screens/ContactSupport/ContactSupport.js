import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Neomorph} from 'react-native-neomorph-shadows';
import DrawerNavbar from '../../components/Navbar/DrawerNavbar';
import {Shadow} from 'react-native-neomorph-shadows';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ContactSupport = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [galleryPhoto, setGalleryPhoto] = useState();

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryPhoto(result.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      <DrawerNavbar title="Contact Support" navigation={navigation} />
      <View style={styles.View}>
        <Neomorph
          // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          lightShadowColor="#1c1c1c"
          style={styles.neomorph}>
          <TextInput
            placeholder="Title"
            placeholderTextColor="#555"
            style={styles.tittleTextinput}></TextInput>
        </Neomorph>

        <Neomorph
          swapShadows
          lightShadowColor="#1c1c1c"
          style={styles.detailsNeomorph}>
          <TextInput
            placeholder="Details about querry"
            placeholderTextColor="#555"
            style={styles.detailTextinput}></TextInput>
        </Neomorph>

        <Neomorph
          swapShadows
          lightShadowColor="#1c1c1c"
          style={styles.ImageNeomorph}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text style={styles.ImageText}>Select Image</Text>
            <Image
              resizeMode="contain"
              style={styles.Image}
              source={{uri: galleryPhoto}}
            />
          </TouchableOpacity>
        </Neomorph>
      </View>
      <View style={styles.View2}>
        <Neomorph
          // <- enable shadow inside of neomorph
          swapShadows // <- change zIndex of each shadow color
          lightShadowColor="#1c1c1c"
          style={styles.submitcaseNeomorph}>
          <TouchableOpacity>
            <Text style={styles.SubmitText}>Submit Case</Text>
          </TouchableOpacity>
        </Neomorph>
      </View>

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
          <Text style={styles.modalText}>Profile photo</Text>
          <View style={{marginLeft: 16}}>
            <Shadow useArt style={styles.modalNeomorph}>
              <TouchableOpacity onPress={openGallery}>
                <FontAwesome
                  name="picture-o"
                  size={25}
                  color="white"
                  style={styles.modalIcon}
                />
              </TouchableOpacity>
            </Shadow>
          </View>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-Regular',
              marginTop: 10,
              margin: 34,
              fontSize: 12,
            }}>
            Gallery
          </Text>
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
  View: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  neomorph: {
    shadowRadius: 3,
    shadowOffset: {width: 4, height: 5.5},
    borderRadius: 13,
    shadowOpacity: 0.4,
    backgroundColor: '#2b3138',
    width: 290,
    height: 55,
  },
  tittleTextinput: {
    marginLeft: 10,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
    width: 290,
  },
  detailsNeomorph: {
    shadowRadius: 3,
    shadowOffset: {width: 4, height: 5.5},
    borderRadius: 13,
    shadowOpacity: 0.4,
    backgroundColor: '#2b3138',
    width: 290,
    height: 300,
    margin: 10,
  },
  detailTextinput: {
    marginLeft: 10,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    width: 290,
  },
  ImageNeomorph: {
    shadowRadius: 3,
    shadowOffset: {width: 4, height: 5.5},
    borderRadius: 20,
    shadowOpacity: 0.4,
    backgroundColor: '#2b3138',
    width: 290,
    height: 45,
    margin: 12,
  },
  ImageText: {
    color: '#f8e473',
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  Image: {
    height: 170,
    width: 140,
    margin: 20,
    alignSelf: 'center',
  },
  View2: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    marginBottom: 30,
  },
  submitcaseNeomorph: {
    shadowRadius: 3,
    shadowOffset: {width: 4, height: 5.5},
    borderRadius: 20,
    shadowOpacity: 0.4,
    backgroundColor: '#2b3138',
    width: 290,
    height: 45,
  },
  SubmitText: {
    color: '#f8e473',
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: '#1e1c1a',
    height: 210,
    width: 300,
  },
  modalText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 18,
    margin: 20,
  },
  modalNeomorph: {
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.6,
    shadowColor: 'black',
    shadowRadius: 5,
    backgroundColor: '#2b2825',
    borderRadius: 69,
    height: 78,
    width: 78,
  },
  modalIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
});
export default ContactSupport;
