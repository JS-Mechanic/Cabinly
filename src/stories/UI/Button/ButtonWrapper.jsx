import Button from "../../../ui/Button.jsx";
import PropTypes from "prop-types";

export const ButtonWrapper = ({size, variation, onClick, children}) => {
	return (
		<Button size={size} variation={variation} onClick={onClick}>
			{children}
		</Button>
	);
};

export default ButtonWrapper;

ButtonWrapper.propTypes = {
	variation: PropTypes.string,
	size: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.string,
};

ButtonWrapper.defaultProps = {
	variation: "primary",
	size: "medium",
	onClick: undefined,
	children: "Button",
};
