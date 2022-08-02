import { render, screen } from "@testing-library/react";
import { mockTitleProps } from "./Title.mocks";
import Title from "./Title";

describe("Title", () => {
    render(<Title {...mockTitleProps.base} />);

    it("should render a title", () => {
        expect(
            screen.getByText("Magna elit ea amet ut.")
        ).toBeInTheDocument();
    });
});
