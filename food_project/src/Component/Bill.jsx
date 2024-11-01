import { useNavigate } from "react-router-dom"

const Bill=()=>{
const  navigate=useNavigate()
    return(
        <>
        <h2 className="thanksorder">THANKS FOR ORDER</h2>
        <table class="table caption-top bill-table ">
            
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
    <tr className="pad-row ">
      <th scope="row">1</th>
      <td><h4>Your total bill is</h4></td>
      <td><h4>RS:1238</h4></td>
      {/* <td></td> */}
    </tr>
    <tr className="pad-row">
      <th scope="row">2</th>
      <td><h4>After 15% off</h4></td>
      <td><h4>RS:504</h4></td>
      {/* <td></td> */}
    </tr>
    <tr className="pad-row">
      <th scope="row">3</th>
      <td><h4>Bill</h4></td>
      <td><h4>RS:793</h4></td>
      {/* <td></td> */}
    </tr>
    <tr className="pad-row">
      <th scope="row">4</th>
      <td><h4>DATE</h4></td>
      <td><h4>wed-oct-2024</h4></td>
      {/* <td></td> */}
    </tr>
    <tr className="pad-row">
      <th scope="row">5</th>
      <td><h4>Timing</h4></td>
      <td><h4>10:30:20pm</h4></td>
      {/* <td></td> */}
    </tr>
    <tr className="pad-row">
      <th scope="row">6</th>
      <td><h4>Contact</h4></td>
      <td><h4>0530304324</h4></td>
      {/* <td></td> */}
    </tr>
 
  </tbody>
  
</table>
   <button className="confirm" onClick={()=>navigate('/confirmorder')}>confirm order</button>

        </>
    )
}
export default Bill