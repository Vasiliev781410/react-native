import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() { 
  const navigation = useNavigation();

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [currentInp, setCurrentInp] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const emailHandler = (text) => setEmail(text);  
  const emailFocus = (text) => setCurrentInp("email");
  const passwordHandler = (text) => setPassword(text);
  const passwordFocus = (text) => setCurrentInp("password");
                    
  const onLogin = () => {
    Alert.alert("Credentials", `${email} +${password}`);
    console.log("Credentials", `${email} +${password}`);
  };
  const onShowPass = () => {    
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground  style={styles.imgBgr} source={require('../assets/background.png')}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" && "padding"}
            >
             <View style={styles.form}>
                  <Text style={styles.title}>Увійти</Text>
                  <TextInput
                    value={email}
                    onChangeText={emailHandler}
                    onFocus={emailFocus}
                    placeholder="Адреса електронної пошти"
                    style={currentInp === "email" ? styles.inputActive : styles.input}
                  /> 
                <View style={styles.password__container}>                            
                  <TextInput
                    value={password}
                    onChangeText={passwordHandler}
                    onFocus={passwordFocus}
                    placeholder="Пароль"
                    secureTextEntry={secureTextEntry}
                    style={currentInp === "password" ? styles.inputActive : styles.input}
                  />
                  <TouchableOpacity style={styles.navigate__btn} onPress={onShowPass}>
                    <Text style={styles.showBtn}>Показати</Text>
                  </TouchableOpacity> 
                </View>                                            
                <TouchableOpacity style={styles.register__btn} onPress={onLogin}>
                    <Text style={styles.register__textBtn} >Увійти</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.navigate__btn} onPress={() => navigation.navigate("Реєстрація")}>
                  <Text style={styles.navigate__textBtn} >Немає аккаунта? Зареєструватися</Text>
                </TouchableOpacity>                                                       
              </View>
            </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
  img: {
    width: 120,
    height: 120,
    borderRadius: 16, 
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
    marginTop: 323,       
    backgroundColor: "#ffffff",
    borderRadius: 25,
    height: 489,
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
});