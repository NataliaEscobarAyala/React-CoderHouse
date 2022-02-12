import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import Lista from "./Lista";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <h1>Puppey-PetShop</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Productos</Link>
          </li>
          <li><Link to={"categoria/alimentos"}>Alimentos</Link></li>
          <li><Link to={"categoria/juguetes"}>Juguetes</Link></li>
          <li><Link to={"categoria/accesorios"}>Accesorios</Link></li>
          
          <CartWidget></CartWidget>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
