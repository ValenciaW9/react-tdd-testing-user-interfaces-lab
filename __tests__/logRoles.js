import { logRoles, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // "container" represents all the DOM elements rendered by your component
  const { container } = render(<App />);

  // prints out the accessible element in your component along with their roles
  logRoles(container);

  const linkElement = screen.getByRole("link", { name: "ValenciaW9" });
  expect(linkElement).toBeInTheDocument();
});