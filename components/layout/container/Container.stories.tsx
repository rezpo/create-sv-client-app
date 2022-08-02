import { ComponentStory, ComponentMeta } from "@storybook/react";
import Container, { ContainerInterface } from "./Container";
import { mockContainerProps } from "./Container.mocks";

export default {
    title: "Layout/Container",
    component: Container,
    argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
    <Container {...args} />
);

export const Base = Template.bind({});

Base.args = {
    ...mockContainerProps.base,
} as ContainerInterface;
