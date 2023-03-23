import { projects } from "projects";
import React from "react";
import { Box, Container, Heading, Image, Wrapper } from "./projects.style";

const Project = () => {
	return (
		<Container>
			<Heading>Projects and Work</Heading>
			<Wrapper>
				{projects &&
					projects?.map((item, index) => (
						<Box href={item.url} key={index}>
							<Image src={item?.projectImg} alt={item?.name} />
						</Box>
					))}
				{/* <Box></Box>
				<Box></Box>
				<Box></Box>
				<Box></Box>
				<Box></Box> */}
			</Wrapper>
		</Container>
	);
};

export default Project;
