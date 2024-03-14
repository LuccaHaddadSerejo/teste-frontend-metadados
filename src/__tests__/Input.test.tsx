import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../components/Input";

describe("Input component", () => {
  it("renders correctly with required props", () => {
    const { getByPlaceholderText } = render(
      <Input type="text" placeholder="Enter text" />
    );

    expect(getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders label if provided", () => {
    const { getByText } = render(
      <Input type="text" placeholder="Enter text" label="Name" />
    );

    expect(getByText("Name")).toBeInTheDocument();
  });

  it("handles onChange event", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input type="text" placeholder="Enter text" onChange={handleChange} />
    );

    fireEvent.change(getByPlaceholderText("Enter text"), {
      target: { value: "Hello" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("applies disabled attribute when disabled is true", () => {
    const { getByPlaceholderText } = render(
      <Input type="text" placeholder="Enter text" disabled />
    );

    expect(getByPlaceholderText("Enter text")).toBeDisabled();
  });
});
