import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header"; // Vérifie bien le chemin

test("affiche le logo et les liens de navigation", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const logo = screen.getByAltText("Logo");
  expect(logo).toBeInTheDocument();
  expect(logo.closest("a")).toHaveAttribute("href", "/");

  const homeLink = screen.getByRole("link", { name: "Accueil" });
  const aboutLink = screen.getByRole("link", { name: "À propos" });

  expect(homeLink).toHaveAttribute("href", "/");
  expect(aboutLink).toHaveAttribute("href", "/about");
});
