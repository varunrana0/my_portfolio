import styled from "styled-components";

export const Container = styled.section`
	background-color: #d661ff;
	overflow: hidden;
	position: relative;
	border-bottom: 2px solid black;

	@media screen and (max-width: 500px) {
		padding: 50px 0;
	}
`;

export const Heading = styled.h1`
	text-align: center;
	padding-top: 1rem;
	font-size: 4rem;
	font-family: "MonumentExtended", sans-serif;
	font-weight: 700;
	border-bottom: 4px solid black;

	@media screen and (max-width: 500px) {
		font-size: 3rem;
	}
`;

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	max-width: 1030px;
	margin: auto;
	height: 100%;
	gap: 1rem;
	padding: 5rem 2rem;

	@media screen and (max-width: 500px) {
		grid-template-columns: 1fr;
		max-width: 100%;
		padding: 5rem 1rem;
	}
`;

export const Box = styled.a`
	display: block;
	height: 100%;
	width: 100%;
	border: 4px solid black;

	&:nth-child(1) {
		grid-column: 1/3;
	}

	&:nth-child(2) {
		grid-area: 1 / 3 / 3 / 5;
	}
	&:nth-child(5) {
		grid-column: 1 / 3;
	}

	@media screen and (max-width: 500px) {
		height: 250px;

		&:nth-child(1) {
			grid-column: 1/1;
		}

		&:nth-child(2) {
			grid-area: 1 /1;
		}
		&:nth-child(5) {
			grid-column: 1 / 1;
		}
	}
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	/* aspect-ratio: 1; */
	resize: none;
`;

export const FlexBox = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(2, 1fr);
	/* justify-content: center; */
	gap: 1rem;
	/* max-width: 800px; */
	height: 100%;
	border: 2px solid black;
	margin: 10rem auto;

	&:nth-child(1) {
		/* column-span: 1 span 4; */
		grid-column-start: 1;
		grid-column-end: 3;
	}
`;

export const ProjectImg = styled.img`
	height: 100%;
	width: 50%;
	object-fit: cover;
`;

export const ProjectBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 100%;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 600;
	font-family: "Roobert", sans-serif;
	text-transform: capitalize;
`;
