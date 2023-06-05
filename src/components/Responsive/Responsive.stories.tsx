import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Responsive from "./Responsive";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Responsive",
    component: Responsive,
} as Meta<typeof Responsive>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Responsive> = (args) => <Responsive {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    desktop: <div>HELLO WORLD</div>,
    mobile: <small>hello world</small>
};

export const ClickMe = Template.bind({});
ClickMe.args = {
    desktop: <h2>Click Me</h2>,
    mobile: <h5>click me</h5>
};
