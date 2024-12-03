import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

describe("Sidebar", () => {
  it("should render", () => {
    render(
      <MemoryRouter  initialEntries={["/categories/1"]} >
        <Sidebar />
      </MemoryRouter>
    );
		const activeNavLink = screen.getByText("Clothes");
    expect(activeNavLink).toHaveClass("active");
    // Проверяем, что ссылки на категории отображаются
    // const categoryLinks = screen.getAllByRole("a", { name: /category/i });
    // expect(categoryLinks).toHaveLength(5); // здесь 5 - это количество категорий в вашем mock значении
		
    // Проверяем, что ссылки в подвале отображаются
    expect(screen.getByText("CATEGORIES")).toBeInTheDocument();
    expect(screen.getByText("Help")).toBeInTheDocument();
    expect(screen.getByText("Terms & Conditions")).toBeInTheDocument();
  });
});
