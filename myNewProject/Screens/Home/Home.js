import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, ImageBackground, View} from 'react-native';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';
import HeaderPosts from './HeaderPosts';
import HeaderBackToPosts from './HeaderBackToPosts';

export default function HomeScreen() {
    const TabStack = createBottomTabNavigator();

    return (      
            <TabStack.Navigator initialRouteName="Posts" barStyle={{ backgroundColor: '#FF6C00'}} screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                 
                  if (route.name === "Posts") {                    
                    return <ImageBackground  style={styles.iconLoadPhoto__img} source={require('../../assets/grid.png')}/>                         
                } else if (route.name === "Profile") {
                    return <ImageBackground  style={styles.iconLoadPhoto__img} source={require('../../assets/user.png')}/> 
                  } else if (route.name === "Create") {
                    return <ImageBackground  style={styles.iconLoadPhoto__img} source={require('../../assets/new.png')}/> 
                  }            
                },
                tabBarShowLabel: false,
              })}              

              >  
                <TabStack.Screen name="Posts" component={PostsScreen} options={{headerTitle: () => <HeaderPosts title="Публікації" /> }}/>            
                <TabStack.Screen name="Create" component={CreatePostsScreen} options={{headerTitle: () => <HeaderBackToPosts title="Створити публікацію" /> }} />                           
                <TabStack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false, title: "Профіль"}}/>
            </TabStack.Navigator> 
    );
}

// tabBarOptions={{
  // activeTintColor: "#FF6C00",
  // inactiveTintColor: "gray",      
// }}

const styles = StyleSheet.create({
    iconLoadPhoto__container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",        
        top: 90,
        right: "42%",      
        width: 60,
        height: 60,
        backgroundColor: "#FFFFFF",    
        borderRadius: 50,      
    },
    iconLoadPhoto__img: {        
        width: 24,
        height: 24,   
    },
    register__btn: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 16,  
        minWidth: 330, 
        maxWidth: 343, 
        height: 51,
    },
});


