import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PageError from "../components/not-found";

describe("PageError Component", () => {
  test("Affiche le code d'erreur 404", () => {
    render(
      <BrowserRouter>
        <PageError />
      </BrowserRouter>
    );
    
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  test("Affiche le message d'erreur", () => {
    render(
      <BrowserRouter>
        <PageError />
      </BrowserRouter>
    );
    
    expect(screen.getByText("Oups ! Cette page n'existe pas.")).toBeInTheDocument();
  });

  test("Affiche un lien de redirection vers la page d'accueil", () => {
    render(
      <BrowserRouter>
        <PageError />
      </BrowserRouter>
    );
    
    const linkElement = screen.getByRole("link", { name: /Retour sur la page d'accueil/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
