import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../utils/testWrapper";
import Favourites from "../components/Favourites/Favourites";

describe("Favourites", () => {
  it("should render", () => {
    renderWithProviders(
      <MemoryRouter initialEntries={[`/categories/1`]}>
        <Favourites />
      </MemoryRouter>
    );

    const titleElement = screen.getByText("Your favourites");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render list", () => {
    renderWithProviders(
      <MemoryRouter initialEntries={[`/categories/1`]}>
        <Favourites />
      </MemoryRouter>, {preloadedState: {user: {
        favourites: [
          {
              "id": 172,
              "title": "Nueva Polera Universal",
              "price": 10,
              "description": "Polera con imagenes de universal",
              "images": [
                  "https://imfd.cl/wp-content/uploads/2019/01/Antonio-Ossa-Guerra.jpeg",
                  "https://www.claseejecutiva.uc.cl/wp-content/uploads/2023/06/Profesor-Antonio-Ossa-300x300.png"
              ],
              "creationAt": "2024-04-12T21:16:45.000Z",
              "updatedAt": "2024-04-12T21:55:11.000Z",
              "category": {
                  "id": 14,
                  "name": "What a nice Product",
                  "image": "https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg",
                  "creationAt": "2024-04-12T19:31:29.000Z",
                  "updatedAt": "2024-04-12T19:31:29.000Z"
              },
              "quantity": 1
          }
      ]}}}
    );

    const listItemTitle = screen.getByText('Nueva Polera Universal')

    expect(listItemTitle).toBeInTheDocument();
  });

  it("should remove item", () => {
    renderWithProviders(
      <MemoryRouter initialEntries={[`/categories/1`]}>
        <Favourites />
      </MemoryRouter>, {preloadedState: {user: {
        favourites: [
          {
              "id": 172,
              "title": "Nueva Polera Universal",
              "price": 10,
              "description": "Polera con imagenes de universal",
              "images": [
                  "https://imfd.cl/wp-content/uploads/2019/01/Antonio-Ossa-Guerra.jpeg",
                  "https://www.claseejecutiva.uc.cl/wp-content/uploads/2023/06/Profesor-Antonio-Ossa-300x300.png"
              ],
              "creationAt": "2024-04-12T21:16:45.000Z",
              "updatedAt": "2024-04-12T21:55:11.000Z",
              "category": {
                  "id": 14,
                  "name": "What a nice Product",
                  "image": "https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg",
                  "creationAt": "2024-04-12T19:31:29.000Z",
                  "updatedAt": "2024-04-12T19:31:29.000Z"
              },
              "quantity": 1
          }
      ]}}}
    );

    const listItemTitle = screen.getByText('Nueva Polera Universal')
    
    expect(listItemTitle).toBeInTheDocument();
    const removeBtn = screen.getByTestId('favourites remove')
    fireEvent.click(removeBtn)

    
    expect(listItemTitle).not.toBeInTheDocument();
  });
});
