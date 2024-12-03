import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter} from "react-router-dom";
import { renderWithProviders } from "../utils/testWrapper";
import UserSignUpForm from "../components/User/UserSignUpForm";


describe("userSignUpForm", () => {
  it("should render", () => {
    renderWithProviders(
      <MemoryRouter>
        <UserSignUpForm />
      </MemoryRouter>
    );
    const popUpTitle = screen.getByText("Sign Up");
    expect(popUpTitle).toBeInTheDocument();
  });
  it("should show change value", () => {
    renderWithProviders(
      <MemoryRouter>
        <UserSignUpForm/>
      </MemoryRouter>
    );
    const nameInput = screen.getByPlaceholderText("Your name");
    fireEvent.change(nameInput, {target: {value: 'test', name: 'name'}})
    expect(nameInput.value).toBe('test');
  });
});
