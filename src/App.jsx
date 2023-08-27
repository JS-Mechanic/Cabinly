import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";

const StyledApp = styled.div`
	background-color: var(--color-brand-200);
	padding: 20px;
`;

export default function App() {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<Button onClick={() => alert("Check in")}>Check in</Button>
				<Button onClick={() => alert("check out")}>Check out</Button>
				<Input type="number" placeholder="Number of guests" />
			</StyledApp>
		</>
	);
}
