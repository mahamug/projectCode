import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import BackButtonNavbar from '../../components/Navbar/BackButtonNavbar';
import WeekDetailsFlatlist from '../../components/WeekDetails/WeekDetailsflatlist';

const Weekdetail = () => {
  const navigation = useNavigation();
  const [Days, setDays] = useState([
    {
      week: 'Week 1',
    },
    {
      week: 'Week 2',
    },
    {
      week: 'Week 3',
    },
    {
      week: 'Week 4',
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#202329'}}>
     <BackButtonNavbar title="Week's Detail" navigation={navigation} />
      <FlatList
        showsVerticalScrollIndicator={false}
        key={'_'}
        data={Days}
        renderItem={({item}) => {
           return <WeekDetailsFlatlist item={item}/>
        }}
          />
    </View>
  );
};
export default Weekdetail;
