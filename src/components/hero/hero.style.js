import styled, { keyframes } from "styled-components";

export const Container = styled.div`
	height: 100vh;
	width: 100%;
	border-bottom: 4px solid black;
	background-color: #bceb66;
`;
export const InnerContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: end;
	/* align-items: center; */
	padding: 0 0 40px 40px;
`;

export const Box = styled.div`
	line-height: 125px;
	overflow: hidden;
	font-size: 7.14vw;
	opacity: 1;
`;

export const Wrapper = styled.span`
	white-space: nowrap;
	font-family: "MonumentRegular", sans-serif;
	transition: transform;
`;

export const Tag = styled.span`
	display: inline-block;
	transform: rotate(4deg) translateY(0px);
	opacity: 1;
	color: #0d0d0d;
	transform-origin: center;
	margin: 0.2rem;

	&:hover {
		transform: rotate(0);
	}
`;

export const Info = styled.h5`
	font-size: 40px;
	font-weight: normal;
	line-height: 40px;
	font-family: "Roobert", sans-serif;
`;
