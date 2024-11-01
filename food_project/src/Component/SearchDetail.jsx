import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SearchDetail=()=>{

const [detailfood,setdetailfood]=useState([])
const[addto,setaddto]=useState(0)
const[cancel,setcancel]=useState(0)
const{idmeal,Category}=useParams()
console.log(idmeal)
console.log(Category)
    const Fetchdetailsearch=()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Category}`)
        .then(res=>res.json())
        .then(res=>setdetailfood(res.meals))
    }
    useEffect(()=>{

Fetchdetailsearch()
    },[])

    useEffect(()=>{
      const storedValue = localStorage.getItem('addtocart');
      if (storedValue) {
        setaddto(JSON.parse(storedValue));
      }
    },[])

    const addtocart=()=>{
      setaddto(addto+item.price)
      localStorage.setItem("addtocart",addto+item.price)

    }
    
    const Cancelation=()=>{
    
      
      if(addto>0){
        let Cancelation=addto-item.price
        setaddto(Cancelation)
        setcancel(cancel+1)
        let getvalue=localStorage.getItem("add")
      console.log(getvalue)
      localStorage.setItem("after cancel",addto-item.price)
      localStorage.setItem("addtocart",addto-item.price)
       }
      if(addto==0){
        setcancel(0)
        localStorage.removeItem('addtocart');
        localStorage.removeItem('after cancel');
      }

    }

    if(!detailfood.length){
        return<h2>waiting</h2>
    }
console.log("detailfood",detailfood)




    return(
        <>
{detailfood.map((item)=>{
item.price=1350
  if(item.idMeal===idmeal){


        return(
            <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">
              <div class="col-lg-7 text-center text-lg-start">
                <img width={300} src={item.strMealThumb}></img>
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">{item.strArea}</h1>
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">RS:{item.price}</h1>
                {/* <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
                <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
              </div>
              <div class="col-md-10 mx-auto col-lg-5">
                <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                  <div class="form-floating mb-3">
                    <h3>ADD TO CART <span>{addto}</span></h3>
                    <button onClick={addtocart}>ADD TO CART</button>
                    {/* <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label> */}
                  </div>
                  <div class="form-floating mb-3">
                    <h3>Cancel <span>{cancel}</span></h3>
                    <button onClick={Cancelation}>Cancel</button>
                    <button>ORDER</button>
                    {/* <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label> */}
                  </div>
                  <div class="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                  </div>
                  <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                  <hr class="my-4"/>
                  <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                </form>
              </div>
            </div>
          </div>
              
              
            
        )
    }
  
})}
{/* <h1>seacrhdetail</h1> */}

        </>
    )
}
export default SearchDetail