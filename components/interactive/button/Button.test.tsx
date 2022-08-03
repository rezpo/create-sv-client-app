import { render, screen, fireEvent } from "@testing-library/react";
import { mockButtonProps } from "./Button.mocks";
import styles from "./Button.module.scss";
import Button from "./Button";

describe("Button", () => {
    it("should render a button", () => {
        render(<Button {...mockButtonProps.base} />);
        expect(screen.getByText("Amet ipsum")).toBeInTheDocument();
        expect(screen.getByTestId("baseButton")).toBeInTheDocument();
        expect(screen.getByTestId("baseButton")).toHaveClass(
            styles.buttonVariant_contained
        );
    });

    it("should render a text variant button", () => {
        render(<Button {...mockButtonProps.base} variant="text" />);
        expect(screen.getByTestId("baseButton")).toHaveClass(
            styles.buttonVariant_text
        );
    });

    it("should render a outlined variant button", () => {
        render(<Button {...mockButtonProps.base} variant="outlined" />);
        expect(screen.getByTestId("baseButton")).toHaveClass(
            styles.buttonVariant_outlined
        );
    });

    it("should render a small size button", () => {
        render(<Button {...mockButtonProps.base} size="small" />);
        expect(screen.getByTestId("baseButton")).toHaveClass(
            styles.buttonSize_small
        );
    });

    it("should render a medium size button", () => {
        render(<Button {...mockButtonProps.base} size="medium" />);
        expect(screen.getByTestId("baseButton")).toHaveClass(
            styles.buttonSize_medium
        );
    });

    it("should render a large size button", () => {
        render(<Button {...mockButtonProps.base} size="large" />);
        expect(screen.getByTestId("baseButton")).toHaveClass(
            styles.buttonSize_large
        );
    });

    it("should render a disabled button", () => {
        render(<Button {...mockButtonProps.base} disabled />);
        expect(screen.getByTestId("baseButton")).toHaveAttribute("disabled");
    });

    it("should fire onClick handler", () => {
        const handleClick = jest.fn();
        render(<Button {...mockButtonProps.base} onClick={handleClick} />);
        fireEvent.click(screen.getByTestId("baseButton"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
