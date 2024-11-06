import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import {getFirestore,doc, setDoc,getDoc } from "firebase/firestore"; 
// import { foodsyestem } from "../../Store/food-store";
// const {submitsignup}=useContext(foodsyestem)


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
  const db=getFirestore(app)


  const Register=async(form)=>{
const{email,password,Value_name}=form
  const user_signup= await createUserWithEmailAndPassword(auth,email,password)

  await setDoc(doc(db, "users", "userdetail"), {
    Value_name
   });
  console.log(user_signup)
  alert("register successfully")


  }
  async function getuser(){

    const docRef = doc(db, "users", "userdetail");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const user=docSnap.data()
      return user
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  }
  
  const LOGIN=async(login)=>{
    const{login_email_Element,login_Password_Element}=login
   const user_login=await signInWithEmailAndPassword(auth,login_email_Element,login_Password_Element)
   alert('login successfully')
  }
  export{
    Register,
    LOGIN,
    getuser
  }
