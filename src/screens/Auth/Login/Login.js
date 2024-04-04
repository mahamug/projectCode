import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import { Neomorph } from 'react-native-neomorph-shadows';
import { Shadow } from 'react-native-neomorph-shadows';
import Stylesheet from '../../../assets/styles/stylesheet';
import AppContext from '../../../context/AppContext';
import ErrorMessages from '../../../components/ErrorMessages/ErrorMessages';


const Login = () => {
  const navigation = useNavigation();
  const {Watch,storeWatch} = useContext(AppContext);
  const[isFocused,setIsFocused] = React.useState(false);
  const [Email,setEmail]  = useState('maheen@gmail.com');
  const [Password,setPassword]  = useState('password');
  const [LoginErrors,setLoginErrors]  = useState([]);
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
 
  return (
    <View style={styles.container}>
     <View style={styles.design}>
               </View> 
          <Text
          style={styles.heading}>
          Login
        </Text>
        <Text
          style={styles.subheading}>
          Please sign in to continue
        </Text>
        <View>
  
          <Shadow
        useArt
        style={styles.shadow}>
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
              autoCapitalize='none'
              value={Email}
              onChangeText={text => {
                setLoginErrors([]);
                handleCheckEmail(text);
              }}
              ></TextInput>
            </Shadow> 

               <Shadow
        useArt
        style={styles.PasswordShadow}>
            <Entypo
              style={styles.icon}
              name="lock"
              size={30}
              color="#f8e473"
            />
            <TextInput
              style={styles.textinput}
              autoCapitalize='none'
              secureTextEntry={true}
              placeholderTextColor="grey"
              placeholder=" Password"
              value={Password}
              onChangeText={value => {setPassword(value);setLoginErrors([]);}}
              ></TextInput>
              </Shadow>
  
          <TouchableOpacity>
            <Text
              style={styles.forgetPasswordText}>
              Forget Password ?
            </Text>
            </TouchableOpacity>
            <View style={{marginLeft:25}}>
              <FlatList
              showsVerticalScrollIndicator={false}
              data={LoginErrors}
              renderItem={({ item }) => {
                return <ErrorMessages item={item}/>
                
              }}
              />
            </View>

        
          <TouchableOpacity
            onPress={() => {
              if (Email == '') {
                setLoginErrors([]);
                setLoginErrors(oldErrors => [...oldErrors,"Email required."]);
              }
              else if  (checkValidEmail === true ) {
                setLoginErrors([]);
                setLoginErrors(oldErrors => [...oldErrors,"Invalid Email."]);
              }
               else if  (Password ==='') {
                setLoginErrors([]);
                setLoginErrors(oldErrors => [...oldErrors,"Password required."]);
              } 
              else if  (Password.length<8) {
                setLoginErrors([]);
                setLoginErrors(oldErrors => [...oldErrors,"Password is atleast 8 characters."]);
              } 
              else {
               
                navigation.navigate('Drawer');
              }
              // storeWatch("na dikhao");
              
              }}>
               <Shadow
                useArt
                  style={styles.button}>
                     <Text style={styles.buttonText}>LogIn</Text>
                </Shadow>
           
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.noaccountText}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text style={styles.signupText}>
                
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
     
    </View>
  );
};
const styles = StyleSheet.create({
 container:{
  flex: 1,backgroundColor:"#202329"
 },
 design:{
  backgroundColor: 'rgba(0,0,0,0.4)',width:567,height:295,rotation:21,marginTop:-65,alignSelf:"center"
 },
 heading:{
  color: '#f8e473',
  fontSize: 40,
  marginLeft: 20,
 fontFamily:"Poppins-Bold"
 },
 subheading:{
  color: 'darkgrey', fontSize: 15, marginLeft: 20,fontFamily:"Poppins-Medium",bottom:10
 },
 shadow:{
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
 icon:{
  marginLeft: 10, top: 7
 },
 textinput:{
  color: 'white',width:300
 },
 PasswordShadow:{
  shadowOffset: {width: 3, height: 6},
  shadowOpacity: 0.4,
  shadowRadius: 5,
  backgroundColor: '#2b3138',
  borderRadius: 15,
  height: 40,
  width: 340,
  flexDirection: 'row',
  margin:20,
  marginTop:5
 },
 forgetPasswordText:{
  color: 'slategray',
  fontSize: 13,
  bottom:8,
  marginRight:27,
  fontFamily:"Poppins-SemiBold",
  alignSelf:"flex-end"
 },
 button:{
  shadowOffset: {width: 3, height: 6},
  shadowOpacity: 0.4,
  shadowRadius: 5,
  backgroundColor: '#2b3138',
  borderRadius: 20,height: 35, width: 200,
   marginLeft:90,
 },
 buttonText:{
  color:"#f8e473",alignSelf:"center",fontFamily:"Poppins-Bold",fontSize:20
 },
 noaccountText:{
  color: 'grey', fontSize: 15, marginLeft: 22,fontFamily:"Poppins-Regular",marginTop:10
 },
 signupText:{
  color: 'slategrey', fontSize: 15,left:4,fontFamily:"Poppins-SemiBold",marginTop:10
 }
})
export default Login;
