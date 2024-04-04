import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RadioButton} from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native';
import Toggle from '../../../components/Signup/toggle';
import Stylesheet from '../../../assets/styles/stylesheet';
import {useNavigation} from '@react-navigation/native';
import ErrorMessages from '../../../components/ErrorMessages/ErrorMessages';
import {Shadow} from 'react-native-neomorph-shadows';

const Signup = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  const [Email, setEmail] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Age, setAge] = useState('');
  const [Height, setHeight] = useState('');
  const [Weight, setWeight] = useState('');
  const [LoginErrors, setLoginErrors] = useState([]);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

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

  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>
      <ScrollView>
        <View style={{top: 22}}>
          <Shadow useArt style={styles.shadow}>
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
              onChangeText={value => {
                setUsername(value);
                setLoginErrors([]);
              }}></TextInput>
          </Shadow>

          <Shadow useArt style={styles.emailShadow}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="email"
              size={28}
              color="#f8e473"
            />
            <TextInput
              style={styles.textinput}
              placeholderTextColor="grey"
              placeholder="Email"
              autoCapitalize="none"
              value={Email}
              onChangeText={text => {
                handleCheckEmail(text);
                setLoginErrors([]);
              }}></TextInput>
          </Shadow>

          <Shadow useArt style={styles.passwordShadow}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="lock"
              size={28}
              color="#f8e473"
            />
            <TextInput
              style={styles.textinput}
              secureTextEntry={true}
              placeholderTextColor="grey"
              placeholder="Password"
              autoCapitalize="none"
              value={Password}
              onChangeText={value => {
                setPassword(value);
                setLoginErrors([]);
              }}></TextInput>
          </Shadow>

          <Shadow useArt style={styles.passwordShadow}>
            <Entypo style={styles.icon} name="lock" size={28} color="#f8e473" />
            <TextInput
              style={styles.textinput}
              secureTextEntry={true}
              placeholderTextColor="grey"
              placeholder="Confirm Password"
              autoCapitalize="none"
              value={ConfirmPassword}
              onChangeText={value => {
                setConfirmPassword(value);
                setLoginErrors([]);
              }}></TextInput>
          </Shadow>

          <Shadow useArt style={styles.passwordShadow}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="human-queue"
              size={28}
              color="#f8e473"
            />
            <TextInput
              style={styles.textinput}
              placeholderTextColor="grey"
              placeholder="Age"
              maxLength={3}
              keyboardType={'numeric'}
              value={Age}
              onChangeText={value => {
                setAge(value);
                setLoginErrors([]);
              }}></TextInput>
          </Shadow>

          <Shadow useArt style={styles.passwordShadow}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="human-male-height"
              size={28}
              color="#f8e473"
            />
            <TextInput
              style={styles.textinput}
              placeholderTextColor="grey"
              placeholder="Height ft"
              keyboardType={'numeric'}
              value={Height}
              onChangeText={value => {
                setHeight(value);
                setLoginErrors([]);
              }}></TextInput>
          </Shadow>

          <Shadow useArt style={styles.passwordShadow}>
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
              onChangeText={value => {
                setWeight(value);
                setLoginErrors([]);
              }}></TextInput>
          </Shadow>

          <View style={styles.view}>
            <MaterialCommunityIcons
              name="human-male"
              size={25}
              color="#f8e473"
              style={{right: 7}}
            />
            <Text style={styles.maleText}>Male</Text>
            <ToggleSwitch
              isOn={isEnabled}
              onColor="#f8e473"
              offColor="#f8e473"
              size="medium"
              onToggle={isEnabled => {
                setIsEnabled(isEnabled);
              }}
            />
            <MaterialCommunityIcons
              name="human-female"
              size={25}
              color="#f8e473"
              style={{left: 3}}
            />
            <Text style={styles.FemaleText}>Female</Text>
          </View>
          <View style={styles.radiobuttonView}>
            <RadioButton
              color="#f8e473"
              uncheckedColor="grey"
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text style={styles.beginnerText}>Beginner</Text>
            <View style={{right: 7}}>
              <RadioButton
                color="#f8e473"
                uncheckedColor="grey"
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
            </View>
            <Text style={styles.IntermidiateText}>Intermidiate</Text>
            <View style={{right: 14}}>
              <RadioButton
                color="#f8e473"
                uncheckedColor="grey"
                value="second"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
            </View>
            <Text style={styles.AdvanceText}>Advance</Text>
          </View>
          {LoginErrors ? (
            <View style={{marginLeft: 20}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={LoginErrors}
                renderItem={({item}) => {
                  return <ErrorMessages item={item} />;
                }}
              />
            </View>
          ) : null}

          <TouchableOpacity
            onPress={() => {
              if (Username === '') {
                setLoginErrors([]);
                setLoginErrors(oldErrors => [
                  ...oldErrors,
                  'Username required.',
                ]);
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
                setLoginErrors(oldErrors => [
                  ...oldErrors,
                  'Password required.',
                ]);
              } else if (Password.length < 8) {
                setLoginErrors([]);
                setLoginErrors(oldErrors => [
                  ...oldErrors,
                  'Password is atleast 8 characters.',
                ]);
              } else if (ConfirmPassword === '') {
                setLoginErrors([]);
                setLoginErrors(oldErrors => [
                  ...oldErrors,
                  'Confirm the password',
                ]);
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
            <View style={{marginBottom: 45}}>
              <Shadow useArt style={styles.button}>
                <Text style={styles.buttonText}>SignUp</Text>
              </Shadow>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontSize: 30,
    marginLeft: 20,
    margin: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  shadow: {
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    backgroundColor: '#2b3138',
    borderRadius: 15,
    height: 40,
    width: 340,
    flexDirection: 'row',
    margin: 20,
  },
  icon: {
    marginLeft: 10,
    top: 7,
  },
  textinput: {
    color: 'white',
    paddingLeft: 10,
    width: 300,
  },
  emailShadow: {
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    backgroundColor: '#2b3138',
    borderRadius: 15,
    height: 40,
    width: 340,
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 20,
  },
  passwordShadow: {
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    backgroundColor: '#2b3138',
    borderRadius: 15,
    height: 40,
    width: 340,
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 20,
  },
  view: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 20,
  },
  maleText: {
    color: 'white',
    fontSize: 15,
    right: 10,
    fontFamily: 'Poppins-Regular',
  },
  FemaleText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  radiobuttonView: {
    flexDirection: 'row',
    marginLeft: 15,
    bottom: 10,
  },
  beginnerText: {
    color: 'white',
    top: 6,
    fontSize: 15,
    right: 4,
    fontFamily: 'Poppins-Regular',
  },
  IntermidiateText: {
    color: 'white',
    top: 6,
    fontSize: 15,
    right: 11,
    fontFamily: 'Poppins-Regular',
  },
  AdvanceText: {
    color: 'white',
    top: 6,
    fontSize: 15,
    right: 19,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    backgroundColor: '#2b3138',
    borderRadius: 20,
    height: 35,
    width: 200,
    marginLeft: 90,
  },
  buttonText: {
    color: '#f8e473',
    alignSelf: 'center',
    fontSize: 17,
    padding: 4,
    fontFamily: 'Poppins-Bold',
  },
});
export default Signup;
