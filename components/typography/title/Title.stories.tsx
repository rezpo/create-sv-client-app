import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title, { TitleInterface } from "./Title";
import { mockTitleProps } from "./Title.mocks";

export default {
    title: "Typography/Title",
    component: Title,
    argTypes: {},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Base = Template.bind({});

Base.args = {
    ...mockTitleProps.base,
} as TitleInterface;
