import { useNavigate } from "react-router-dom"
import { getuser } from "./Config/firebase"
import { useEffect,useState } from "react"
const Bill=()=>{
const  navigate=useNavigate()
const[user,setuser]=useState()
useEffect(()=>{
  get()
},[])

const get=async()=>{
const detail=await getuser()
setuser(detail)
console.log("detail firestore",detail)

}
console.log("state",user)
const totalvalue=localStorage.getItem("addtocart")
const percent=0.15*totalvalue
const discount=totalvalue-percent
const d = new Date();
const time12 = d.toLocaleTimeString('en-US', { hour12: true });
    return(
        <>
        <h2 className="thanksorder bg">THANKS FOR ORDER</h2>
        <table class="table caption-top bill-table  ">
            
  <caption>INVOICE</caption>
  <thead >
    <tr>
    
        {/* <th></th>
     <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th> */}
      {/* <th scope="col"></th> */}
    </tr>
  </thead>
  <tbody>
    <tr className="pad-row  ">
      <th scope="row">1</th>
      <td><h4>Total Bill </h4></td>
      <td><h4>RS:{totalvalue}</h4></td>
      {/* <td></td> */}
    </tr>
    <tr className="pad-row">
      <th scope="row">2</th>
      <td><h4>After 15% off</h4></td>
      <td><h4>RS:{discount}</h4></td>
      {/* <td></td> */}
    </tr>
    <tr className="pad-row">
      <th scope="row">3</th>
      <td><h4>Bill</h4></td>
      <td><h4>RS:{discount}</h4></td>
      {/* <td></td> */}
    </tr>
    <tr className="pad-row">
      <th scope="row">4</th>
      <td><h4>DATE</h4></td>
      <td><h4>{d.toDateString()}</h4></td>
      {/* <td></td> */}
    </tr>
    <tr className="pad-row">
      <th scope="row">5</th>
      <td><h4>Timing</h4></td>
      <td><h4>{time12}</h4></td>
      {/* <td></td> */}
    </tr>
    <tr className="pad-row">
      <th scope="row">6</th>
      <td><h4>Name:</h4></td>
      <td><h4>{user?.Value_name}</h4></td>
      {/* <td></td> */}
    </tr>
    <tr className="pad-row">
      <th scope="row">7</th>
      <td><h4>Contact</h4></td>
      <td><h4>0530304324</h4></td>
      {/* <td></td> */}
    </tr>
 
  </tbody>
  
</table>
<div className="confirm-order-container">
   <button className="btn btn-lg btn-success fst-italic" onClick={()=>navigate('/confirmorder')}>confirm order</button>
   </div>
        </>
    )
}
export default Bill