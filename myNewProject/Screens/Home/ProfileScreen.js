import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {  useSelector} from "react-redux";
import { selectPosts } from "../../redux/posts-selector";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const posts = useSelector(selectPosts);

  return (    
      <View style={styles.container}>
        <ImageBackground  style={styles.imgBgr} source={require('../../assets/background.png')}>
            <View style={styles.form}>
                <TouchableOpacity>
                    <View style={styles.img__container}>
                        <ImageBackground  style={styles.imgAvatar} source={require('../../assets/avatar.png')}>
                            <ImageBackground  style={styles.imgAddBtn} source={require('../../assets/change.png')}/>
                        </ImageBackground> 
                    </View> 
                </TouchableOpacity>

                <FlatList 
                data={posts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={( {item} ) => (
                    <View style={styles.postCard}>
                        <View style={styles.post}>
                            <Image style={{flex: 1}} source={{uri: item.photo}}></Image>  
                        </View>
                        <Text style={styles.titlePost}>{item.name}</Text>
                        <View style={styles.postInfo}>
                            <View style={styles.commentsContainer}>
                              <TouchableOpacity style={styles.commentsContainer} onPress={() => navigation.navigate("Comments")}>
                                  <ImageBackground  style={styles.imgComments} source={require('../../assets/message-circle.png')}/>
                                  <Text style={styles.comments}>{item.commentsQuantity}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.commentsContainer}>
                                  <ImageBackground  style={styles.imgComments} source={require('../../assets/thumbs-up.png')}/>
                                  <Text style={styles.comments}>{item.likesQuantity}</Text>
                              </TouchableOpacity>
                            </View>
                            <TouchableOpacity  style={styles.commentsContainer} onPress={() => navigation.navigate("Map",{location: item.location})}>
                                <ImageBackground  style={styles.imgComments} source={require('../../assets/map-pin.png')}/>
                                <Text style={styles.region}>{item.region}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            >
            </FlatList>

            </View>  
        </ImageBackground>
      </View>   
  );
}

//<Image  style={styles.img} source={require('../assets/avatar.png')} />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#FFFFFF", 
},
  img__container: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 16, 
  },
  imgAddBtn: {
    position: "absolute",
    top: 80,
    right: -13,    
    width: 25,
    height: 25,
  },
  imgAvatar: { 
    width: 120,
    height: 120,
  },
  input: {   
    width: 343,
    height: 44,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    marginLeft: "auto",
    marginRight: "auto",
  }, 
  inputActive: {   
    width: 343,
    height: 44,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#FF6C00",
    borderRadius: 8,
    marginBottom: 16,
    marginLeft: "auto",
    marginRight: "auto",
  }, 
  password__container: {
    position: "relative",
  },
  showBtn: {
    position: "absolute",
    bottom: 27,
    left: 100,
    color: "#1B4371",
    textAlign: "center",  
    textTransform: "capitalize",  
  },
  title: {    
    fontSize: 30,
    fontWeight: 500,   
    letterSpacing: 0.01,  
    marginTop: 32,
    marginBottom: 32,
    textAlign: "center",
  }, 
  imgBgr: {
    width: 375,
    height: 812,
  },
  form: {
    marginTop: 263, 
    paddingLeft: 16,
    paddingRight: 16,       
    backgroundColor: "#ffffff",
    borderRadius: 25,
    height: 549,
  },
  register__btn: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 43,
    marginBottom: 16,  
    width: 343,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,    
  },
 
  register__textBtn: {
    paddingTop: 16,
    paddingBottom: 16,
    color: "#FFFFFF",
    textAlign: "center",  
    textTransform: "capitalize",  
  },
  navigate__btn: {
    marginLeft: "auto",
    marginRight: "auto", 
    backgroundColor: "#FFFFFF",  
  },
  navigate__textBtn: {
    color: "#1B4371",
    textAlign: "center",  
    textTransform: "capitalize",  
  },
    post: {
        marginTop: 32,
        marginBottom: 8, 
        marginLeft: "auto",
        marginRight: "auto", 
        minWidth: 343,  
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
    commentsContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection:'row', 
        flexWrap:'wrap',
    },
    imgComments: {     
        width: 24,
        height: 24, 
    },
    comments: {
        marginLeft: 6,
        marginRight: 24,
        fontSize: 16,
        color: "#BDBDBD",
    },
    region: {
        marginLeft: 4,
        color: "#212121",
        textDecorationLine: "underline",      
    },
    postCard: {
      marginBottom: 32,
      justifyContent: "center",     
  },
});