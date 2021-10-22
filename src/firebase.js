// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const apiKey = process.env.API_KEY;
// const authDomain = process.env.AUTH_DOMAIN;
// const projectId = process.env.PROJECT_ID;
// const storageBucket = process.env.STORAGE_BUCKET;
// const messageSenderId = process.env.MESSAGING_SENDER_ID;
// const appId = process.env.APP_ID;

// const firebaseConfig = {
//   apiKey: apiKey,
//   authDomain: authDomain,
//   projectId: projectId,
//   storageBucket: storageBucket,
//   messagingSenderId: messageSenderId,
//   appId: appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDIQd4V2Le_IpdGPANBv1bJ0Xlg2NiBIr8",
  authDomain: "netflix-fe91c.firebaseapp.com",
  projectId: "netflix-fe91c",
  storageBucket: "netflix-fe91c.appspot.com",
  messagingSenderId: "98586370481",
  appId: "1:98586370481:web:7fb74a041fd0572446dd90",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
