import React, {useState} from 'react';
import {View, Text, FlatList, TextInput, StyleSheet} from 'react-native';
import Catagoriesflatlist from '../../components/Catagories/catagoriesflatlist';
import {Card} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DrawerNavbar from '../../components/Navbar/DrawerNavbar';
import {Shadow} from 'react-native-neomorph-shadows';

const Catagories = ({navigation}) => {
  const [Catagories, SetCatagories] = useState([
    {
      image:
        'https://i.pinimg.com/236x/33/5e/44/335e44bae9c0f7e797e15999536f0424.jpg',
      name: 'Yoga',
      description:
        'Yoga offers physical and mental health benefits for people of all ages. And, if you’re going through an illness, recovering from surgery or living with a chronic condition, yoga can become an integral part of your treatment and potentially hasten healing. ',
      duration: '2 weeks',
    },
    {
      image:
        'https://i.pinimg.com/236x/0c/0d/ce/0c0dcef1cb1a4efa3a2c3531d6d5a00a.jpg',
      name: 'Arms',
      description:
        'Working out your arms and shoulders has many benefits. It can increase your muscle strength, muscle tone, and lean muscle mass. It can also reduce your risk of injury, improve your posture, protect your bones, and stabilize your joints',
      duration: '1 week',
    },
    {
      image:
        'https://i.pinimg.com/236x/91/08/15/9108152e39f4c69357b5d1fe8e2bd535.jpg',
      name: 'Stretching',
      description:
        'Stretching keeps the muscles flexible, strong, and healthy, and we need that flexibility to maintain a range of motion in the joints. Without it, the muscles shorten and become tight. Then, when you call on the muscles for activity, they are weak and unable to extend all the way. That puts you at risk for joint pain, strains, and muscle damage.',
      duration: '4 weeks',
    },
    {
      image:
        'https://i.pinimg.com/236x/c4/bf/9b/c4bf9b832da6e91e43f6ae0ade54a4d4.jpg',
      name: 'Kick-boxing ',
      description:
        'Kickboxing is a form of martial art that involves punching, kicking, and footwork. The sport incorporates moves from other types of martial arts, such as karate, as well as boxing.',
      duration: '6 weeks',
    },
    {
      image:
        'https://i.pinimg.com/236x/4f/a0/97/4fa0979882cb2a45aaf9caacdd16cef3.jpg',
      name: 'Upper Body ',
      description:
        'Upper body strength increases muscle mass. Improved muscle mass means better bone density. Reduces the risk of diabetes and keeps the heart-healthy.',
      duration: '4 weeks',
    },
    {
      image:
        'https://i.pinimg.com/236x/a6/ed/99/a6ed9923c24942636e1f26cb836b26d3.jpg',
      name: 'Cardio',
      description:
        'ardiovascular exercise can also help lower blood pressure, and keep your arteries clear by raising “good” high-density lipoprotein (HDL) cholesterol and lowering “bad” low-density lipoprotein (LDL) cholesterol levels in the blood.',
      duration: '14 weeks',
    },
    {
      image:
        'https://i.pinimg.com/236x/bc/8d/61/bc8d61dbb9b262b035e5d6007d1a473f.jpg',
      name: 'Abbs',
      description:
        'Abdominal exercises provide strength to bear weight. An individual who engages in abdominal workouts is better placed to lift heavier weights without causing damage to the spine',
      duration: '20 weeks',
    },
    {
      image:
        'https://i.pinimg.com/236x/82/7a/a9/827aa9e3b0354e09aebe36f8a50ba3ca.jpg',
      name: 'Strength',
      description:
        'Strength training can help you manage or lose weight, and it can increase your metabolism to help you burn more calories',
      duration: '3 weeks',
    },
    {
      image:
        'https://i.pinimg.com/236x/ce/94/5d/ce945d6f4e17a25b0ee5881851cf95cd.jpg',
      name: 'Low-impact',
      description:
        'Not only does low-impact exercise come with the benefits of improved strength, lower blood pressure and reduced stress, but such a workout also cuts down on the risk of musculoskeletal injury, Crockford adds.',
      duration: '5 weeks',
    },
    {
      image:
        'https://i.pinimg.com/236x/ff/35/11/ff3511f2cfb9afda7e8bfade233f251d.jpg',
      name: 'HIIT',
      description:
        'High-intensity interval training (HIIT) involves short, intense workouts. You give a series of exercises your full effort for short bursts, and follow it with a period of rest',
      duration: '8 weeks',
    },
  ]);

  return (
    <View style={styles.container}>
      <DrawerNavbar title="Catagories" navigation={navigation} />
      <Shadow useArt style={styles.shadow}>
        <View style={{flexDirection: 'row'}}>
          <EvilIcons
            name="search"
            size={30}
            color="black"
            style={{alignSelf: 'center'}}
          />
          <TextInput
            placeholder="Search catagories"
            style={styles.TextInput}
            placeholderTextColor="grey"></TextInput>
        </View>
      </Shadow>
      <Text style={styles.heading}>Categories</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{top: -20}}
        numColumns={2}
        data={Catagories}
        renderItem={({item}) => {
          return <Catagoriesflatlist item={item} />;
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
  shadow: {
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: '#2b3138',
    borderRadius: 15,
    height: 33,
    width: 340,
    marginTop: 10,
    marginLeft: 22,
  },
  TextInput: {
    padding: 3,
    color: 'black',
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#f8e473',
    margin: 20,
  },
});
export default Catagories;
