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
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { registerDB, updateUserProfile } from "../redux/users-operations";

export default function RegistrationScreen() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [currentInp, setCurrentInp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const nameFocus = (text) =>  setCurrentInp("name");
  const emailHandler = (text) => setEmail(text);  
  const emailFocus = (text) => setCurrentInp("email");
  const passwordHandler = (text) => setPassword(text);
  const passwordFocus = (text) => setCurrentInp("password");

  const onRegister = () => {
   // Alert.alert("Credentials", `${name} + ${email} +${password}`);
    console.log("Credentials", `${name} + ${email} +${password}`);
    dispatch(registerDB({email, password}));
    dispatch(updateUserProfile({displayName: email, email}));
  };

  const onShowPass = () => {    
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground  style={styles.imgBgr} source={require('../assets/background.png')}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
             <View style={styles.form}>
              <TouchableOpacity>
                <View style={styles.img__container}>                
                  <ImageBackground  style={styles.imgAddBtn} source={require('../assets/add.png')}/>                               
                </View> 
              </TouchableOpacity> 
                <Text style={styles.title}>Реєстрація</Text>
                <TextInput
                  value={name}
                  onChangeText={nameHandler}
                  onFocus={nameFocus}
                  placeholder="Логін"
                  style={currentInp === "name" ? styles.inputActive : styles.input}
                />
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
                <TouchableOpacity style={styles.register__btn} onPress={onRegister}>
                    <Text style={styles.register__textBtn} >Зареєструватися</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.navigate__btn} onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.navigate__textBtn} >Уже есть аккаунт? Войти</Text>
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
});