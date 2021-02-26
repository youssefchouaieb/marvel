import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyCAZkp9e1pHG_00sfW6-0RTKOZ-_dS0ia0",
  authDomain: "marvel-eb3a9.firebaseapp.com",
  projectId: "marvel-eb3a9",
  storageBucket: "marvel-eb3a9.appspot.com",
  messagingSenderId: "358897393987",
  appId: "1:358897393987:web:5d9926a9c58c46d11c0ff6",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  //inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //deconnexion
  signoutUser = () => this.auth.signOut();
 
  user = (uid) => this.db.doc(`users/${uid}`);
}

export default Firebase;
