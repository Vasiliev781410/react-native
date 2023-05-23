import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/Home/Home';

const MainStack = createStackNavigator();


export const useRoute = () => {
    return ( 
    <MainStack.Navigator initialRouteName="Login">   
       <MainStack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false, title: "Реєстрація"}}/>
       <MainStack.Screen name="Login" component={LoginScreen} options={{headerShown: false, title: "Вхід"}}/>
       <MainStack.Screen name="Home" component={HomeScreen} options={{headerShown: false, title: "Публікації"}}/>
    </MainStack.Navigator>
    )
}
