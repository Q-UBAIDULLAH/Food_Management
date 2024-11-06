import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import DetailComponent from "./DetailcardComponent"

const Detailcard=()=>{
let price=1350
    const navigate=useNavigate()
    const[detail,setdetail]=useState([])

    const{idCategory}=useParams()
    console.log(idCategory)
useEffect(()=>{
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res=>res.json())
.then(res=>setdetail(res.categories))
},[])
console.log(detail,"detail")


    return(
        <>
{detail.map((item)=>{
    if(item.idCategory===idCategory){
        let money=item.Price=price
     
return<DetailComponent item={item}></DetailComponent>
    }
   
})}
   </>
    )
}
export default Detailcard