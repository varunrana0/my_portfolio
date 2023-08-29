import styled from "styled-components";

export const Container = styled.div`
	padding: 5rem 0;
	width: 100%;
	border-bottom: 4px solid black;
	background-color: #bceb66;
	/* background-color: #252525; */
`;

export const InnerContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 500px) {
		justify-content: center;
	}
`;

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	@media screen and (max-width: 500px) {
		flex-direction: column;
		gap: 0.5rem;
	}
`;

export const Text = styled.div`
	font-size: 2.14vw;
	text-transform: capitalize;
	opacity: 1;
	font-family: "MonumentRegular", sans-serif;

	@media screen and (max-width: 500px) {
		font-size: 7vw;
		font-weight: 900;
		line-height: inherit;
	}
`;

export const Info = styled.h5`
	font-size: 1rem;
	margin-top: -0.8rem;
	margin-left: 5rem;
	word-break: break-all;
	font-family: "Roobert", sans-serif;
`;

export const Bio = styled.p`
	font-size: 1rem;
	font-weight: 500;
	max-width: 700px;
	margin: 3rem auto 0 auto;
	font-family: "Roobert", sans-serif;
	letter-spacing: 0.3px;
	padding: 0.7rem;
	text-align: center;
`;

export const Socials = styled.section`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin-top: 1rem;
`;
