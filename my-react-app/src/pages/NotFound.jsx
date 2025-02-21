import Header from "../components/Header";
import Footer from "../components/Footer";
import PageError from "../components/not-found";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Header />
      <PageError />
      <Footer />
    </div>
  );
};

export default NotFound;
