import { projects } from "projects";
import { Box, Container, Heading, Image, Wrapper } from "./projects.style";

const Project = () => {
	return (
		<Container>
			<Heading>Projects and Work</Heading>
			<Wrapper>
				{projects &&
					projects?.map((item, index) => (
						<Box href={item.url} key={index} target="_blank">
							<Image src={item?.projectImg} alt={item?.name} />
						</Box>
					))}
			</Wrapper>

			{/* <FlexBox>
				<ProjectBox>
					<ProjectImg src={projects[0].projectImg} alt={projects[0].name} />
					<Title>Color's Finder, easily find colors on website</Title>
				</ProjectBox>
				<ProjectBox>
					<ProjectImg src={projects[0].projectImg} alt={projects[0].name} />
					<Title>Color's Finder, easily find colors on website</Title>
				</ProjectBox>
				<ProjectBox>
					<ProjectImg src={projects[0].projectImg} alt={projects[0].name} />
					<Title>Color's Finder, easily find colors on website</Title>
				</ProjectBox>
				<ProjectBox>
					<ProjectImg src={projects[0].projectImg} alt={projects[0].name} />
					<Title>Color's Finder, easily find colors on website</Title>
				</ProjectBox>
				<ProjectBox>
					<ProjectImg src={projects[0].projectImg} alt={projects[0].name} />
					<Title>Color's Finder, easily find colors on website</Title>
				</ProjectBox>
				<ProjectBox>
					<ProjectImg src={projects[0].projectImg} alt={projects[0].name} />
					<Title>Color's Finder, easily find colors on website</Title>
				</ProjectBox>
				<ProjectBox>
					<ProjectImg src={projects[0].projectImg} alt={projects[0].name} />
					<Title>Color's Finder, easily find colors on website</Title>
				</ProjectBox>
				<ProjectBox>
					<ProjectImg src={projects[0].projectImg} alt={projects[0].name} />
					<Title>Color's Finder, easily find colors on website</Title>
				</ProjectBox>
			</FlexBox> */}
		</Container>
	);
};

export default Project;
