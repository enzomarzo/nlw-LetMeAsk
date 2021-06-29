import firebase from 'firebase/app'

import 'firebase/auth'          // importando modulo de autorização
import 'firebase/database'      // importando modulo de banco de dados

//peguei dentro do firebase
const firebaseConfig = {
    apiKey: "AIzaSyAp0VO_UWLP0A-UlTXxluMo8Bqg4zNbhUA",
    authDomain: "letmeask-nlw-rs.firebaseapp.com",
    databaseURL: "https://letmeask-nlw-rs-default-rtdb.firebaseio.com",
    projectId: "letmeask-nlw-rs",
    storageBucket: "letmeask-nlw-rs.appspot.com",
    messagingSenderId: "679392436400",
    appId: "1:679392436400:web:66b413c5f6d2a23e78db75"
};

firebase.initializeApp(firebaseConfig) 

const auth = firebase.auth();           // para facilitar, vou chamar só de auth
const database = firebase.database();   // e esse só de database. Assim não preciso digitar todo o caminho sempre


APP_API_KEY = "AIzaSyAp0VO_UWLP0A-UlTXxluMo8Bqg4zNbhUA"
REACT_APP_AUTH_DOMAIN = "letmeask-nlw-rs.firebaseapp.com"
REACT_APP_DATABASE_URL = "https://letmeask-nlw-rs-default-rtdb.firebaseio.com"
REACT_APP_PROJECT_ID = "letmeask-nlw-rs"
REACT_APP_STORAGE_BUCKET = "letmeask-nlw-rs.appspot.com"
REACT_APP_MESSAGIN_SENDER_ID = "679392436400"
REACT_APP_APP_ID = "1:679392436400:web:66b413c5f6d2a23e78db75"