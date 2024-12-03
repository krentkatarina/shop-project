import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { renderWithProviders } from "../utils/testWrapper";
import SingleProduct from "../components/Products/SingleProduct";

const mockItem = {
  id: 172,
  title: "Nueva Polera Universal",
  price: 10,
  description: "Polera con imagenes de universal",
  images: [
    "https://imfd.cl/wp-content/uploads/2019/01/Antonio-Ossa-Guerra.jpeg",
    "https://www.claseejecutiva.uc.cl/wp-content/uploads/2023/06/Profesor-Antonio-Ossa-300x300.png",
  ],
  creationAt: "2024-04-12T21:16:45.000Z",
  updatedAt: "2024-04-12T21:55:11.000Z",
  category: {
    id: 14,
    name: "What a nice Product",
    image:
      "https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg",
    creationAt: "2024-04-12T19:31:29.000Z",
    updatedAt: "2024-04-12T19:31:29.000Z",
  },
};

describe("Product", () => {
  it("should render", () => {
    renderWithProviders(
      <MemoryRouter initialEntries={["/products/172"]}>
        <Routes>
          <Route path="products/:id" element={<SingleProduct {...mockItem} />} />
        </Routes>
      </MemoryRouter>,
      {
        preloadedState: {
          products: {
            list: [mockItem],
          },
        },
      }
    );
    const productTitle = screen.getByTestId("product title");
    expect(productTitle).toBeInTheDocument();
  });
  it("should show empty", () => {
    renderWithProviders(
      <MemoryRouter initialEntries={["/products/172"]}>
        <Routes>
          <Route path="products/:id" element={<SingleProduct {...mockItem} />} />
        </Routes>
      </MemoryRouter>,
      {
        preloadedState: {
          products: {
            list: [],
          },
        },
      }
    );
    const productTitle = screen.getByText("No such product");
    expect(productTitle).toBeInTheDocument();
  });
});
