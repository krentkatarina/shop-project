import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../utils/testWrapper";
import Header from "../components/Header/Header";

describe('Header', () => {
	it('should render', () => {
		renderWithProviders(
      <MemoryRouter initialEntries={[`/categories/1`]}>
        <Header />
      </MemoryRouter>, {preloadedState: {user: {currentUser: null, favourites: [], cart: []},
			products: {list: []}}}
    );
    const userName = screen.getByText('Guest');
    expect(userName).toBeInTheDocument();
	})

	// it('should open popup', () => {
	// 	renderWithProviders(
  //     <MemoryRouter initialEntries={[`/categories/1`]}>
  //       <Header />
  //     </MemoryRouter>, {preloadedState: {user: {currentUser: null, favourites: [], cart: []},
	// 		products: {list: []}}}
  //   );
  //   const userIcon = screen.getByTestId('user icon btn');
	// 	fireEvent.click(userIcon)
	// 	const signAuthPopUp = screen.getByTestId('auth popup')
  //   expect(signAuthPopUp).toBeInTheDocument();
	// })
})
