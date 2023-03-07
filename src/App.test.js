import { render, screen } from "@testing-library/react";
import App from "./App";

describe("check if header and logo exist at first render", () => {
  it("renders the header element with 'Dog Breeds' text", () => {
    render(<App />);
    const headerElement = screen.getByText(/Dog Breeds/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("renders a logo", () => {
    render(<App />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
});
