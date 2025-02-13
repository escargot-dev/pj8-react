import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>404 - Page non trouvée</h1>
        <p>Oups ! Cette page n'existe pas.</p>
        <Link to="/">Retour sur la page d'accueil</Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
