import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ImagesFlatlist from '../../components/Content/PerdayTraining/Images/ImagesFlatlist';
import TrainingVideos from '../../components/Content/PerdayTraining/Videos/TrainingVideos';
import BackButtonNavbar from '../../components/Navbar/BackButtonNavbar';
import {useNavigation} from '@react-navigation/native';

const PerdayTraining = () => {
  const navigation = useNavigation();
  const [Videos, setVideos] = useState([
    {
      image:
        'https://i.pinimg.com/originals/02/5d/3d/025d3d9c567c973be563b2991759ef7b.gif',
    },
    {
      image:
        'https://i.pinimg.com/originals/f1/09/9e/f1099eae725df5f147a6fc8eaab7027a.gif',
    },
    {
      image:
        'https://i.pinimg.com/originals/34/35/c1/3435c148786a08ff4782b3005ad991ef.gif',
    },
    {
      image:
        'https://i.pinimg.com/originals/c3/40/77/c3407765f94a43c4c1c2e99d8c9026ea.gif',
    },
    {
      image:
        'https://i.pinimg.com/originals/fb/f0/ae/fbf0ae6788c602d27748d4ce2b3e9380.gif',
    },
  ]);
  const [Img, setImg] = useState([
    {
      image:
        'https://i.pinimg.com/236x/55/44/52/55445261aba17592487ebc8d44f02bef.jpg',
    },
    {
      image:
        'https://i.pinimg.com/236x/51/d1/d4/51d1d43b6a53af06f25b5585741970fe.jpg',
    },
    {
      image:
        'https://i.pinimg.com/236x/6f/aa/6c/6faa6c6b23782500aec1ecf981d54258.jpg',
    },
    {
      image:
        'https://i.pinimg.com/236x/50/15/ec/5015ec122382e57ba418cca6bd2dda6c.jpg',
    },
    {
      image:
        'https://i.pinimg.com/236x/27/a0/73/27a0732a011c59693a1b66a769099d9d.jpg',
    },
  ]);

  return (
    <View style={styles.container}>
      <BackButtonNavbar title="Per Day Training" navigation={navigation} />
      <Text style={styles.heading}>Foot and Ankle Integrity (Level 1)</Text>
      <Text style={styles.subheading}>
        Here you will find a foot and ankle routine meant to restore and/ or
        fortify the necessary components of strong, injury resistant feet and
        ankles.
      </Text>
      <Text style={styles.subheading2}>
        Whether you're looking to enhance your sport specific skills, run
        without pain, or restore function to injured feat/ankles - this is where
        to satrt.
      </Text>
      <Text style={styles.ImagesText}>Images</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={Img}
        renderItem={({item}) => {
          return <ImagesFlatlist item={item} />;
        }}
      />
      <Text style={styles.VideoText}>Training videos</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        key={'_'}
        style={{top: -30}}
        data={Videos}
        renderItem={({item}) => {
          return <TrainingVideos item={item} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202329',
  },
  heading: {
    color: '#f8e473',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    margin: 15,
  },
  subheading: {
    color: 'grey',
    marginLeft: 15,
    top: 10,
    fontFamily: 'Poppins-Regular',
  },
  subheading2: {
    color: 'grey',
    marginTop: 5,
    marginLeft: 15,
    fontFamily: 'Poppins-Regular',
  },
  ImagesText: {
    fontSize: 20,
    color: '#f8e473',
    marginLeft: 15,
    marginTop: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  VideoText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#f8e473',
    marginBottom: 40,
    marginLeft: 15,
  },
});
export default PerdayTraining;
