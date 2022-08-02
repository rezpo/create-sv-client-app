import { render, screen, fireEvent } from "@testing-library/react";
import { mockButtonProps } from "./Button.mocks";
import Button from "./Button";

describe("Button", () => {
    const handleClick = jest.fn();

    beforeEach(() => {
        render(<Button {...mockButtonProps.base} onClick={handleClick} />);
    });

    it("should render a button", () => {
        expect(screen.getByText("Amet ipsum")).toBeInTheDocument();
    });

    it("should fire onClick handler", () => {
        fireEvent.click(screen.getByText("Amet ipsum"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
