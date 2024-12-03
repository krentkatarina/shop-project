import { render,screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import Footer from "../components/Footer/Footer"
import { MemoryRouter } from "react-router-dom";

describe('Footer', () => {
	it('should render', () => {
		render(<MemoryRouter><Footer /></MemoryRouter>);
    const text = screen.getByText('Developed by');
    expect(text).toBeInTheDocument();
	})
})
