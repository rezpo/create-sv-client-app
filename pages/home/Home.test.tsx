import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
    render(<Home />);

    it("should render Home page", () => {
        expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });
});
