import Button from "../../../ui/Button.jsx";
import {options} from "./constants.js";

export default {title: "Button", component: Button};

export const Default = () => <Button>Button</Button>;
export const Variations = () =>
	options.variations.map((variant, index) => (
		<Button key={index} variation={variant}>
			Button
		</Button>
	));

export const Sizes = () =>
	options.sizes.map((size, index) => (
		<Button key={index} size={size}>
			Button
		</Button>
	));
