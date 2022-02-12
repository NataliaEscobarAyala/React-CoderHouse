import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import Lista from './Lista'

export default function NavBar() {
  return (
    <div className="NavBar">
      <h1>PUPPEY-Pet-Shop</h1>
      <CartWidget />
      <Lista />
    </div>
  );
}
