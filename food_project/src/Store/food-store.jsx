import { createContext } from "react";
import { LOGIN, Register } from "../Component/Config/firebase";
export const foodsyestem=createContext({
submitsignup:()=>{},
loginsignin:()=>{}
})


const Foodprovider=({children})=>{

const submitsignup=async(form)=>{
const{email,Value_name,password}=form

console.log(email)
console.log(Value_name)
console.log(password)

try {
    console.log("helloo")
    const register_call=await Register(form)
    console.log(register_call,"REgister call")
} catch (error) {
    alert(error)
}

}


const loginsignin=async(login)=>{
const {login_email_Element,login_Password_Element}=login
try {
    await LOGIN(login)

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