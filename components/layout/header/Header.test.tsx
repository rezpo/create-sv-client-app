import { render, screen } from "@testing-library/react";
import { mockHeaderProps } from "./Header.mocks";
import Header from "./Header";

describe("Header", () => {
    render(<Header {...mockHeaderProps.base} />);

    it("should render the header", () => {
        expect(
            screen.getByText("Reprehenderit do adipisicing voluptate consectetur.")
        ).toBeInTheDocument();
    });
});
