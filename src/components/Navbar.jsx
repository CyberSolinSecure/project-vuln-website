import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-950 text-white p-4 h-fit">
      <div className="flex flex-row justifiy-between ">
        <div className="container">
         

         Vulnerable Website 

        </div>

        <div className="w-1/2">
        <ul className="flex space-x-4">
        <li>
        <a href="https://www.cysisec.com" className="hover:underline">
            CysiSec
          </a>
          </li>
          <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
          <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
        <li>
          <Link to="/comment" className="hover:underline">
            Comment
          </Link>
        </li>
        <li>
          <Link to="/admin" className="hover:underline">
            Admin Access
          </Link>
        </li>
        <li>
          <Link to="/docs" className="hover:underline">
            Docs
          </Link>
        </li>
      </ul>
        </div>
    
      </div>
      
    </nav>
  );
};

export default Navbar;
