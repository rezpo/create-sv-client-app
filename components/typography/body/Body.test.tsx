import { render, screen } from "@testing-library/react";
import { mockBodyProps } from "./Body.mocks";
import Body from "./Body";

describe("Body", () => {
    render(<Body {...mockBodyProps.base} />);

    it("should render a body text", () => {
        expect(
            screen.getByText(
                "Nostrud aute nostrud voluptate do in velit eiusmod veniam exercitation ut. Sunt mollit laborum sint enim. Dolore sint ut consectetur proident nostrud nulla proident. Adipisicing nisi incididunt culpa aute cupidatat aute sit deserunt reprehenderit est ea. Culpa nisi officia aliqua est velit eiusmod labore tempor. Amet laboris aute nostrud culpa cupidatat ad ex veniam nisi excepteur. Cupidatat consequat dolor amet culpa in irure tempor laboris aliquip voluptate cupidatat fugiat laboris fugiat."
            )
        ).toBeInTheDocument();
    });
});
