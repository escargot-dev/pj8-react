import "./Header.css";
import { Link } from "react-router-dom";
import myIcone from '../assets/icones/LOGO.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={myIcone} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
