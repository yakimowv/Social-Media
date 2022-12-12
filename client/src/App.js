import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {useContext} from 'react'
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";
import { ProtectRoute } from "./guards/ProtectRoute";
import './style.scss'
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const {darkMode}=useContext(DarkModeContext)
  console.log(darkMode)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ?'dark':'light'}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoute>
          <Layout />
        </ProtectRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
