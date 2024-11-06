import { useContext, useRef } from "react"
import { foodsyestem } from "../Store/food-store"

const Signin=()=>{
  const{loginsignin}=useContext(foodsyestem)

const login_Email=useRef()
const login_Password=useRef()


const handlelogin=(event)=>{
  event.preventDefault();
const login_email_Element=login_Email.current.value
const login_Password_Element=login_Password.current.value
console.log(login_email_Element)
console.log(login_Password_Element)
const loginform={login_email_Element,login_Password_Element}
loginsignin(loginform)

}

    return<>
   
   <div className=" full-bg">

<div className="container col-xl-10 col-xxl-8 px-4 py-5 auth-child">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">

          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">WELCOME TO FOOD CENTER</h1>
      </div>
      <div className="col-md-10 mx-auto col-lg-5 p-3">
  
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary ddd">
        <h4>Sign in</h4>
          <div className="form-floating mb-3">
            <input   ref={login_Email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input  ref={login_Password}  type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
         
          <div className="checkbox mb-3">
            {/* <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label> */}
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handlelogin}>Sign in</button>
          <hr className="my-4"/>
          <small className="text-body-secondary">if you dont have an account click here <a href="/">Sign Up</a></small>
        </form>
      </div>
    </div>
  </div>
  </div>
    </>
}
export default Signin