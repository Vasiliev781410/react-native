import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HeaderPosts({title}) {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>             
                <TouchableOpacity style={styles.logoutContainer} onPress={() => navigation.navigate("Login")}>                
                    <ImageBackground  style={styles.imglogout} source={require('../../assets/log-out.png')}/>
                </TouchableOpacity>
            </View> 
        </>
                
    );
  }

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        minWidth: 330,
        maxWidth: 343, 
        position: "relative",       
        display: "flex",        
        flexDirection: "row",       
        justifyContent: "center",
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
        position: "absolute",
        top: "0%", 
        right: "-370%",
        width: 24,
        height: 24,
    }
});