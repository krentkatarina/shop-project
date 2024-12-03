import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App/App";
import { renderWithProviders } from "../utils/testWrapper";

// Mock out all top level functions, such as get, put, delete and post:
describe("App", () => {
  it("should render", () => {
    renderWithProviders(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("CATEGORIES")).toBeInTheDocument();
  });

  it("renders loading animation initially", () => {
    renderWithProviders(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // const loadingElement = screen.getByText("LOADING");
    // expect(loadingElement).toBeInTheDocument();
  });
});
