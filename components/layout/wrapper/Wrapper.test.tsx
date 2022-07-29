import { render, screen } from "@testing-library/react";
import { mockWrapperProps } from "./Wrapper.mocks";
import Wrapper from "./Wrapper";

describe("Wrapper", () => {
    render(<Wrapper {...mockWrapperProps.base} />);

    it("should render the children", () => {
        expect(
            screen.getByText("Ipsum est et proident sint sunt proident nisi.")
        ).toBeInTheDocument();
    });
});
