import React from "react";
import "./Body.module.scss";

export interface BodyInterface {
    classes?: React.HTMLProps<HTMLHeadingElement>["className"];
    type: "p" | "span" | "strong" | "b" | "small" | "i" | "em";
    text: string;
}

const Body = ({ text, classes, type }: BodyInterface) =>
    React.createElement(type, { className: classes }, text);

export default Body;
