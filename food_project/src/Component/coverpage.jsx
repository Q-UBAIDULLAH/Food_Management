// import { useNavigate } from "react-router-dom"

const Cover=()=>{
  // const navigate=useNavigate()
//   function covv(){
//     setTimeout(() => {
      
// navigate('/signup')
//     }, 2000);
//   }
return<>
<div className="px-4 py-5 my- text-center ">
    <img className="d-block mx-auto mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYWcUVg_I6A6RSYQ-HKY4Szdq7tBFTc65Eg&s" alt="" width="192" height="97"/>
    <h1 className="display-5 fw-bold text-body-emphasis gg">Welcome To Food Center</h1>
    <div className="col-lg-6 mx-auto ">
      <p className="lead mb-4"> We serve delicious food, made with love.From classNameic favorites to new twists,
      there's something for everyone. Come and enjoy!</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        {/* <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Go to signUp</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Special offer</button> */}
      </div>
    </div>
  </div>
</>
}
export default Cover