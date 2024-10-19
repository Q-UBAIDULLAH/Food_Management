import { useRef } from "react"

const Signup=()=>{

const UserEmail=useRef()
const UserPassword=useRef()
const UserName=useRef()


const handleSubmit=()=>{
  const Value_email=UserEmail.current.value
  const Value_password=UserPassword.current.value
  const Value_name=UserName.current.value

}

    return<>



    <div className="hee">
    <form className="oo">
    <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 class="h3 mb-3 fw-normal">Please sign Up</h1>

    <div class="form-floating oo">
      <input ref={UserEmail} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input ref={UserPassword} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <input ref={UserName} type="text" class="form-control" id="floatingPassword" placeholder="Fullname"/>
      <label for="floatingPassword">Fullname</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Sign Up</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
  </form>
  </div>
    </>
}
export default Signup