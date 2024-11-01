import {createBrowserRouter,RouterProvider}from 'react-router-dom';
import Cover from '../coverpage';
import Signup from '../Signup';
import Signin from '../Signin';
import Navbar from '../Navbar';
import Detailcard from '../DetailCard';
import Bill  from '../Bill';
import Confirmorder from '../OrderConfirm';
import SearchDetail from '../SearchDetail';
import Container from '../Container';

const router=createBrowserRouter([
   {
    path:'/',
    element:<div className='vv'><Cover></Cover></div>,
   },
   {
    path:'/signup',
element:<Signup></Signup>,
   },
   {
    path:'/login',
    element:<Signin></Signin>,
   },
   {
    path:'/Navbar',
    element:<Navbar></Navbar>
   },
   {
    path:'/detail/:idCategory',
    element:<Detailcard></Detailcard>
   },
   {
    path:'/Bill',
    element:<Bill></Bill>
   },
   {
    path:'/confirmorder',
    element:<Confirmorder></Confirmorder>
   },
   {
    path:'/searchdetail/:idmeal/:Category',
    element:<SearchDetail></SearchDetail>
   }

])

function Router(){
    return<RouterProvider router={router}></RouterProvider>
}
export default Router