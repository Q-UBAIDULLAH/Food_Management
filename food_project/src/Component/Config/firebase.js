import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKYfSBcEZOWEINqVi6-IPgo_JqEcw5ltA",
    authDomain: "food-management-c4e4c.firebaseapp.com",
    projectId: "food-management-c4e4c",
    storageBucket: "food-management-c4e4c.appspot.com",
    messagingSenderId: "551051213599",
    appId: "1:551051213599:web:e7e8bd074720678d10ce2a",
    measurementId: "G-G8V5SEFKE8"
  }

  const app=initializeApp(firebaseConfig)
  const auth=getAuth(app)

  const Register=async()=>{
  const user_signup= await createUserWithEmailAndPassword(auth, email, password)
  console.log(user_signup)
  }
  export{
    Register
  }
