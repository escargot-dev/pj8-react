import "../components/Header.css";
import { NavLink } from "react-router-dom";
import myIcone from '../assets/icones/LOGO.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={myIcone} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><NavLink to="/" className={({isActive}) => isActive? "active" : ""}>Accueil</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive? "active" : ""}>À propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
