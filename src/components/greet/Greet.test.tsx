import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test(" Component Rendered", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("Render with name", () => {
    render(<Greet name="venkat" />);
    const textElement = screen.getByText("Hello venkat");
    expect(textElement).toBeInTheDocument();
  });
});
