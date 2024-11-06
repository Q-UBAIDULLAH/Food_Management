import { useContext, useRef } from "react"
import { foodsyestem } from "../Store/food-store"

const Signup=()=>{
  const {submitsignup}=useContext(foodsyestem)

const UserEmail=useRef()
const UserPassword=useRef()
const UserName=useRef()


const handleSubmit=(event)=>{
  event.preventDefault();
  const email=UserEmail.current.value
  const password=UserPassword.current.value
  const Value_name=UserName.current.value


const valuesform={email,Value_name,password}
console.log(valuesform)
  submitsignup(valuesform)

}

    return<>
<div className=" full-bg">



<div className="container col-xl-10 col-xxl-8 px-4 py-5 auth-child">
    <div className="row align-items-center g-lg-5 py-5 ">
      <div className="col-lg-7 text-center text-lg-start ">
   

       <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">WELCOME TO FOOD CENTER</h1>
        
       
      </div>
      <div className="col-md-10 mx-auto col-lg-5 p-3">
  
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
        <h4>Sign up</h4>
          <div className="form-floating mb-3">
            <input  ref={UserEmail} type="email" className="form-control" id="emailInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input  ref={UserPassword} type="password" className="form-control" id="passwordInput" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input ref={UserName} type="text" className="form-control" id="fullNameInput" placeholder="FullName"/>
            <label htmlFor="floatingPassword">FullName</label>
          </div>
          <div className="checkbox mb-3">
            {/* <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label> */}
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign up</button>
          <hr className="my-4"/>
          <small className="text-body-secondary"></small>
        </form>
      </div>
    </div>
  </div>
  </div>
    </>
}
export default Signup