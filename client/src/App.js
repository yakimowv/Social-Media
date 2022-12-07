import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'


function App() {


  const router = createBrowserRouter([
    {
      path:'/',
      element:<div>asdasdasdasd</div>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path:"register",
      element:<Register/>
    }
  ])



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
