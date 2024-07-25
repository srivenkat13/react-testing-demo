import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet Component Rendered", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet Render with name", () => {
  render(<Greet name="venkat" />);
  const textElement = screen.getByText("Hello venkat");
  expect(textElement).toBeInTheDocument();
});
