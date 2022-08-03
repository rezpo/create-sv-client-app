import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "./Home";

export default {
    title: "Pages/Home",
    component: Home,
    argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const Base = Template.bind({});
