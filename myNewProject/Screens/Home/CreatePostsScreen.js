import React,  { useState, useEffect, useRef } from "react";
import { StyleSheet, Image, ImageBackground,  TouchableOpacity, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

export default function CreatePostsScreen() {
    const navigation = useNavigation();
    const [location, setLocation] = useState(null);

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const [name, setName] = useState("");
    const [region, setRegion] = useState("");
    const [photo, setPhoto] = useState(null);   
  
    const nameHandler = (text) => setName(text);   
    const regionHandler = (text) => setRegion(text);

    const takePhoto = async () => {
        if (cameraRef) {
            const { uri } = await cameraRef.takePictureAsync();
            await MediaLibrary.createAssetAsync(uri);
            setPhoto(uri);  
        }
    };
    const publishPhoto = async () => {
        // let location = await Location.getCurrentPositionAsync({});
        // const coords = {
        //   latitude: location.coords.latitude,
        //   longitude: location.coords.longitude,
        // };
        // setLocation(coords);

        navigation.navigate("DefaultPosts",{photo});
    };

    const selectCameraType = () => {
        setType(
            type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
            );
    };

    useEffect(() => { 
        setPhoto(null);       
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
       
          await MediaLibrary.requestPermissionsAsync();    
          setHasPermission(status === "granted");

          let permission = await Location.requestForegroundPermissionsAsync();
          if (permission.status !== "granted") {
            console.log("Permission to access location was denied");
          } 
          
          let location = await Location.getCurrentPositionAsync
          const coords = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          };
          setLocation(coords);
        })();
      }, []);
    
      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
    
 

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>         
            <View style={styles.container}> 
                <KeyboardAvoidingView
                 behavior={Platform.OS == "ios" ? "padding" : "height"}>                          
                    <View style={styles.post}>
                        <TouchableOpacity onPress={takePhoto}>    
                        <Camera 
                            style={styles.camera}
                            type={type}
                            ref={setCameraRef}
                        >                                                      
                            <View style={styles.iconLoadPhoto__container}>
                                <ImageBackground  style={styles.iconLoadPhoto__img} source={require('../../assets/camera.png')}/> 
                            </View>
                            {photo && <View style={styles.takePhotoContainer}>
                                <Image source={{uri: photo}} style={{flex: 1}}/>
                            </View>}
                        </Camera>
                        </TouchableOpacity> 
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
                    <TouchableOpacity style={photo ? styles.register__btnFinish : styles.register__btn} onPress={publishPhoto}>
                        <Text style={photo ? styles.register__textBtnFinish : styles.register__textBtn}>Опубліковати</Text>
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
    camera: { 
        flex: 1,       
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
        zIndex: 100,     
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
        color: "#FFFFFF",
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
    takePhotoContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        height: 100,
        width: 100,
        borderColor: "#FFFFFF",
        borderWidth: 1,
        zIndex: -1,
    },        
});