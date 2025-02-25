import { render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";

test("Affiche le texte de la bannière", () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  expect(screen.getByText(/Chez vous, partout et ailleurs/i)).toBeInTheDocument();
});
