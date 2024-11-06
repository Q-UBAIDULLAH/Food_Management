import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
const Card=()=>{
    let price=1350
    const [cocktail, setCocktail] = useState([]);
function fetchcard(){


    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res=>res.json())
    .then(res=>setCocktail(res.categories))
}
useEffect(()=>{
   
    setTimeout(()=>{
        fetchcard()
    },1000)
    
},[])

console.log(cocktail,"cocktail")

if(!cocktail.length){
  return  <div class="text-center">
  <div class="spinner-border spin" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

}

    return(
        <>
      
   <div className="row row-cols-1 row-cols-md-4 g-4 m-2 maincard  ">
{cocktail.map((item)=>{
         let money=item.Price=price
return<CardComponent key={item.idCategory} item={item}></CardComponent>
})}

</div>

        </>
    )
}
export default Card