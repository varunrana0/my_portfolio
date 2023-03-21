import styled from "styled-components";

export const Link = styled.a`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.justifyCenter ? "center" : "")};
	height: 100%;
	width: ${(props) => (props?.width ? "100%" : "fit")};
	border-bottom: ${(props) => props.borderBottom && "4px solid black"};
	background: ${(props) => props.bg};
`;
