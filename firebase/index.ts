import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getAnalytics} from "@firebase/analytics";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD720INpri3_DTVL3SGzaOwXKTAkboJekE",
  authDomain: "touchdesinger-firebase.firebaseapp.com",
  databaseURL: "https://touchdesinger-firebase-default-rtdb.firebaseio.com",
  projectId: "touchdesinger-firebase",
  storageBucket: "touchdesinger-firebase.appspot.com",
  messagingSenderId: "15554103614",
  appId: "1:15554103614:web:c12559ffe87308aad0046f",
  measurementId: "G-8Y2WPQ5G01"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);

export const analytics =
  app.name && typeof window !== "undefined" ? getAnalytics(app) : undefined;

