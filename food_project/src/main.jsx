import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Detailcard from './Component/DetailCard.jsx'
import SearchDetail from './Component/SearchDetail.jsx'
import Signup from './Component/Signup.jsx'
import Signin from './Component/Signin.jsx'
import Foodprovider from './Store/food-store.jsx'
import Bill from './Component/Bill.jsx'
import Confirmorder from './Component/OrderConfirm.jsx'
import Container from './Component/Container.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router=createBrowserRouter([
  {
    path:'/',
    element: <Foodprovider> <Signup></Signup></Foodprovider> ,
  },
  {
    path:'/login',
    element:<Foodprovider> <Signin></Signin></Foodprovider>,
  },
{
  path:'/app',
element:<App></App>
},
{
  path:'/detail/:idCategory',
  element:<Detailcard></Detailcard>
},
{
  path:'/searchdetail/:idmeal/:Category',
  element:<SearchDetail></SearchDetail>
},
{
  path:'/Bill',
  element: <Container><Bill></Bill></Container>
},
{
  path:'/confirmorder',
  element:<Confirmorder></Confirmorder>
}



 ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}>
{/* <App /> */}
</RouterProvider>

  
  </StrictMode>,
)
