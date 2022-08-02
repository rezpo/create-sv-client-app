import React from "react";

export interface TitleInterface {
    classes?: React.HTMLProps<HTMLHeadingElement>["className"];
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    text: string;
}

const Title = ({ text, classes, type }: TitleInterface) =>
    React.createElement(type, classes ? { className: classes } : null, text);

export default Title;
