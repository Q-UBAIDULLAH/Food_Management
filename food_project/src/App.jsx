import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Foodprovider from './Store/food-store'

import Navbar from './Component/Navbar'
import CoverDashboard from './Component/cover-dashboard'
import Footer from './Component/Footer'
import Card from './Component/Card'
import Search from './Component/Search'
import { useState } from 'react'
function App() {
  let PRICE=1350
  const[show,setshow]=useState(true)
  const[card,setcard]=useState([])
  const[search,setsearch]=useState("")
  return (
    <>

    {/* <Foodprovider> */}

<Navbar setcard={setcard} setshow={setshow} setsearch={setsearch} search={search}></Navbar>

 <div className="center">
<CoverDashboard></CoverDashboard>
</div>



{show?<Card></Card>:card.length?
   <div className="row row-cols-1 row-cols-md-4 g-4 m-2 maincard">
{card.map((item)=>{

item.price=PRICE
  return <Search   key={item.idMeal} search={search} item={item}/>
})}</div>:<h2>Not Found result</h2>
}




<div className="footer">
<Footer></Footer>
</div> 





    {/* <div>
    <Signup/>
      </div> 
      <div> <Cover></Cover></div>

<div>
<Signin></Signin>
</div> */}
  
  {/* <Router></Router> */}

    {/* </Foodprovider> */}
   
    </>
  )
}

export default App
