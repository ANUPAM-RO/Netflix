import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyDhDVfrggov-JHpbdtbPU2CQkZyUFmn6Fk",
  authDomain: "netflix-4fd56.firebaseapp.com",
  projectId: "netflix-4fd56",
  storageBucket: "netflix-4fd56.appspot.com",
  messagingSenderId: "483729324504",
  appId: "1:483729324504:web:812c15ef809da727e3daad",
  measurementId: "G-Y8MTEX4N4F"
};

firebase.initializeApp(firebaseConfig);
const storage = () => firebase.storage();
export default storage;