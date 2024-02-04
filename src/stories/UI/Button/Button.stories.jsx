import Button from "../../../ui/Button.jsx";

export default {
	title: "UI/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {variation: {control: "select"}, size: {control: "select"}},
};

export const Default = {
	args: {variation: "primary", size: "medium", children: "Button"},
};

export const Primary = {
	args: {variation: "primary", size: "medium", children: "Button"},
};

export const Secondary = {
	args: {variation: "secondary", size: "medium", children: "Button"},
};

export const Danger = {
	args: {variation: "danger", size: "medium", children: "Button"},
};
