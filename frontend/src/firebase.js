import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkOBvkNkh22nixL-48II_96N_fEga6ch0",
  authDomain: "hackathon-2022-a90fe.firebaseapp.com",
  databaseURL: "https://hackathon-2022-a90fe-default-rtdb.firebaseio.com",
  projectId: "hackathon-2022-a90fe",
  storageBucket: "hackathon-2022-a90fe.appspot.com",
  messagingSenderId: "40002256110",
  appId: "1:40002256110:web:b8624edb988b2598d047ff",
  measurementId: "G-BQZNGRZ8J8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
