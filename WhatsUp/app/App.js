import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//import UserDashboard from "./screens/UserDashboard";
//import OrganizerDashboardScreen from "./screens/OrganizerDashboard";
import SignUpScreen from './screens/SignUpScreen';
import Login from './screens/Login';
import ResetPassword from './screens/ResetPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrganizerNewEvent from './screens/OrganizerNewEvent';
import OrganizerPOC from './screens/OrganizerPOC';
import OrganizerDateInfo from './screens/OrganizerDataInfo';
import OrganizerDashboardScreen from './screens/OrganizerDashboard';
import OrganizerDaySchedule from './screens/OrganizerDaySchedule';

export default function App() {
  const Stack = createNativeStackNavigator();
  //headershown if u dont want the top navbar
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='OrgDay'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='NewEvent' component={OrganizerNewEvent} />
        <Stack.Screen name='POC' component={OrganizerPOC} />
        <Stack.Screen name='DataInfo' component={OrganizerDateInfo} />
        <Stack.Screen name='OrgDash' component={OrganizerDashboardScreen} />
        <Stack.Screen name='OrgDay' component={OrganizerDaySchedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
