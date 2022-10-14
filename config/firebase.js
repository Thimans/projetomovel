import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyClusNgyUwmKBwMSVv9tNq4DTK3vRPfQZw",
    authDomain: "myhealth-6901c.firebaseapp.com",
    projectId: "myhealth-6901c",
    storageBucket: "myhealth-6901c.appspot.com",
    messagingSenderId: "58250238667",
    appId: "1:58250238667:web:ae995ebebd3ac10128994e"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { app, auth }