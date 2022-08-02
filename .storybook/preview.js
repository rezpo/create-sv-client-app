import "../styles/Global.scss";
import * as NextImage from "next/image";

const BREACKPOINTS = {
    xs: 375,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1600,
};

const customViewports = Object.fromEntries(
    Object.entries(BREACKPOINTS).map(([key, value], index) => {
        return [
            key,
            {
                name: key,
                styles: {
                    width: `${value}px`,
                    height: `${(index + 5) * 10}vh`,
                },
            },
        ];
    })
);

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: { viewports: customViewports },
};
