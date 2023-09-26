import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	max-width: 1030px;
	margin: auto;
	height: 100%;
	gap: 1rem;
	padding: 5rem 2rem;

	@media screen and (max-width: 500px) {
		grid-template-columns: 1fr;
		max-width: 100%;
		padding: 4rem 1rem;
	}
`;

export const Container = styled.section`
	/* background-color: #d661ff; */
	background-color: #a3b18a;
	overflow: hidden;
	position: relative;
	border-bottom: 2px solid black;
`;

export const Heading = styled.h1`
	text-align: center;
	padding-top: 1rem;
	font-size: 4rem;
	font-family: "MonumentExtended", sans-serif;
	text-transform: capitalize;
	font-weight: 500;
	border-bottom: 4px solid black;
	color: #252422;

	@media screen and (max-width: 500px) {
		font-size: 3rem;
	}
`;

export const Box = styled.a`
	display: block;
	height: 250px;
	width: 100%;
	border: 1px solid black;
	border-radius: 20px;
	overflow: hidden;

	&:hover {
		transform: scale(1.02);
		transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	resize: none;
`;
