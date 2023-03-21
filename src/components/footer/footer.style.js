import styled from "styled-components";

export const Container = styled.footer`
	display: block;
	overflow: hidden;
	background-color: #14141a;
`;

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 4px solid black;
	padding: 1rem;

	@media screen and (max-width: 500px) {
		flex-direction: column;
		gap: 1rem;
		align-items: flex-start;
	}
`;

export const Email = styled.h3`
	display: block;
	line-height: 1.5rem;
	width: fit-content;
	border: 1px solid black;
	box-shadow: 4px 2px 0px black;
	padding: 0.5rem 1rem;
	background-color: antiquewhite;
	text-transform: capitalize;
	font-family: "Roobert", sans-serif;
	letter-spacing: 0.3px;
	font-weight: 600;
`;

export const Phone = styled.h3`
	display: block;
	line-height: 1.5rem;
	width: fit-content;
	border: 2px solid black;
	box-shadow: 4px 2px 0px black;
	padding: 0.5rem 1rem;
	background-color: aquamarine;
	text-transform: capitalize;
	font-family: "Roobert", sans-serif;
	letter-spacing: 0.3px;
	font-weight: 600;
`;

export const Socials = styled.section`
	display: flex;
	height: 4vw;

	@media screen and (max-width: 500px) {
		height: 10vw;
	}
`;
