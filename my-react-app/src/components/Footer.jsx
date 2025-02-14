import "../components/Footer.css";
import myIcone from '../assets/icones/LOGO (footer).svg'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={myIcone} alt="Logo" />
      <p>© 2020 Kasa. All rights réserved.</p>
    </footer>
  );
};

export default Footer;
