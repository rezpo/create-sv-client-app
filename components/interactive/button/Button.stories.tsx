import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { ButtonInterface } from "./Button";
import { mockButtonProps } from "./Button.mocks";

export default {
    title: "interactive/Button",
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockButtonProps.base,
} as ButtonInterface;
