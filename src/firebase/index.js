import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCsJJ_g6CKszpsjqh2F3IpHY9MjbxoUlok",
  authDomain: "image-storage-41811.firebaseapp.com",
  projectId: "image-storage-41811",
  storageBucket: "image-storage-41811.appspot.com",
  messagingSenderId: "365116976438",
  appId: "1:365116976438:web:88d5ceec8ca995a9509797",
  measurementId: "G-034Q0R89ML"
};

firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as deaful };
