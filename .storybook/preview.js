import {withThemeFromJSXProvider} from "@storybook/addon-themes";
import GlobalStyles from "../src/styles/GlobalStyles.js";

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		actions: {argTypesRegex: "^on[A-Z].*"},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export const decorators = [
	withThemeFromJSXProvider({
		GlobalStyles, // Adds your GlobalStyle component to all stories
	}),
];

export default preview;
