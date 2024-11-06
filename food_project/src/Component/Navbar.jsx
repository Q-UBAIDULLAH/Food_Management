import { useState } from "react"
import Card from "./Card"
import CoverDashboard from "./cover-dashboard"
import Footer from './Footer'
import Search from "./Search"


const Navbar=({setcard,setshow,setsearch,search})=>{
  // let PRICE=1350
  // const[search,setsearch]=useState("")
  // console.log(search)
  // const[card,setcard]=useState([])
  // const [cocktail, setCocktail] = useState([]);
  // const[show,setshow]=useState(true)

  const fetchsearch=()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res=>res.json())
    .then(res=>{
    if(res.meals===null){
      setcard([])
    }
    else{
setcard(res.meals)
    }
    setshow(false)
  })

  }

return(
    <>
   




<div className=" navcolor p-3 ">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <img className="navlogo"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LkPXHuVW6koE79bAuBiNucTpk2KbGJqDbaf00D6gx7Vu4n3nnR1LFaAma6LgsAzaAOQ&usqp=CAU" alt="" />
          <li><a href="#" className="nav-link px-2 text-white head">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white head">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white head">Menu</a></li>
          <li><a href="#" className="nav-link px-2 text-white head">About</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-4" role="search">
          <input  onChange={(e)=>setsearch(e.target.value)} type="search" className=" form-control form-control-dark " placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
      
          <button onClick={fetchsearch} type="button" className="btn btn-warning se-btn">Search</button>
        </div>
      </div>
    </div>
{/* <div className="center">
<CoverDashboard></CoverDashboard>
</div>

{show?<Card></Card>:card.length?
   <div className="row row-cols-1 row-cols-md-4 g-4 m-2 maincard">
{card.map((item)=>{
item.price=PRICE
  return <Search search={search} item={item}/>
})}</div>:<h2>Not Found result</h2>
}

<div className="footer">
<Footer></Footer>
</div> */}

    </>
)
}
export default Navbar