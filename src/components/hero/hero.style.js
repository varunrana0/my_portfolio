import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	width: 100%;
	border-bottom: 4px solid black;
	background-color: #bceb66;

	@media screen and (max-width: 500px) {
		height: 100%;
	}
`;

export const InnerContainer = styled.div`
	height: 100%;
	display: flex;
	/* flex-wrap: wrap; */
	flex-direction: column;
	justify-content: end;
	padding: 0 0 40px 40px;
	overflow: hidden;

	@media screen and (max-width: 500px) {
		justify-content: center;
	}
`;

export const Box = styled.div`
	line-height: 125px;
	overflow: hidden;
	font-size: 7.14vw;
	opacity: 1;

	@media screen and (max-width: 500px) {
		font-size: 14vw;
		font-weight: 900;
		line-height: inherit;
	}
`;

export const Wrapper = styled.span`
	white-space: nowrap;
	font-family: "MonumentRegular", sans-serif;
	transition: transform;
	margin: 1rem;
`;

export const Tag = styled.span`
	display: inline-block;
	transform: rotate(4deg) translateY(-5px);
	opacity: 1;
	color: #0d0d0d;
	transform-origin: center;
	margin: 0.2rem;

	&:nth-child(odd) {
		transform: rotate(-4deg) translateY(5px);
	}

	&:nth-child(odd):hover {
		transform: rotate(4deg) translateY(0px);
	}

	&:hover {
		-webkit-text-stroke: 2px #0d0d0d;
		-webkit-text-fill-color: transparent;
		transform: rotate(-4deg) translateY(0px);
	}
`;

export const Info = styled.h5`
	font-size: 40px;
	line-height: 40px;
	font-family: "Roobert", sans-serif;

	@media screen and (max-width: 500px) {
		margin-top: 1rem;
		font-size: 30px;
	}
`;
