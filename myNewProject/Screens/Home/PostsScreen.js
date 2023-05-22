import React, { useState } from "react";
import { StyleSheet, Image, ImageBackground,  TouchableOpacity, Text, View} from 'react-native';

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
                    <ImageBackground  style={styles.imgComments} source={require('../../assets/message-circle.png')}/>
                    <Text style={styles.comments}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.commentsContainer}>
                    <ImageBackground  style={styles.imgComments} source={require('../../assets/map-pin.png')}/>
                    <Text style={styles.region}>Ivano-Frankivs'k Region, Ukraine</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,       
        paddingLeft: 16,
        paddingRight: 16, 
        backgroundColor: "#FFFFFF",        
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
        position: "relative",
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
        justifyContent: "space-between",
        paddingTop: 8,            
    },
    imgComments: {              
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
        marginLeft: 6,
        fontSize: 16,
        color: "#BDBDBD",
    },
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
    region: {
        marginLeft: 4,
        color: "#212121",
        textDecorationLine: "underline",
    },
});