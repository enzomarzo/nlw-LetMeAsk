import firebase from 'firebase/app'

import 'firebase/auth'          // importando modulo de autorização
import 'firebase/database'      // importando modulo de banco de dados

//peguei dentro do firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL:Rprocess.env.EACT_APP_DATABASE_URL ,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket:Rprocess.env.EACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
    appId:Rprocess.env.EACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig) 

const auth = firebase.auth();           // para facilitar, vou chamar só de auth
const database = firebase.database();   // e esse só de database. Assim não preciso digitar todo o caminho sempre


 = "AIzaSyAp0VO_UWLP0A-UlTXxluMo8Bqg4zNbhUA"
 = "letmeask-nlw-rs.firebaseapp.com"
 = "https://letmeask-nlw-rs-default-rtdb.firebaseio.com"
 = "letmeask-nlw-rs"
 = "letmeask-nlw-rs.appspot.com"
 = "679392436400"
 = "1:679392436400:web:66b413c5f6d2a23e78db75"