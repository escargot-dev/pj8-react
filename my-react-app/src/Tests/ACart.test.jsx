import { render, screen, fireEvent } from '@testing-library/react';
import ACart from '../components/ACart'; 
import collapsibleData from '../data/collapsibleData.json';

describe('ACart', () => {
  it('should toggle collapse content on click', () => {
    render(<ACart />);

     // Teste chaque section collapsible
     collapsibleData.forEach((section, index) => {
      // Trouve le bouton de la section
      const button = screen.getAllByRole('button')[index];

    // Vérifie si la section est fermée au début
    expect(screen.queryByText(section.content)).not.toBeInTheDocument();

    // Clique sur le bouton pour ouvrir la section
    fireEvent.click(button);

    // Vérifie si la section est ouverte après le clic
    expect(screen.getByText(section.content)).toBeInTheDocument();

    // Clique à nouveau pour fermer la section
    fireEvent.click(button);

    // Vérifie si le contenu de la première section est caché après le deuxième clic
    expect(screen.queryByText(section.content)).not.toBeInTheDocument();
  });
 });
});
