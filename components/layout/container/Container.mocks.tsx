import { ContainerInterface } from "./Container";

const children = () => {
    return (
        <div data-testid="container">
            <h2>Magna elit ea amet ut.</h2>
            <span>
                Ut id proident labore magna reprehenderit nulla pariatur nostrud
                eu. Non qui amet ad eu irure nisi nisi laboris. Mollit pariatur
                pariatur magna minim esse anim officia nisi exercitation amet
                cupidatat culpa aliqua id. Nisi officia ut dolor labore commodo
                Lorem. Mollit anim nostrud adipisicing tempor ipsum sit
                incididunt.
            </span>
        </div>
    );
};

const base: ContainerInterface = {
    children: children(),
    rounded: true,
    classes: "",
};

export const mockContainerProps = { base };
