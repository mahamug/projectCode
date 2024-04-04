import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RadioButton} from 'react-native-paper';
import Toggle from '../../../components/Signup/toggle';
import Stylesheet from '../../../assets/styles/stylesheet';
import {Shadow} from 'react-native-neomorph-shadows';
import {useNavigation} from '@react-navigation/native';
import ToggleSwitch from 'toggle-switch-react-native'
import ErrorMessages from '../../../components/ErrorMessages/ErrorMessages';
import AppContext from '../../../context/AppContext';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EditProfile = () => {

  const navigation = useNavigation();

  const {Img, storeImg} = useContext(AppContext);

  const [checked, setChecked] = useState('first');
  const [Email, setEmail] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Age, setAge] = useState('');
  const [Height, setHeight] = useState('');
  const [Weight, setWeight] = useState('');
  const [LoginErrors, setLoginErrors] = useState([]);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  
  const [isEnabled, setIsEnabled] = useState(true);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const [modalVisible, setModalVisible] = useState(false);
  
  
  const [galleryPhoto, setGalleryPhoto] = useState();

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };


  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryPhoto(result.assets[0].uri);
    setModalVisible(false);
  };

  
  
  return (
    
    <ScrollView>
      <View
      style={styles.container}>
      
      <Shadow
        useArt
        style={styles.shadow}>
           
        <Image
          source={{uri:galleryPhoto}}
        
          style={styles.image}></Image>
      </Shadow>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.text}>
          Edit photo
        </Text>
      </TouchableOpacity>
     
      <Shadow
        useArt
        style={styles.placeholderShadow}>
        <FontAwesome
          style={styles.icon}
          name="user"
          size={25}
          color="#f8e473"
        />
        <TextInput
          style={styles.textinput}
          placeholderTextColor="grey"
          placeholder="Username"
          value={Username}
          onChangeText={value => {setUsername(value);setLoginErrors([]);}}></TextInput>
      </Shadow>
      <Shadow
        useArt
        style={styles.placeholderShadow}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="email"
          size={30}
          color="#f8e473"
        />
        <TextInput
          style={styles.textinput}
          placeholderTextColor="grey"
          placeholder="Email"
          autoCapitalize="none"
          value={Email}
          onChangeText={text => {handleCheckEmail(text);setLoginErrors([]);}}></TextInput>
      </Shadow>

      <Shadow
        useArt
        style={styles.placeholderShadow}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="lock"
          size={30}
          color="#f8e473"
        />
        <TextInput
          style={styles.textinput}
          secureTextEntry={true}
          placeholderTextColor="grey"
          placeholder="Password"
          autoCapitalize="none"
          value={Password}
          onChangeText={value => {setPassword(value);setLoginErrors([]);}}></TextInput>
      </Shadow>

      <Shadow
        useArt
        style={styles.placeholderShadow}>
        <Entypo
          style={styles.icon}
          name="lock"
          size={30}
          color="#f8e473"
        />
        <TextInput
          style={styles.textinput}
          secureTextEntry={true}
          placeholderTextColor="grey"
          placeholder="Confirm Password"
          autoCapitalize="none"
          value={ConfirmPassword}
          onChangeText={value => {setConfirmPassword(value);setLoginErrors([]);}}></TextInput>
      </Shadow>

      <Shadow
        useArt
        style={styles.placeholderShadow}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="human-queue"
          size={30}
          color="#f8e473"
        />
        <TextInput
          style={styles.textinput}
          placeholderTextColor="grey"
          placeholder="Age"
          maxLength={3}
          keyboardType={'numeric'}
          value={Age}
          onChangeText={value => {setAge(value);setLoginErrors([]);}}></TextInput>
      </Shadow>

      <Shadow
        useArt
        style={styles.placeholderShadow}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="human-male-height"
          size={30}
          color="#f8e473"
        />
        <TextInput
          style={styles.textinput}
          placeholderTextColor="grey"
          placeholder="Height ft"
          keyboardType={'numeric'}
          value={Height}
          onChangeText={value => {setHeight(value);setLoginErrors([]);}}></TextInput>
      </Shadow>

      <Shadow
        useArt
        style={styles.placeholderShadow}>
        <FontAwesome5
          style={styles.icon}
          name="weight"
          size={25}
          color="#f8e473"
        />
        <TextInput
          style={styles.textinput}
          placeholderTextColor="grey"
          placeholder="Weight kg"
          keyboardType={'numeric'}
          value={Weight}
          onChangeText={value => {setWeight(value);setLoginErrors([]);}}></TextInput>
      </Shadow>
      <View style={styles.genderView}>
        <MaterialCommunityIcons
          name="human-male"
          size={25}
          color="#f8e473"
          style={{right: 6}}
        />
        <Text
          style={styles.maletext}>
          Male
        </Text>
        <ToggleSwitch
            isOn={isEnabled}
            onColor="#f8e473"
            offColor="#f8e473"
            size="medium"
             onToggle={isEnabled =>{setIsEnabled(isEnabled)}}
             />
        <MaterialCommunityIcons
          name="human-female"
          size={25}
          color="#f8e473"
          style={{left: 10}}
        />
        <Text
          style={styles.femaleText}>
          Female
        </Text>
      </View>
      <View style={styles.radioview}>
        <RadioButton
          color="#f8e473"
          uncheckedColor="grey"
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <Text
          style={styles.beginnertext}>
          Beginner
        </Text>
        <View style={{right: 7}}>
          <RadioButton
            color="#f8e473"
            uncheckedColor="grey"
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
        </View>
        <Text
          style={styles.intermediateText}>
          Intermidiate
        </Text>
        <View style={{right: 14}}>
          <RadioButton
            color="#f8e473"
            uncheckedColor="grey"
            value="second"
            status={checked === 'third' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('third')}
          />
        </View>
        <Text
          style={styles.advanceText}>
          Advance
        </Text>
      </View>
     
      <View style={{marginLeft:20,}}>
      {LoginErrors ? (
        
          <FlatList
            showsVerticalScrollIndicator={false}
            data={LoginErrors}
            renderItem={({item}) => {
              return <ErrorMessages item={item} />;
            }}
          />
        
      ) : null}
      </View>
    
     

      <TouchableOpacity
        onPress={() => {
          if (Username === '') {
            setLoginErrors([]);
            setLoginErrors(oldErrors => [...oldErrors, 'Username required.']);
          } else if (Username.length < 3) {
            setLoginErrors([]);

            setLoginErrors(oldErrors => [
              ...oldErrors,
              'Username is incorrect.',
            ]);
          } else if (Email === '') {
            setLoginErrors([]);
            setLoginErrors(oldErrors => [...oldErrors, 'Email required.']);
          } else if (checkValidEmail === true) {
            setLoginErrors([]);
            setLoginErrors(oldErrors => [...oldErrors, 'Invalid Email .']);
          } else if (Password === '') {
            setLoginErrors([]);
            setLoginErrors(oldErrors => [...oldErrors, 'Password required.']);
          } else if (Password.length < 8) {
            setLoginErrors([]);
            setLoginErrors(oldErrors => [
              ...oldErrors,
              'Password is atleast 8 characters.',
            ]);
          } else if (ConfirmPassword === '') {
            setLoginErrors([]);
            setLoginErrors(oldErrors => [...oldErrors, 'Confirm the password']);
          } else if (Password !== ConfirmPassword) {
            setLoginErrors([]);
            setLoginErrors(oldErrors => [
              ...oldErrors,
              'Password does not match.',
            ]);
          } else if (Age === '') {
            setLoginErrors([]);
            setLoginErrors(oldErrors => [...oldErrors, 'Age required.']);
          } else if (Height === '') {
            setLoginErrors([]);
            setLoginErrors(oldErrors => [...oldErrors, 'Height required.']);
          } else if (Weight === '') {
            setLoginErrors([]);
            setLoginErrors(oldErrors => [...oldErrors, 'Weight required.']);
          } else {
            navigation.navigate('Drawer');
          }
        }}>
         
        <Shadow
          useArt
          style={styles.buttonShadow}>
          <FontAwesome5
            style={styles.buttonIcon}
            name="user-edit"
            size={20}
            color="#f8e473"
          />
          <Text
            style={styles.buttonText}>
            Edit
          </Text>
        </Shadow>
        
      </TouchableOpacity>
      

      <Modal
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        style={styles.modal}
        isVisible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text
            style={styles.modalText}>
            Profile photo
          </Text>
          <View style={{ marginLeft: 16}}>
            <Shadow
              useArt
              style={styles.modalShadow}>
              <TouchableOpacity onPress={openGallery}>
                <FontAwesome
                  name="picture-o"
                  size={25}
                  color="white"
                  
                  style={styles.modalIcon}  
                
                />{storeImg(galleryPhoto)}
                
              </TouchableOpacity>
              
            </Shadow>
          </View>       
            <Text
              style={styles.GalleryText}>
              Gallery
            </Text>
         
        </View>
      </Modal>
      </View>
      </ScrollView>
      
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#202329',
  },
  shadow:{
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    backgroundColor: '#2b3138',
    borderRadius: 48,
    height: 96,
    width: 96,
    alignItems: 'center',
    margin: 15,
    marginLeft:145
  },
  image:{
    height: 76,
    width: 76,
    borderRadius: 38,
    marginTop: 10,
  },
  text:{
    color: '#f8e473', fontFamily: 'Poppins-Regular', marginLeft:155
  },
  placeholderShadow:{
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    backgroundColor: '#2b3138',
    borderRadius: 15,
    height: 40,
    width: 340,
    flexDirection: 'row',
    margin: 10,
    marginLeft:22
  },
  icon:{
    marginLeft: 10, top: 7
  },
  textinput:{
    color: 'white', paddingLeft: 10,width:340
  },
  genderView:{
    flexDirection: 'row', alignSelf: 'center', marginTop: 20
  },
  maletext:{
    color: '#A9A9A9',
    fontSize: 15,
    right: 11,
    fontFamily: 'Poppins-Regular',
  },
  femaleText:{
    color: '#A9A9A9',
    fontSize: 15,
    left: 5,
    fontFamily: 'Poppins-Regular',
  },
  radioview:{
    flexDirection: 'row', marginLeft: 25
  },
  beginnertext:{
    color: '#A9A9A9',
    top: 6,
    fontSize: 15,
    right: 4,
    fontFamily: 'Poppins-Regular',
  },
  intermediateText:{
    color: '#A9A9A9',
    top: 6,
    fontSize: 15,
    right: 11,
    fontFamily: 'Poppins-Regular',
  },
  advanceText:{
    color: '#A9A9A9',
    top: 6,
    fontSize: 15,
    right: 19,
    fontFamily: 'Poppins-Regular',
  },
  buttonShadow:{
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    backgroundColor: '#2b3138',
    borderRadius: 25,
    height: 40,
    width: 170,
    flexDirection: 'row',
    marginBottom: 100,
    marginLeft:100
  },
  buttonIcon:{
    marginLeft: 47, top: 7
  },
  buttonText:{
    color: '#A9A9A9',
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
    marginLeft: 5,
    fontSize: 20,
    marginTop: 4,
  },
  modal:{
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  modalContainer:{
    backgroundColor: '#1e1c1a', height: 210, width: 300
  },
  modalText:{
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 18,
    margin: 20,
  },
  modalShadow:{
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.6,
    shadowColor: 'black',
    shadowRadius: 5,
    backgroundColor: '#2b2825',
    borderRadius: 69,
    height: 78,
    width: 78,
  },
  modalIcon:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
  GalleryText:{
    color: 'white',
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    margin: 34,
    fontSize: 12,
  }
})
export default EditProfile;
