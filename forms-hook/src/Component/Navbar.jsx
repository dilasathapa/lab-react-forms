import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=>{
    return (
     <>
        <div>
            <Link to="/forms" >Registration</Link>
            <Link to="/contacts">Dilasa</Link>
        </div>
     </>   
    )
}

export default Navbar;