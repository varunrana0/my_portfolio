import styled from "styled-components";

export const Wrapper = styled.section`
	width: 100%;
	padding: 1rem 5rem 5rem;
	background-color: #edede9;
	overflow: hidden;
	border-bottom: 4px solid black;

	@media screen and (max-width: 500px) {
		padding: 1rem 1rem 4rem 1rem;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 4px;
	background-color: transparent;
	max-width: 1024px;
	width: 100%;
	margin: auto;
	font-family: "Roobert", sans-serif;
	overflow: hidden;
`;

export const Box = styled.div`
	background-color: transparent;
	font-weight: 600;
	letter-spacing: 0.809px;
	width: fit-content;
	text-transform: capitalize;
	border-radius: 5px;
	padding: 0.5rem 1rem;
	color: black;
	border: 1px solid #111;
`;

export const Title = styled.p`
	color: black;

	font-size: 2rem;
	font-weight: 700;
	margin-top: 4rem;
	text-align: center;
`;
