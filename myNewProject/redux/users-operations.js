import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { auth } from '../firebase/config';

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
    await auth.signOut;  

    } catch (error) {
      console.log("error logout ",error.message);
      throw error;
    }
  }
);
  

const updateUserProfile = async (update) => {

  const user = auth.currentUser;

  // якщо такий користувач знайдений
  if (user) {

  // оновлюємо його профайл
        try {
            await updateProfile(user, update);
        } catch(error) {
            throw error
        }
  }
};