import React, {useState,useContext} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Stylesheet from '../../assets/styles/stylesheet';
import Modal from 'react-native-modal';
import AppContext from '../../context/AppContext';

const CustomDrawerComponent = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [settingsView, setSettingsView] = useState(false);
  const {Img,storeImg} = useContext(AppContext);

  return (
    <View style={{flex: 1,backgroundColor:"#202329"}}>
      <Image
        source={{
          uri:
            Img,
        }}
        style={Stylesheet.CustmPro}></Image>
      <Text style={{color: '#A9A9A9', fontSize: 18, alignSelf: 'center',fontFamily:"Poppins-SemiBold"}}>
        Maheen Mughal
      </Text>
      <View
        style={{
          borderBottomColor: '#A9A9A9',
          borderBottomWidth: 1.3,
          margin: 10,
        }}
      />
      
      <View
        style={{
          flexDirection: 'row',
          marginTop: StatusBar.currentHeight || 0,
        }}>
        <MaterialCommunityIcons
          name="view-dashboard"
          size={23}
          color = '#f8e473'
          style={{paddingLeft: 15}}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('List');
          }}>
          <Text style={{fontSize: 18, paddingLeft: 10,fontFamily:"Poppins-Regular",color: '#A9A9A9',}}>Dashboard</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 8}}>
        <MaterialCommunityIcons
          name="human"
          size={23}
          color = '#f8e473'
          style={{paddingLeft: 15}}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Catagories');
          }}>
          <Text style={{color: '#A9A9A9', fontSize: 18, paddingLeft: 10,fontFamily:"Poppins-Regular"}}>
            Catagories
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 8}}>
        <MaterialCommunityIcons
          name="wallet-membership"
          size={23}
          color = '#f8e473'
          style={{paddingLeft: 15}}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Membership');
          }}>
          <Text style={{color: '#A9A9A9', fontSize: 18, paddingLeft: 10,fontFamily:"Poppins-Regular"}}>
            Membership
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 8}}>
        <MaterialCommunityIcons
          name="archive-lock-open-outline"
          size={23}
          color = '#f8e473'
          style={{paddingLeft: 15}}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AvailableCourses');
          }}>
          <Text style={{color: '#A9A9A9', fontSize: 18, paddingLeft: 10,fontFamily:"Poppins-Regular"}}>
            Progress
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 8}}>
        <MaterialIcons
          name="support-agent"
          size={23}
          color = '#f8e473'
          style={{paddingLeft: 15}}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ContactSupport');
          }}>
          <Text style={{color: '#A9A9A9',fontSize: 18, paddingLeft: 10,fontFamily:"Poppins-Regular"}}>
            Support
          </Text>
        </TouchableOpacity>
      </View>


      <View style={{flexDirection: 'row', marginTop: 8}}>
        <MaterialIcons
          name="event"
          size={23}
          color = '#f8e473'
          style={{paddingLeft: 15}}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Events');
          }}>
          <Text style={{color: '#A9A9A9', fontSize: 18, paddingLeft: 10,fontFamily:"Poppins-Regular"}}>
            Events
          </Text>
        </TouchableOpacity>
      </View>


      <View style={{flexDirection: 'row', marginTop: 8}}>
        <FontAwesome5
          name="user-edit"
          size={23}
          color = '#f8e473'
          style={{paddingLeft: 15}}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditProfile');
          }}>
          <Text style={{color: '#A9A9A9', fontSize: 18, paddingLeft: 10,fontFamily:"Poppins-Regular"}}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>


      <View style={{justifyContent: 'flex-end', flex: 1}}>
       
          <View style={{flexDirection: 'row', marginTop: 8}}>
          <Ionicons
            name="exit-outline"
            size={23}
            color = '#f8e473'
            style={{paddingLeft: 15}}
          />
          <TouchableOpacity>
            <Text style={{color: '#A9A9A9', fontSize: 18, paddingLeft: 10,fontFamily:"Poppins-Regular"}}>
              LogOut
            </Text>
          </TouchableOpacity>
          </View>
      </View>

      <Modal
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        style={{flex: 1, justifyContent: 'center'}}
        isVisible={modalVisible}>
        <View
          style={{backgroundColor: 'white', height: 300, width: 250}}></View>
      </Modal>
    </View>
  );
};
export default CustomDrawerComponent;
