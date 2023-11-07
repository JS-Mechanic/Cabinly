import ButtonWrapper from "./ButtonWrapper.jsx";

export default {
	title: "UI/Button",
	component: ButtonWrapper,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variation: {
			control: "select",
			options: ["primary", "secondary", "danger"],
			description: "Variation of button",
		},
		size: {
			control: "select",
			options: ["small", "medium", "large"],
			description: "Size of button",
		},
		children: {
			control: "text",
			description: "Label of button",
		},
		onClick: {
			description: "Click handler function",
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const primary = {
	args: {
		variation: "primary",
		size: "medium",
	},
};

export const secondary = {
	args: {
		variation: "secondary",
		size: "medium",
	},
};

export const danger = {
	args: {
		variation: "danger",
		size: "medium",
	},
};

export const small = {
	args: {
		variation: "primary",
		size: "small",
	},
};

export const medium = {
	args: {
		variation: "primary",
		size: "medium",
	},
};
export const large = {
	args: {
		variation: "primary",
		size: "large",
	},
};
