import { projects } from "projects";
import { Box, Container, Heading, Image, Wrapper } from "./projects.style";

const Project = () => {
	return (
		<Container>
			<Heading>from idea to reality</Heading>
			<Wrapper>
				{projects &&
					projects?.map((item, index) => (
						<Box href={item.url} key={index} target="_blank">
							<Image src={item?.projectImg} alt={item?.name} />
						</Box>
					))}
			</Wrapper>
		</Container>
	);
};

export default Project;
