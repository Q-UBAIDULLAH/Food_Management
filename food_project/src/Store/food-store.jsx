import { createContext} from "react";
import { LOGIN, Register } from "../Component/Config/firebase";
import { useNavigate } from "react-router-dom";



export const foodsyestem=createContext({
submitsignup:()=>{},
loginsignin:()=>{}
})




const Foodprovider=({children})=>{
const navigate=useNavigate()

const submitsignup=async(form)=>{

const{email,Value_name,password}=form
console.log("form",form)

try {
 
    const register_call=await Register(form)
    console.log(register_call,"REgister call")
navigate('/login')


} catch (error) {
    alert(error)
}

}


const loginsignin=async(login)=>{
const {login_email_Element,login_Password_Element}=login
try {
    await LOGIN(login)
  navigate('/app')

} catch (error) {
    alert(error.message)
}


}



    return(<foodsyestem.Provider value={
    {
      submitsignup,
      loginsignin
}
}>
    {children}

    </foodsyestem.Provider>)
}
export default Foodprovider;