import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAw6zinZxQHzo-9H_M_oSz5GjkIZI4oyWM",
  authDomain: "ecommercetest-ab801.firebaseapp.com",
  projectId: "ecommercetest-ab801",
  storageBucket: "ecommercetest-ab801.appspot.com",
  messagingSenderId: "23440858876",
  appId: "1:23440858876:web:ff509977a9bb6006620179",
  measurementId: "G-HS733RRHR1",
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () =>{
  return firebase.firestore()  //firebase.storage  .database
}


