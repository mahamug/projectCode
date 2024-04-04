import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useRoute} from '@react-navigation/native';

const DrawerNavbar = ({navigation, title}) => {
    
  const route = useRoute();

  return (
    <View style={{flexDirection: 'row',margin:20,justifyContent:"space-between",alignItems:"center"}}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <EvilIcons
          name="navicon"
          size={30}
          color="#f8e473"
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          color: '#f8e473', 
          fontFamily:"Poppins-SemiBold"
        }}>
        {title}
      </Text>
      <FontAwesome
          name="home"
          size={27}
          color="#f8e473"
          
        />
    </View>
  );
};
export default DrawerNavbar;
