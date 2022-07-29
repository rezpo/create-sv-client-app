import { WrapperInterface } from "./Wrapper";

const children = () => (
    <>
        <div data-testid="wrapper">
            <h2>Ipsum est et proident sint sunt proident nisi.</h2>
            <p>
                Esse cupidatat consequat consectetur commodo duis occaecat
                pariatur enim labore mollit occaecat commodo laboris. Dolore
                nostrud dolor voluptate esse sit dolor. Consectetur velit
                pariatur quis aute aliqua non occaecat occaecat sit et proident.
                Non minim minim sunt sint dolor eu occaecat ipsum.
            </p>
        </div>
        <div style={{ width: "100%" }}>
            <ul>
                <li>Lorem aliquip reprehenderit irure sunt mollit.</li>
                <li>Reprehenderit sit qui sunt magna.</li>
                <li>Elit enim ex occaecat incididunt sis.</li>
                <li>Ut sunt pariatur do ipsum et esse sit eiusmod deserunt.</li>
                <li>Adipisicing voluptate amet velit.</li>
            </ul>
        </div>
    </>
);

const base: WrapperInterface = {
    children: children(),
};

export const mockWrapperProps = { base };
