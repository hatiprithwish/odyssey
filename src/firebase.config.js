import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCka6lSEqUfnii4JqVLVHTCppQC_9uqW1c",
  authDomain: "odyssey-ph.firebaseapp.com",
  databaseURL:
    "https://odyssey-ph-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "odyssey-ph",
  storageBucket: "odyssey-ph.appspot.com",
  messagingSenderId: "1066056192673",
  appId: "1:1066056192673:web:53e71b35b69f0626f7d6e0",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
