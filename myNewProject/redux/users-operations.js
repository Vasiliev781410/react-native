import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { auth, db } from '../firebase/config';

export const registerDB = createAsyncThunk(
  "users/registerUser",
    async ({ email, password }) => {
    try { 
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      //console.log("credentials user",credentials.user);
      return { email, displayName: null };

    } catch (error) {
      throw error;
    }
  }
);

export const authStateChanged = async (onChange = () => {}) => {
        onAuthStateChanged((user) => {
                onChange(user);
        });
};

export const loginDB = createAsyncThunk(
  "users/loginUser",
  async ({ email, password }) => {
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);        
        return { email, displayName: credentials.user.displayName};
    } catch (error) {
      throw error;
    }
  }
);

export const logoutDB = createAsyncThunk(
  "users/logoutUser",
  async () => {
    try {
    await auth.signOut();  

    } catch (error) {
      console.log("error logout ",error.message);
      throw error;
    }
  }
);
  

export const updateUserProfile = createAsyncThunk(
    "users/updateUser",
    async (update) => {

    try {  
    const user = auth.currentUser;
  } catch(error) {
      console.log("error user ",error.message);
    throw error
  }
    console.log("user ", user);
    console.log("update ", update);

    // якщо такий користувач знайдений
    if (user) {

    // оновлюємо його профайл
          try {
              await updateProfile(user, update);
              const user = auth.currentUser;              

              return update;
          } catch(error) {
              console.log("error update ",error.message);
              throw error
          }
    }
  }
)
;