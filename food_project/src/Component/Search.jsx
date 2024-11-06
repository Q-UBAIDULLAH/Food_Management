import { useNavigate } from "react-router-dom"

const Search=({item,search})=>{

const navigate=useNavigate()
    console.log(item)
    return(
        <>
    

<div className="col subcard" onClick={()=>navigate(`/searchdetail/${item.idMeal}/${search}`)}>

    <div className="card pio">
      <img  src={item?.strMealThumb} className="card-img-top search-img  img-wi " alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bolder">{item?.strMeal}</h5>
        <p className="card-text"></p>
        <h5 className="font-monospace">RS:{item.price}</h5>
      </div>
    </div>
  </div>
        </>
    )
}
export default Search