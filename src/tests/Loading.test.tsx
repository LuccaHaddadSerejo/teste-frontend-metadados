import { render } from "@testing-library/react";
import Loading from "../components/Loading";
import "@testing-library/jest-dom";

describe("Loading Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Loading />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders the loading spinner", () => {
    const { getByTestId } = render(<Loading />);
    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });
});
