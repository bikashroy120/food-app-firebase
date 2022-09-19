import { getApp, getApps , initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD0O5Qw0w7OMkQpsaudxf1JemjtiX-3BOw",
  authDomain: "food-app-54308.firebaseapp.com",
  databaseURL: "https://food-app-54308-default-rtdb.firebaseio.com",
  projectId: "food-app-54308",
  storageBucket: "food-app-54308.appspot.com",
  messagingSenderId: "989686267032",
  appId: "1:989686267032:web:b37ba67e25bd2820cc24ed"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore();
const storage = getStorage()
const auth = getAuth();



export {app,firestore,storage,auth}