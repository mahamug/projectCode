import React from "react";
import {TouchableOpacity,Image,StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native';

const TrainingVideos = ({item}) =>{
    const navigation=useNavigation();
    return(
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('Video', item.image);
        }}>
        <Image
          style={styles.Image}
          source={{uri: item.image}}></Image>
      </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
  Image:{
    height: 250, width: 255, marginLeft: 15
  }
})
export default TrainingVideos;