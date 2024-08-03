import { logRoles, render, screen } from "@testing-library/react";
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
    // for (let i = 0; i < 2; i++) {
    //   await user.click(IncrementButton);
    // }
    await user.click(IncrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("Renders count of 10  after clicking the set button", async () => {
    user.setup();
    const view = render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    logRoles(view.container);
    expect(countElement).toHaveTextContent("1");
  });
  test("Elemets are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const IncrementButton = screen.getByRole("button", { name: "Increment" });
    await user.tab();
    expect(IncrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
