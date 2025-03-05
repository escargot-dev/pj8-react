// Carousel.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "../components/Carousel";


  const mockPictures = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];
  describe('Carousel Component', () => {

  test('displays the first image by default', () => {
    render(<Carousel pictures={mockPictures} />);
    const image = screen.getByAltText('Slide 1');
    expect(image).toHaveAttribute('src', 'image1.jpg');
  });

  test('navigates to the next slide', () => {
    const { getByAltText, getByText } = render(<Carousel pictures={mockPictures} />);
    const nextButton = getByAltText('Next').closest('button');

    fireEvent.click(nextButton);

    const image = screen.getByAltText('Slide 2');
    expect(image).toHaveAttribute('src', 'image2.jpg');
    expect(getByText('2 / 3')).toBeInTheDocument();
  });

  test('navigates to the previous slide', () => {
    const { getByAltText, getByText } = render(<Carousel pictures={mockPictures} />);
    const prevButton = getByAltText('Previous').closest('button');

    fireEvent.click(prevButton);

    const image = screen.getByAltText('Slide 3');
    expect(image).toHaveAttribute('src', 'image3.jpg');
    expect(getByText('3 / 3')).toBeInTheDocument();
  });

  test('does not render buttons if there is only one image', () => {
    const { queryByAltText } = render(<Carousel pictures={['image1.jpg']} />);
    const prevButton = queryByAltText('Previous');
    const nextButton = queryByAltText('Next');

    expect(prevButton).not.toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();
  });
});
