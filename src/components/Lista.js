import React from "react";
import "./NavBar.css";

export default function activateLasers() {
  return <div>
      <ul><li><button onClick={activateLasers}>Contacto</button></li>
      <li><button onClick={activateLasers}>Sobre nosotros</button></li>
      <li><button onClick={activateLasers}>Ubicacion</button></li>
  </ul>
  </div>
}
