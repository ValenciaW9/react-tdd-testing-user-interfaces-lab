import { render, screen } from "@testing-library/react";
import App from "../App"; // Import the App component
import '@testing-library/jest-dom';

test('renders the App component without errors', () => {
  render(<App/>);
});

test('renders the correct heading', () => {
  render(<App/>);
  const headingElement = screen.getByText("Hi, I'm (Valencia Diane Walker)");
  expect(headingElement).toBeInTheDocument();
});

test('renders the image with the correct alt text', () => {
  render(<App />);
  const imageElement = screen.getByAltText("IMG_2348.jpeg");
  expect(imageElement).toBeInTheDocument();
});

test('renders the correct number of links', () => {
  render(<App />);
  const linkElements = screen.getAllByRole('link');
  expect(linkElements.length).toBe(4); // Update the expected value to 4
});

test('renders the correct email addresses', () => {
  render(<App />);
  const emailElements = screen.getAllByText(/@yahoo\.com|@phoenix\.edu/);
  expect(emailElements.length).toBe(2); // Update the expected value to 2 or the correct number of email addresses
});

test('renders the correct phone numbers', () => {
  render(<App />);
  const phoneNumberElements = screen.getAllByText(/(\(\d{3}\)[-.\s]\d{3}[-.\s]\d{4})|(\(\d{3}\)\s\d{3}\s\d{4})/);
  expect(phoneNumberElements.length).toBe(1); // Update the expected value to 1 or the correct number of phone numbers
});