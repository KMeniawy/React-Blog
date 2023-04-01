import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogContext from "../store/Context";

export default function RequireAuth(){
   const { user } = useContext(BlogContext);
   const location = useLocation();
   return(
    user ? (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    ):(
        <Navigate to="/login" state={{from:location}} replace/>
    )
   );
}
