import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Heading, Wrapper, Box, Grid } from "./calltoaction.style";

const generateRandomColor = () => {
	const hex = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += hex[Math.floor(Math.random() * 16)];
	}
	return color;
};

const generateAdvancedColor = () => {
	const hue = Math.floor(Math.random() * 360);
	const saturation = Math.floor(Math.random() * 100);
	const lightness = Math.floor(Math.random() * 50) + 50;
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const TechList = () => {
	const tech = useMemo(
		() => [
			"html",
			"css",
			"javascript",
			"typescript",
			"styled-components",
			"material-ui",
			"tailwindcss",
			"chakra-ui",
			"codux",
			"node.js",
			"react.js",
			"next.js",
			"react-query",
			"postgress",
			"supabase",
			"mongoDB",
			"axios",
			"git",
			"github",
			"jest",
			"playwright",
		],
		[],
	);
	const [backgroundColors, setBackgroundColors] = useState([]);

	useEffect(() => {
		const colors = [];
		for (let i = 0; i < tech.length; i++) {
			colors.push(generateAdvancedColor());
		}
		setBackgroundColors(colors);
	}, [tech]);

	return (
		<Wrapper>
			<Heading>Tech Stack</Heading>
			<Grid>
				{tech.map((item, index) => (
					<Box key={index} backgroundColor={backgroundColors[index]}>
						{item}
					</Box>
				))}
			</Grid>
		</Wrapper>
	);
};

export default TechList;
