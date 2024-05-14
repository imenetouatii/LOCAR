import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  /*  apiKey: "AIzaSyCPJXVI1BL4fZvgmaMoBWoYc88SkbrHq5A",
    authDomain: "my-first-project-b9176.firebaseapp.com",
    projectId: "my-first-project-b9176",
    storageBucket: "my-first-project-b9176.appspot.com",
    messagingSenderId: "292399675611",
    appId: "1:292399675611:web:4b956151786c5eb9e874fe"*/
    apiKey: "AIzaSyCycORoPnerF38UY0N7oo9xDH4-HpzU_eA",
  authDomain: "locar-acd4b.firebaseapp.com",
  projectId: "locar-acd4b",
  storageBucket: "locar-acd4b.appspot.com",
  messagingSenderId: "267085273798",
  appId: "1:267085273798:web:4f5b5b94ac4b0fc32095c7"
      
}

firebase.initializeApp(config)

//firebase.analytics()

export default firebase


