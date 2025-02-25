import { render, screen, fireEvent } from '@testing-library/react';
import ACart from '../components/ACart'; 
import collapsibleData from '../data/collapsibleData.json';

describe('ACart', () => {
  it('should toggle collapse content on click', () => {
    render(<ACart />);

    // Trouve le bouton de la première section du collapsus
    const firstButton = screen.getAllByRole('button')[0];

    // Vérifie si la section est fermée au début
    expect(screen.queryByText(collapsibleData[0].content)).not.toBeInTheDocument();

    // Clique sur le bouton pour ouvrir la section
    fireEvent.click(firstButton);

    // Vérifie si la section est ouverte après le clic
    expect(screen.getByText(collapsibleData[0].content)).toBeInTheDocument();

    // Clique à nouveau pour fermer la section
    fireEvent.click(firstButton);

    // Vérifie si le contenu de la première section est caché après le deuxième clic
    expect(screen.queryByText(collapsibleData[0].content)).not.toBeInTheDocument();
  });
});
