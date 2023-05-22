 
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CommentsScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Публікації</Text> 
            <TouchableOpacity style={styles.logoutContainer} onPress={() => navigation.navigate("Login")}>                
                <ImageBackground  style={styles.imglogout} source={require('../../assets/log-out.png')}/>
            </TouchableOpacity>
        </View>             
    );
  }

const styles = StyleSheet.create({
    container: {
        display: "flex",        
        flexDirection: "row",       
        justifyContent: "space-between",
        alignItems: "center",           
    },
    title: {  
        fontSize: 17,
        fontWeight: 500,
        letterSpacing: -0.408,
        textAlign: "center",
        marginRight: 40,
    },
    logoutContainer: {
        width: 24,
        height: 24,
    },
    imglogout: {
        width: 24,
        height: 24,
    }
});