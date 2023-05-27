// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDt0b0daPYLDQQogK1W6Dtct6JLjuVPTRc",
  authDomain: "posts-d7893.firebaseapp.com",
  databaseURL: "https://posts-d7893-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "posts-d7893",
  storageBucket: "posts-d7893.appspot.com",
  messagingSenderId: "762135412019",
  appId: "1:762135412019:web:52b1b399825374ea05d246",
  measurementId: "G-FGTZGGS1HK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);