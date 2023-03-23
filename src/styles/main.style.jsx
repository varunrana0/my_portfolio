import styled from "styled-components";

export const Main = styled.main`
	height: 100vh;
	width: 100vw;
	border: 4px solid black;
	display: flex;
	overflow: hidden;
`;

export const Left = styled.div`
	width: 40px;
	height: 100%;
	border-right: 4px solid black;

	@media screen and (max-width: 500px) {
		display: none;
	}

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

export const Center = styled.div`
	flex: 1;
	overflow-y: scroll;
`;

export const Chat = styled.div`
	height: 50px;
	width: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	position: fixed;
	bottom: 10px;
	right: 10px;
`;

export const Right = styled.div`
	width: 40px;
	height: 100%;
	border-left: 4px solid black;

	@media screen and (max-width: 500px) {
		display: none;
	}

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;
