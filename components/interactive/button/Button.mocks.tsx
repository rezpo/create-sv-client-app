import { ButtonInterface } from "./Button";

const base: ButtonInterface = {
    type: "button",
    text: "Amet ipsum",
    variant: "contained",
    color: "primary",
    size: "medium",
    disabled: false,
    testId: "baseButton",
};

export const mockButtonProps = { base };
