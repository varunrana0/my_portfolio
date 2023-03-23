import { techs } from "projects";
import React, { useState, useEffect, useMemo } from "react";
import { Heading, Wrapper, Box, Grid } from "./techStack.style";

const generateAdvancedColor = () => {
	const hue = Math.floor(Math.random() * 360);
	const saturation = Math.floor(Math.random() * 100);
	const lightness = Math.floor(Math.random() * 50) + 50;
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const TechList = () => {
	const tech = useMemo(() => techs, []);
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
