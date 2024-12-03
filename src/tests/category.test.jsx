import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../utils/testWrapper";
import Category from "../components/Categories/Category";

describe("Category", () => {
  it("should render", () => {
    renderWithProviders(
      <MemoryRouter initialEntries={[`/categories/1`]}>
        <Category />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("should update filters on input change", () => {
    renderWithProviders(
      <MemoryRouter initialEntries={[`/categories/1`]}>
        <Category />
      </MemoryRouter>
    );

    const productNameInput = screen.getByPlaceholderText('Product name');
    fireEvent.change(productNameInput, { target: { value: 'Example' } });

    expect(productNameInput.value).toBe('Example');
  });

 
});
