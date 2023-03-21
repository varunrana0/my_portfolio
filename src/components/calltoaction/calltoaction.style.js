import styled from "styled-components";

export const Wrapper = styled.section`
	width: 100%;
	background-color: #14141a;
	overflow: hidden;
	border-bottom: 4px solid black;
`;

export const Heading = styled.h1`
	font-weight: 800;
	text-align: center;
	font-size: 60px;
	width: 100%;
	padding-top: 2rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	-webkit-text-stroke: 2px white;
	-webkit-text-fill-color: transparent;
	text-transform: capitalize;
	white-space: nowrap;

	@media screen and (max-width: 500px) {
		font-size: 50px;
	}
`;

export const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 2rem;
	background-color: transparent;
	font-family: "Roobert", sans-serif;
	text-transform: uppercase;
	font-weight: 700;
	padding: 40px 0;
	padding-bottom: 100px;
`;

export const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	margin: 30px;
	padding: 0.5rem 2rem;
	border: 4px solid black;
	border-radius: 90px 50px 30px 40px;
	box-shadow: 5px 5px 0 ${(props) => props.backgroundColor};
	background-color: ${(props) => props.backgroundColor};

	@media screen and (max-width: 500px) {
		margin: 10px;
	}
`;
