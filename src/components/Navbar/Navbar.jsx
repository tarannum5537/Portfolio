import "./navbar.scss";
import logo from "../../../public/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
    }

    setTimeout(() => {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className={`navbar ${show ? "expand" : ""}`}>
      <div className="nav">
        <span className="logos">
          <img className="div" src={logo} alt="logo" />
        </span>

        <nav className={show ? "menu-mobile" : "menu-web"}>
          <a href="#home" onClick={handleHomeClick}>
            Home
          </a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a
            className="resume"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>

        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <button>Resume</button>
        </a>
        <div
          onClick={() => {
            setShow(!show);
          }}
          className={`ham-menu ${show ? "active" : ""}`}
        >
          <span className="line1"></span>
          <span className="line2"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
