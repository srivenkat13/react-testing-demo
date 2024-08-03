import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("Renders Correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const IncrementButton = screen.getByRole("button", { name: "Increment" });
    expect(IncrementButton).toBeInTheDocument();
  });

  test("Renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("Renders count of 1 after clicking Increment", async () => {
    user.setup();
    render(<Counter />);
    const IncrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(IncrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });
});
