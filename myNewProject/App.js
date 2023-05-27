import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from './router'; 
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import store from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function App() {  
  // const dispatch = useDispatch();
  // useEffect(() => {
    // dispatch(refreshUserThunk());
  // }, [dispatch]);
// 
    
  const routing = useRoute();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        <NavigationContainer>
           {routing} 
        </NavigationContainer>
      </PersistGate>   
    </Provider>   
  );
}









