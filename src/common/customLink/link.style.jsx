import styled from "styled-components";

export const Link = styled.a`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.justifyCenter ? "center" : "")};
	height: fit-content;
	width: fit-content;
`;
