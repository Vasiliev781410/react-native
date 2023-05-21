import React, { useState } from "react";
import { StyleSheet, Image, ImageBackground,  TouchableOpacity, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreatePostsScreen() {
    const navigation = useNavigation();

    const [posts, setPosts] = useState("");   
    const [name, setName] = useState("");
    const [region, setRegion] = useState("");
  
    const nameHandler = (text) => setName(text);   
    const regionHandler = (text) => setRegion(text);
 

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>         
            <View style={styles.container}> 
                <KeyboardAvoidingView
                 behavior={Platform.OS == "ios" ? "padding" : "height"}>            
                    <View style={styles.post}>
                        <View style={styles.iconLoadPhoto__container}>
                            <ImageBackground  style={styles.iconLoadPhoto__img} source={require('../../assets/camera.png')}/> 
                        </View>
                    </View>
                    <Text style={styles.titlePost}>Завантажте фото</Text>          
                    <TextInput
                        value={name}
                        onChangeText={nameHandler}          
                        placeholder="Назва..."
                        style={styles.input}
                    />
                    <View style={styles.postInfo}>          
                        <TouchableOpacity  style={styles.commentsContainer}> 
                            <TextInput
                                value={region}
                                onChangeText={regionHandler}                   
                                placeholder="Місцевість..."
                                style={styles.inputRegion}
                            />                     
                            <ImageBackground  style={styles.imgBgr} source={require('../../assets/map-pin.png')}/>
                        </TouchableOpacity>
                    </View> 
                    <TouchableOpacity style={styles.register__btn} onPress={() => navigation.navigate("Публікації")}>
                        <Text style={styles.register__textBtn}>Опубліковати</Text>
                    </TouchableOpacity>     
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
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
        color: "#BDBDBD",
        marginBottom: 32,
    },
    postInfo: {
        display: "flex",
        flexDirection:'row', 
        flexWrap:'wrap',
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 8,            
    },
    imgBgr: {  
        position: "absolute",            
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
        color: "#BDBDBD",
    }, 
    input: {   
        minWidth: 330,  
        maxWidth: 343,   
        height: 50,     
        borderWidth: 1,  
        borderColor: "#FFFFFF",
        marginBottom: 16,
        marginLeft: "auto",
        marginRight: "auto",
      }, 
    inputRegion: {   
        minWidth: 330,  
        maxWidth: 343, 
        paddingLeft: 28,  
        height: 50,     
        borderWidth: 1,  
        borderColor: "#FFFFFF",
        marginBottom: 32,
        marginLeft: "auto",
        marginRight: "auto",
      },
    register__btn: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 16,  
        minWidth: 330, 
        maxWidth: 343, 
        height: 51,
        backgroundColor:  "#F6F6F6",
        borderRadius: 100,    
    }, 
    register__btnFinish: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 16,  
        minWidth: 330, 
        maxWidth: 343, 
        height: 51,
        backgroundColor:  "#FF6C00",
        borderRadius: 100,    
    },           
    register__textBtn: {
        paddingTop: 16,
        paddingBottom: 16,
        color: "#BDBDBD",
        textAlign: "center",     
    },
    register__textBtnFinish: {
        paddingTop: 16,
        paddingBottom: 16,
        color: "#FFFFFF",
        textAlign: "center",     
    },        
});