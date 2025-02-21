import "../components/not-found.css";
import { Link } from "react-router-dom";

const PageError = () => {
  return (
    <div className="main-container">
        <h1>404</h1>
        <p>Oups ! Cette page n'existe pas.</p>
        <div className="redirige">
          <Link to="/">Retour sur la page d'accueil</Link>
        </div>
    </div>
  );
};

export default PageError;