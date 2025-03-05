import Header from "../components/Header";
import Footer from "../components/Footer";
import LogCarousel from "../components/logCarousel";
import { useParams } from "react-router-dom";

const FicheLogement = () => {
  const { id } = useParams(); // Récupère l'ID du logement dans l'URL
  
  return (
    <div>
      <Header />
      <LogCarousel />
      <Footer />
    </div>
  );
};

export default FicheLogement;
