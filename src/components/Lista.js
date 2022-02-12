import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function lista() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/">Alimentos</Link>
        </li>
        <li>
          <Link to="/">Categoria</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
      </ul>
    </div>
  );
}
