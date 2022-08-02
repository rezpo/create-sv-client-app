import { render, screen } from "@testing-library/react";
import { mockContainerProps } from "./Container.mocks";
import Container from "./Container";

describe("Container", () => {
    render(<Container {...mockContainerProps.base} />);

    it("should render a container", () => {
        expect(
            screen.getByText("Magna elit ea amet ut.")
        ).toBeInTheDocument();
    });
});
