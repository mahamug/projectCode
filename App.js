import 'react-native-gesture-handler';
import React from "react";
import Signup from "./src/screens/Auth/Signup/Signup";
import Login from "./src/screens/Auth/Login/Login";
import List from "./src/screens/Dashboard/Dashboard";
import Course from './src/screens/Courses/Course';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawerComponent from './src/components/Drawer/CustomDrawerComponent';
import Catagories from './src/screens/Catagories/catagories';
import Weekdetail from './src/screens/Weeks/weekdetails';
import PerdayTraining from './src/screens/Content/perdaytraining';
import Video from './src/screens/Content/video';
import Membership from './src/screens/Membership/Membership';
import AvailableCourses from './src/screens/Active Courses/AvailableCourses/AvailableCourses';
import ProgressReport from './src/screens/Active Courses/Progress/ProgressReport';
import ContactSupport from './src/screens/ContactSupport/ContactSupport';
import { AppProvider } from './src/context/AppContext';
import EditProfile from './src/screens/Auth/EditProfile/EditProfile';
import Events from './src/screens/Events/EventsLists/events';
import EventsDetail from './src/screens/Events/EventsDetail/EventsDetail';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
 

const DrawerNavigator = ()=>{
  return(
     <Drawer.Navigator 
     drawerType="slide"
     drawerStyle={{width:60,}}
     drawerContent={() => <CustomDrawerComponent />}
     screenOptions={{
        borderBottomStartRadius: 50,
       borderTopStartRadius: 50,
       itemStyle: {marginVertical: 30},
       headerShown: false,
       activeTintColor:'#e91e63',
       borderBottomStartRadius:50,
       borderTopStartRadius:50,
       itemStyle:{marginVertical:30}
       }}>
   
      <Drawer.Screen name="Main" component={MainStackNavigator} />
    </Drawer.Navigator>
  
  );
};

  
const MainStackNavigator=()=>{
  return(
   <Stack.Navigator screenOptions={{
    headerShown: false,
   
    }}>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Course" component={Course} />
      <Stack.Screen name="Catagories" component={Catagories} />
      <Stack.Screen name="Weekdetail" component={Weekdetail} />
      <Stack.Screen name="PerdayTraining" component={PerdayTraining} />
      <Stack.Screen name="Video" component={Video} />
      <Stack.Screen name="Membership" component={Membership} />
      <Stack.Screen name="AvailableCourses" component={AvailableCourses} />
      <Stack.Screen name="ProgressReport" component={ProgressReport} />
      <Stack.Screen name="ContactSupport" component={ContactSupport} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="EventsDetail" component={EventsDetail} />
      </Stack.Navigator>
  );
};

const AuthStackNavigator = () => {
  return(
  <Stack.Navigator 
  screenOptions={{
    headerShown:
    false
  }}>
     <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
  </Stack.Navigator>
  );
}
  const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
      <AuthStackNavigator/>
      </NavigationContainer>
    </AppProvider>

  );
   
  }

 
export default App;