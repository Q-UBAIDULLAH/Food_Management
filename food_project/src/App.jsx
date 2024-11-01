import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Cover from './Component/coverpage'
import Signup from './Component/Signup'
import Signin from './Component/Signin'
import Foodprovider from './Store/food-store'
import Router from './Component/Routes/router'
function App() {


  return (
    <>
    <Foodprovider>
    {/* <div>
    <Signup/>
      </div> 
      <div> <Cover></Cover></div>

<div>
<Signin></Signin>
</div> */}
  
  <Router></Router>

    </Foodprovider>
   
    </>
  )
}

export default App
