import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_APIKEY,
  authDomain: "herboliya-3710b.firebaseapp.com",
  projectId: "herboliya-3710b",
  storageBucket: "herboliya-3710b.firebasestorage.app",
  messagingSenderId: "1080255318949",
  appId: "1:1080255318949:web:604b698e1488fdbadd364c",
  measurementId: "G-TL77QJNE0H",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };