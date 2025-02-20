import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/logCarousel";
import { useParams } from "react-router-dom";

const FicheLogement = () => {
  const { id } = useParams(); // Récupère l'ID du logement dans l'URL
  
  return (
    <div>
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
};

export default FicheLogement;
