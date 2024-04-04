import React from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Stylesheet from '../../assets/styles/stylesheet';

const Courseflatlist = ({item}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const courseName = route.params;

  return (
    <View style={styles.container}>
      <Neomorph lightShadowColor="#1c1c1c" style={styles.Neomorph}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item.image}}
            style={Stylesheet.Courseprof}></Image>
          <View>
            <Text style={styles.courseName}>{courseName}</Text>
            <Text numberOfLines={1} style={styles.descreptionText}>
              {item.description}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.durationText}>Duration :{item.duration}</Text>
              <TouchableOpacity
                onPress={() => {
                  {
                    navigation.navigate('Weekdetail');
                  }
                }}>
                <AntDesign
                  name="arrowright"
                  size={20}
                  color="#f8e473"
                  style={{paddingLeft: 100}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Neomorph>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202329',
    flex: 1,
  },
  Neomorph: {
    shadowRadius: 3,
    shadowOffset: {width: 3, height: 5.5},
    borderRadius: 5,
    shadowOpacity: 0.4,
    backgroundColor: '#2b3138',
    height: 70,
    width: 335,
    margin: 20,
    left: 6,
  },
  courseName: {
    fontSize: 15,
    color: '#A9A9A9',
    left: 20,
    fontFamily: 'Poppins-SemiBold',
    top: 4,
  },
  descreptionText: {
    width: 220,
    fontSize: 12,
    color: 'grey',
    paddingLeft: 20,
    fontFamily: 'Poppins-Regular',
  },
  durationText: {
    fontSize: 12,
    color: 'grey',
    paddingLeft: 20,
    fontFamily: 'Poppins-Regular',
  },
});
export default Courseflatlist;
