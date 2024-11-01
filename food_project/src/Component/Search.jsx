import { useNavigate } from "react-router-dom"
import { useState } from "react"
const Search=({item,search})=>{

const navigate=useNavigate()
    console.log(item)
    return(
        <>
     

<div className="col subcard" onClick={()=>navigate(`/searchdetail/${item.idMeal}/${search}`)}>

    <div className="card pio">
      <img  src={item?.strMealThumb} className="card-img-top search-img  img-wi " alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{item?.strMeal}</h5>
        <p className="card-text"></p>
        <p>RS:{item.price}</p>
      </div>
    </div>
  </div>
        </>
    )
}
export default Search