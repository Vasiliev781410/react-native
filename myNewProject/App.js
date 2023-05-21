import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from './router'; 

export default function App() {
  const routing = useRoute(true);
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}

