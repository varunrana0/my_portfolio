import styled from "styled-components";

export const Container = styled.section`
	background-color: #d661ff;
	overflow: hidden;
	padding-bottom: 100px;
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
	display: flex;
	gap: 20px;
	white-space: wrap;
	flex-wrap: wrap;
	padding: 100px 0;
	margin-top: 7rem;
	padding-left: 60px;

	@media screen and (max-width: 500px) {
		padding: 20px 10px;
	}
`;

export const Box = styled.a`
	height: 300px;
	width: 300px;
	border: 4px solid black;
	box-shadow:
		7px 7px 0 white,
		14px 14px 0 black;
	border-radius: 30px;
	overflow: hidden;
	margin: 1rem;
	transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1);

	&:nth-child(1) {
		transform: translateY(-70px) rotate(5deg) translate3d(-20px, 0, 0) skew(-4deg, 5deg) scale(1);
		will-change: transform;
		transform-style: preserve-3d;
	}

	&:nth-child(2) {
		transform: translateY(50px) rotate(-4deg) translate3d(20px, 0, 0) skew(4deg, -5deg) scale(1);
		will-change: transform;
		transform-style: preserve-3d;
	}

	&:nth-child(3) {
		transform: translateY(-70px) rotate(5deg) translate3d(40px, 0, 0) skew(-4deg, 5deg) scale(1);
		will-change: transform;
		transform-style: preserve-3d;
	}

	&:nth-child(4) {
		transform: translateY(70px) rotate(-5deg) translate3d(40px, 0, 0) skew(4deg, -5deg) scale(1);
		will-change: transform;
		transform-style: preserve-3d;
	}

	&:nth-child(5) {
		transform: translateY(-70px) rotate(-5deg) translate3d(-20px, 50px, 0) skew(4deg, -5deg)
			scale(1);
		will-change: transform;
		transform-style: preserve-3d;
	}
	&:nth-child(6) {
		transform: translateY(70px) rotate(5deg) translate3d(40px, 0, 0) skew(-4deg, 5deg) scale(1);
		will-change: transform;
		transform-style: preserve-3d;
	}

	&:nth-child(7) {
		transform: translateY(70px) rotate(-5deg) translate3d(80px, 0, 0) skew(4deg, -5deg) scale(1);
		will-change: transform;
		transform-style: preserve-3d;
	}

	&:hover {
		box-shadow: none;
	}

	@media screen and (max-width: 500px) {
		&:nth-child(odd) {
			transform: translateY(0px) rotate(-5deg) translate3d(0px, 0, 0) skew(4deg, -5deg) scale(1);
			will-change: transform;
			transform-style: preserve-3d;
		}

		&:nth-child(even) {
			transform: translateY(0px) rotate(5deg) translate3d(0px, 0, 0) skew(-4deg, 5deg) scale(1);
			will-change: transform;
			transform-style: preserve-3d;
		}
	}
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	/* aspect-ratio: 100%; */
	resize: none;
`;
