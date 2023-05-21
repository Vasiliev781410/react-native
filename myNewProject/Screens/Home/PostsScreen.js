import React, { useState } from "react";
import { StyleSheet, Image, ImageBackground,  TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PostsScreen() { 

    const [posts, setPosts] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image style={styles.imgAvatar} source={require('../../assets/avatar.png')}></Image>            
                <View style={styles.userInfo}>
                    <Text style={styles.login}>Natali Romanova</Text>
                    <Text style={styles.email}>email@example.com</Text>
                </View>
            </View>
            <View style={styles.post}>
            </View>
            <Text style={styles.titlePost}>Ліс</Text>
            <View style={styles.postInfo}>
                <TouchableOpacity style={styles.commentsContainer}>
                    <ImageBackground  style={styles.imgBgr} source={require('../../assets/message-circle.png')}/>
                    <Text style={styles.comments}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ImageBackground  style={styles.imgBgr} source={require('../../assets/map-pin.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {        
        paddingLeft: 16,
        paddingRight: 16,       
    },
    userContainer: {
        display: "flex",
        flexDirection:'row', 
        flexWrap:'wrap',
        alignItems: "center",
        paddingTop: 32,           
    },
    imgAvatar: {              
        width: 60,
        height: 60,
        marginRight: 8,
        marginLeft: 0,
        padding: 0,
    },
    userInfo: {
        height: 15,          
    },
    login: {
        fontSize: 13,                
        fontWeight: 700,
        color: "#212121",
    },
    email: {
        fontSize: 11,
        fontWeight: 400,
        color: "#212121",        
    },
    post: {
        marginTop: 32,
        marginBottom: 8, 
        marginLeft: "auto",
        marginRight: "auto", 
        minWidth: 330,  
        maxWidth: 343,         
        height: 240,
        backgroundColor: "#E8E8E8",
        borderRadius: 8,  
    },
    titlePost: {
        fontSize: 16,
        color: "#212121",
    },
    postInfo: {
        display: "flex",
        flexDirection:'row', 
        flexWrap:'wrap',
        alignItems: "center",
        paddingTop: 32,            
    },
    imgBgr: {              
        width: 24,
        height: 24, 
    },
    commentsContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection:'row', 
        flexWrap:'wrap',
    },
    comments: {
        fontSize: 16,
        color: "#BDBDBD",
    }
});