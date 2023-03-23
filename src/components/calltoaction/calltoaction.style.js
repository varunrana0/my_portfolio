import styled from "styled-components";

export const Container = styled.section`
	overflow: hidden;
	background-color: #5de2b2;
	border-bottom: 4px solid black;
	height: 100vh;
	padding: 40px 0;
`;

export const Box = styled.div`
	height: 100px;
	max-width: 700px;
	width: 100%;
	margin: auto;
`;

export const Heading = styled.h2`
	font-family: "MonumentExtended";
	text-align: center;
	font-size: 122px;
	text-shadow: 5px 5px 4px rgba(0, 0, 0, 0.2);
	will-change: transform;
	transform: skew(50%, 50%);

	-webkit-text-stroke: 2px #0d0d0d;
	-webkit-text-fill-color: transparent;

	@media screen and (max-width: 500px) {
		font-size: 40px;
	}
`;
export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const InnerBoxes = styled.div`
	padding: 0.5rem 1rem;
	/* height: 100px; */
	/* width: 800px; */
	border: 2px solid black;
	background-color: ${(props) => props.backgroundColor};
	/* position: relative; */

	/* &:hover::after {
		opacity: 0;
	} */
`;
