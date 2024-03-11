// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { SignupForm } from "~/@types/auth.types";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import {
//   applicationDefault,
//   initializeApp as initializeAdminApp,
// } from "firebase-admin/app";
// import admin from "firebase-admin";

//require("dotenv").config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA83IQ2GamdZli0L8WyDS4piXcp4jm6owo",
  authDomain: "dhwani-copy.firebaseapp.com",
  projectId: "dhwani-copy",
  storageBucket: "dhwani-copy.appspot.com",
  messagingSenderId: "340024855228",
  appId: "1:340024855228:web:be14cb26ce7c308f579eb9",
};

// if (!admin.apps.length) {
//   initializeAdminApp({ credential: applicationDefault(), databaseURL:  });
// }
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

const signUp = ({
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  gender,
  institutionName,
  location,
  profession,
  managerName,
  managerID,
}: SignupForm): Promise<{ message: string; therapistID: string }> => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      return setDoc(doc(db, "Users", user.uid), {
        firstName,
        lastName,
        email,
        phoneNumber,
        gender,
        institutionName,
        location,
        profession,
        managerName,
        managerID,
      })
        .then(() => {
          return {
            message: "User profile saved successfully!",
            therapistID: user.uid,
          };
        })
        .catch((error) => {
          return {
            message: "Error saving user profile",
            therapistID: "",
          };
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw {
        message: errorMessage,
        therapistID: "",
      };
      // ..
    });
};

const sendOTP = async (phoneNumber: string, buttonId: string) => {
  try {
    const appVerifier = new RecaptchaVerifier(auth, buttonId, {
      size: "invisible",
      callback: (response: any) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log(response);
      },
    });

    const confirmation = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
    console.log(confirmation);
  } catch (err: any) {
    console.log(err.message);
  }
};

const signIn = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ user: any; message: string; status: boolean }> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      return {
        user: { uId: user.uid, ...docSnap.data() },
        message: "Successfully logged in",
        status: true,
      };
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw {
        user: null,
        message: errorMessage,
        status: false,
      };
    });
};

export { signUp, sendOTP, signIn };
