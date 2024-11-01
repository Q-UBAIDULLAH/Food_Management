import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Cover from './Component/coverpage.jsx'
// import Signup from './Component/Signup.jsx'
// import Signin from './Component/Signin.jsx'

// const router=createBrowserRouter([
// {
//   path:'/',
// element:<Cover></Cover>
// },
// {
//   path:'/signup',
//   element:<Signup></Signup>
// },
// {
//   path:'/signin',
//   element:<Signin></Signin>
// }

// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <RouterProvider router={router}> */}
<App />
{/* </RouterProvider> */}

  
  </StrictMode>,
)
