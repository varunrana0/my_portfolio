import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
	overflow: hidden;
	border-bottom: 4px solid black;
`;

const slide = keyframes`
 from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-136vw, 0, 0);
  }
`;

export const Container = styled.div`
	border-bottom: 4px solid black;
	width: 100%;
	overflow: hidden;
`;

export const AnimatedFlex = styled.div`
	display: flex;
	column-gap: 5vw;
	width: 100vw;
	height: 5vw;
	margin-top: 16px;
	align-items: center;
	transform: ${({ animated }) => (animated ? "translate3d(-136vw, 0, 0)" : "translate3d(0, 0, 0)")};
	transform-style: preserve-3d;
	animation: ${slide} 50s linear infinite forwards;
	will-change: transform;
`;

export const Experience = styled.div`
	display: flex;
	column-gap: 5vw;
	row-gap: 5vw;
	text-transform: uppercase;
	white-space: nowrap;
`;

export const Title = styled.h1`
	width: auto;
	display: flex;
	line-height: 5vw;
	margin: 0;
	white-space: nowrap;
	font-size: 5vw;
	font-weight: bold;

	font-family: "MonumentExtended", sans-serif;
`;
