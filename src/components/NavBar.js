import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <section className="main-container">
      <div>
        <Link to="/" className="link">
          <h1 className="Titulo">Puppey-PetShop</h1>
        </Link>
        <nav  >
          <ul className="nav">
            <button type="button" class="btn btn-primary">
              <Link to="/" className="link">Inicio</Link>
            </button>
            <button type="button" class="btn btn-primary">
              <Link to={"categoria/alimentos"} className="link">Alimentos</Link>
              </button>
            <button type="button" class="btn btn-primary">
              <Link to={"categoria/juguetes"} className="link">Juguetes</Link>
              </button>
              <button type="button" class="btn btn-primary">
              <Link to={"categoria/accesorios"} className="link">Accesorios</Link>
              </button>
            <button type="button" class="btn btn-primary">
              <Link to={"/item/add"} className="link">+</Link>
              </button>
            <CartWidget ></CartWidget>
          </ul>
        </nav>
      </div>
    </section>
  );

};
export default NavBar;
