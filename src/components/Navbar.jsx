// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/MINIme.svg"; // ← agregamos el logo

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link to="/productos" onClick={() => setMenuOpen(false)}>
            PRODUCTOS
          </Link>
          <Link to="/categorias" onClick={() => setMenuOpen(false)}>
            CATEGORIAS
          </Link>
          <Link to="/contacto" onClick={() => setMenuOpen(false)}>
            CONTACTO
          </Link>
          <Link to="/carrito" onClick={() => setMenuOpen(false)}>
            CARRITO
          </Link>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
