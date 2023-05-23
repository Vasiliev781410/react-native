import React, { useState, useEffect } from "react";
import { moduleName} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import DeafaultPostsScreen from '../NestedScreens/DeafaultPostsScreen';
import CommentsScreen from '../NestedScreens/CommentsScreen';
import MapScreen from '../NestedScreens/MapScreen';
import HeaderPosts from '../Home/HeaderPosts';
import HeaderBackToPosts from '../Home/HeaderBackToPosts';

export default function PostsScreen() {
    const NestedStack = createStackNavigator();

    return (
        <NestedStack.Navigator initialRouteName="DefaultPosts">   
            <NestedStack.Screen name="DefaultPosts" component={DeafaultPostsScreen} options={{headerShown: false, title: "Публікації"}}/>
            <NestedStack.Screen name="Map" component={MapScreen} options={{title: "Мапа"}} />
            <NestedStack.Screen name="Comments" component={CommentsScreen} options={{title: "Коментарі"}} />
       </NestedStack.Navigator> 
    );
}



