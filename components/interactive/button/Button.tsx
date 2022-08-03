import React from "react";
import styles from "./Button.module.scss";

export interface ButtonInterface {
    type: "button" | "submit" | "reset";
    text: string;
    classes?: React.HTMLProps<HTMLButtonElement>["className"];
    variant?: "contained" | "outlined" | "text";
    color?: "primary" | "secondary" | "tertiary" | "black" | "white";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    testId?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    loading?: boolean;
    onClick?: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
    onClick,
    type,
    text,
    classes,
    variant,
    color,
    size,
    leftIcon,
    rightIcon,
    loading = false,
    disabled = false,
    testId = "button",
}: ButtonInterface) => {
    const setVariant = () => {
        switch (variant) {
            case "contained":
                return styles.buttonVariant_contained;
            case "outlined":
                return styles.buttonVariant_outlined;
            case "text":
                return styles.buttonVariant_text;
            default:
                return styles.buttonVariant_contained;
        }
    };

    const setBGColor = () => {
        switch (color) {
            case "primary":
                return styles.buttonBGColor_primary;
            case "secondary":
                return styles.buttonBGColor_secondary;
            case "tertiary":
                return styles.buttonBGColor_tertiary;
            case "black":
                return styles.buttonBGColor_black;
            case "white":
                return styles.buttonBGColor_white;
            default:
                return styles.buttonBGColor_primary;
        }
    };

    const setBorderColor = () => {
        switch (color) {
            case "primary":
                return styles.buttonBorderColor_primary;
            case "secondary":
                return styles.buttonBorderColor_secondary;
            case "tertiary":
                return styles.buttonBorderColor_tertiary;
            case "black":
                return styles.buttonBorderColor_black;
            case "white":
                return styles.buttonBorderColor_white;
            default:
                return styles.buttonBorderColor_primary;
        }
    };

    const setSize = () => {
        switch (size) {
            case "small":
                return styles.buttonSize_small;
            case "medium":
                return styles.buttonSize_medium;
            case "large":
                return styles.buttonSize_large;
            default:
                return styles.buttonSize_medium;
        }
    };

    return (
        <button
            type={type}
            data-testid={testId}
            className={`
                ${styles.button}
                ${setVariant()}
                ${setSize()}
                ${
                    variant !== "text" &&
                    !disabled &&
                    !loading &&
                    (variant === "outlined" ? setBorderColor() : setBGColor())
                }
                ${disabled || loading ? styles.buttonDisabled : ""}
                ${classes ? classes : ""}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {leftIcon}
            <span>{text}</span>
            {rightIcon}
        </button>
    );
};

export default Button;
