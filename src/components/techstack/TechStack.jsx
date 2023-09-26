import { technologies } from "projects";
import { useMemo } from "react";
import { Wrapper, Box, Grid, Title, Container } from "./techStack.style";

// const generateAdvancedColor = () => {
// 	const hue = Math.floor(Math.random() * 360);
// 	const saturation = Math.floor(Math.random() * 100);
// 	const lightness = Math.floor(Math.random() * 50) + 50;
// 	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// };

const TechList = () => {
	const tech = useMemo(() => technologies, []);
	// const [backgroundColors, setBackgroundColors] = useState([]);

	// useEffect(() => {
	// 	const colors = [];
	// 	for (let i = 0; i < tech.length; i++) {
	// 		colors.push(generateAdvancedColor());
	// 	}
	// 	setBackgroundColors(colors);
	// }, [tech]);

	return (
		<Wrapper>
			{Object.entries(tech).map(([categoryName, categoryItems]) => (
				<Container key={categoryName}>
					<Title>{categoryName}</Title>
					<Grid>
						{categoryItems.map((tech, techIndex) => (
							<Box key={techIndex}>{tech}</Box>
						))}
					</Grid>
				</Container>
			))}
		</Wrapper>
	);
};

export default TechList;
