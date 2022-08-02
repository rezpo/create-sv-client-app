import { ComponentStory, ComponentMeta } from "@storybook/react";
import Body, { BodyInterface } from "./Body";
import { mockBodyProps } from "./Body.mocks";

export default {
    title: "Typography/Body",
    component: Body,
    argTypes: {},
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const Base = Template.bind({});

Base.args = {
    ...mockBodyProps.base,
} as BodyInterface;
