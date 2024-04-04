import React from 'react';
import {View, Text} from 'react-native';

const ErrorMessages = ({item,}) => {
  return (
    <View>
        
      <Text
      
        style={{
          color: 'red',
          fontFamily: 'Poppins-Regular',
          alignSelf: 'flex-start',
          marginTop: 5,
          
        }}>
        {`${item}`}
      </Text>
      
      
    </View>
  );
};
export default ErrorMessages;
