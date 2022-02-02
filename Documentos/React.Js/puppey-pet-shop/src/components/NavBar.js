import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <div className="contenedor">
      <h1>PUPPEY-Pet-Shop</h1>
      <CartWidget/>
    </div>
  );
}
