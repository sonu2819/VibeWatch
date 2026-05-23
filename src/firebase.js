import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
   apiKey: "AIzaSyB-GW6yh4naGE8gG6qCGn2ZG_Nw9dFCvlQ",
  authDomain: "vibewatch-db26c.firebaseapp.com",
  databaseURL: "https://vibewatch-db26c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vibewatch-db26c",
  storageBucket: "vibewatch-db26c.appspot.com",
  messagingSenderId: "1056672809214",
  appId: "1:1056672809214:web:65b91ce51cd0a0abf7a5af"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);