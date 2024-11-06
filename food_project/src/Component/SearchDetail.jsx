import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const SearchDetail=()=>{
  const navigate=useNavigate()
  let price=1350
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

    const addtocart=(event)=>{
      event.preventDefault();
      setaddto(addto+price)
      localStorage.setItem("addtocart",addto+price)

    }
    
    const Cancelation=(event)=>{
      event.preventDefault();
      
      if(addto>0){
        let Cancelation=addto-price
        setaddto(Cancelation)
        setcancel(cancel+1)
        let getvalue=localStorage.getItem("add")
      console.log(getvalue)
      localStorage.setItem("after cancel",addto-price)
      localStorage.setItem("addtocart",addto-price)
       }
      if(addto==0){
        setcancel(0)
        localStorage.removeItem('addtocart');
        localStorage.removeItem('after cancel');
      }

    }

    // if(!detailfood.length){
    //     return<h2>waiting</h2>
    // }
console.log("detailfood",detailfood)




    return(
        <>
{detailfood.map((item)=>{

item.price=1350
  if(item.idMeal===idmeal){


        return(
            <div  key={item.idMeal} className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
              <div className="col-lg-7 text-center text-lg-start">
                <img  className="det-img" width={300} src={item.strMealThumb}></img>
                <h1 className="display-4 fw-normal text-body-emphasis mb-3">{item.strArea}</h1>
                <h1 className="display-4 fs-1 text-body-emphasis mb-3">RS:{item.price}</h1>
                {/* <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
                <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p> */}
              </div>
              <div className="col-md-10 mx-auto col-lg-5">
                <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                  <div className="form-floating mb-3">
                    <h3>ADD TO CART <span  className="font-monospace text-danger">{addto}</span></h3>
                    <button className="btn btn-lg btn-success fst-italic" onClick={addtocart}>ADD TO CART</button>
                    {/* <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label> */}
                  </div>
                  <div className="form-floating mb-3">
                    <h3>Cancel <span  className="font-monospace text-danger">{cancel}</span></h3>
                    <button className="btn btn-lg btn-success fst-italic" onClick={Cancelation}>Cancel</button>
                    <button className="btn btn-lg btn-success m-1 fst-italic" onClick={()=>navigate('/Bill')}>ORDER</button>
                    {/* <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label> */}
                  </div>
                  {/* <div className="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                  </div>
                  <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                  <hr className="my-4"/>
                  <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small> */}
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