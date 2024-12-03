import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../utils/testWrapper";
import Product from "../components/Products/Product";
const mockItem = {
	id: 172,
	title: "Nueva Polera Universal",
	price: 10,
	description: "Polera con imagenes de universal",
	images: [
		'https://imfd.cl/wp-content/uploads/2019/01/Antonio-Ossa-Guerra.jpeg',
		'https://www.claseejecutiva.uc.cl/wp-content/uploads/2023/06/Profesor-Antonio-Ossa-300x300.png',
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
	}
}
describe('Product', () => {
	it('should render', () => {
		renderWithProviders(
      <MemoryRouter initialEntries={[`/categories/1`]}>
        <Product {...mockItem} />
      </MemoryRouter>
    );
    const productTitle = screen.getByText('Nueva Polera Universal');
    expect(productTitle).toBeInTheDocument();
	})
	it('should change size', () => {
		renderWithProviders(
      <MemoryRouter initialEntries={[`/categories/1`]}>
        <Product {...mockItem} />
      </MemoryRouter>
    );
    const sizeBtn = screen.getByText('4');
    const addToCartBtn = screen.getByText('Add to cart');
		fireEvent.click(sizeBtn)

    expect(addToCartBtn).not.toBeDisabled();
	})

	// it('should open popup', () => {
	// 	renderWithProviders(
  //     <MemoryRouter initialEntries={[`/categories/1`]}>
  //       <Header />
  //     </MemoryRouter>, {preloadedState: {user: {currentUser: null, favourites: [], cart: []},
	// 		products: {list: []}}}
  //   );
  //   const productTitle = screen.getByTestId('user icon btn');
	// 	fireEvent.click(userIcon)
	// 	const signAuthPopUp = screen.getByTestId('auth popup')
  //   expect(signAuthPopUp).toBeInTheDocument();
	// })
})
