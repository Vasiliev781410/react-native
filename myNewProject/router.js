import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import PostsScreen from './Screens/Home/PostsScreen';
import CreatePostsScreen from './Screens/Home/CreatePostsScreen';
import ProfileScreen from './Screens/Home/ProfileScreen';

const MainStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

export const useRoute = (isAuth) => {
    if (!isAuth){
        return <MainStack.Navigator initialRouteName="Login">   
        <MainStack.Screen name="Реєстрація" component={RegistrationScreen} options={{headerShown: false}}/>
        <MainStack.Screen name="Вхід" component={LoginScreen} options={{headerShown: false}}/>
      </MainStack.Navigator>
    }else{
        return <TabStack.Navigator initialRouteName="Home" screenOptions={{"tabBarShowLabel": false}}>            
            <TabStack.Screen name="Створити публікацію" component={CreatePostsScreen}/>
            <TabStack.Screen name="Публікації" component={PostsScreen}/>
            <TabStack.Screen name="Профіль" component={ProfileScreen} options={{headerShown: false}}/>
        </TabStack.Navigator>

    }
}
