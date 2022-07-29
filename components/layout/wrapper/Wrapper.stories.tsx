import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wrapper, { WrapperInterface } from "./Wrapper";
import { mockWrapperProps } from "./Wrapper.mocks";

export default {
    title: "Layout/Wrapper",
    component: Wrapper,
    argTypes: {},
} as ComponentMeta<typeof Wrapper>;

const Template: ComponentStory<typeof Wrapper> = (args) => (
    <Wrapper {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockWrapperProps.base,
} as WrapperInterface;
