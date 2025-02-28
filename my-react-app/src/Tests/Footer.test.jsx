import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  test("renders the footer with logo and text", () => {
    render(<Footer />);
    
    // Vérifier si l'image du logo est présente
    const logo = screen.getByRole("img", { name: /logo/i });
    expect(logo).toBeInTheDocument();

    // Vérifier si le texte est bien affiché
    const text = screen.getByText(/© 2020 Kasa. All rights réserved./i);
    expect(text).toBeInTheDocument();
  });
});
