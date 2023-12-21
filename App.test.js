import { render, screen } from '@testing-library/react';
import App from '../App';

test("displays an image of yourself with alt text", () => {
  // Arrange 
  render(<App />);

  // Act 
  const image = screen.getByRole("img");

  // Assert
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "src/IMG_2348.jpeg");
  expect(image).toHaveAttribute("alt", "alt text");
});

test("displays a second-level heading with the text 'About Me'", () => {
  // Arrange
  render(<App />);

  // Act 
  const secondLevelHeading = screen.getByRole("heading", { level: 2 });

  // Assert
  expect(secondLevelHeading).toBeInTheDocument();
  expect(secondLevelHeading).toHaveTextContent("About Me");
});

test("displays a paragraph with some text", () => {
  // Arrange
  render(<App />);

  // Act 
  const paragraph = screen.getByText("Hi, I'm Valencia Diane Walker");

  // Assert
  expect(paragraph).toBeInTheDocument();
});

test("displays two links to your Github and Linkedin pages", () => {
  // Arrange
  render(<App />);

  // Act 
  const githubLink = screen.getByRole("link", { name: "GitHub" });
  const linkedinLink = screen.getByRole("link", { name: "LinkedIn" });

  // Assert
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/ValenciaW9");
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/valencia-walker-306a7477/");
});