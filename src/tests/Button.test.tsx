import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../components/Button/index";

describe("Button component", () => {
  it("renders button with provided children", () => {
    const { getByText } = render(<Button type="button">Click me</Button>);

    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("fires onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button type="button" onClick={handleClick}>
        Click me
      </Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders button with specified type", () => {
    const { container } = render(<Button type="button">button</Button>);
    expect(container.firstChild).toHaveAttribute("type", "button");
  });

  it("renders button as disabled when disabled prop is true", () => {
    const { container } = render(
      <Button type="button" disabled={true}>
        Disabled Button
      </Button>
    );
    expect(container.firstChild).toBeDisabled();
  });
});
