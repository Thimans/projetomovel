import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCh-cqoc7X6TfSWp9WtPgBtOI1JWjdmi6E",
    authDomain: "myhealth2-1cd19.firebaseapp.com",
    projectId: "myhealth2-1cd19",
    storageBucket: "myhealth2-1cd19.appspot.com",
    messagingSenderId: "853210393704",
    appId: "1:853210393704:web:deed8bd215fd7903e59fdd"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { app, auth }