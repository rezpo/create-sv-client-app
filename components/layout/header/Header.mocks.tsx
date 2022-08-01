import { HeaderInterface } from "./Header";

const children = () => {
    return (
        <>
            <span data-testid="header">
                Reprehenderit do adipisicing voluptate consectetur.
            </span>
            <span>
                Laborum amet dolore nisi amet commodo ut consectetur proident fugiat.
            </span>
        </>
    );
};

const base: HeaderInterface = {
    children: children(),
};

export const mockHeaderProps = { base };
