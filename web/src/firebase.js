import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD03t0b_6NJ5bOvPJTZAjrkCe4cHQOi02c",
  authDomain: "saylaniwebdevcourse.firebaseapp.com",
  databaseURL: "https://saylaniwebdevcourse.firebaseio.com",
  projectId: "saylaniwebdevcourse",
  storageBucket: "saylaniwebdevcourse.appspot.com",
  messagingSenderId: "516838591025",
  appId: "1:516838591025:web:47422cbb26fa3134df6310",
  measurementId: "G-G8NW3KEPF8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
