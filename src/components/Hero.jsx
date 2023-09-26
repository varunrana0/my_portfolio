import CustomLink from "common/customLink/CustomLink";
import { Text, Container, Info, InnerContainer, Bio, Socials } from "./hero/hero.style";
import { AboutMeSvg, GitHubIcon, LinkedinIcon } from "./icons/icons";

function Hero() {
	return (
		<Container>
			<InnerContainer>
				<AboutMeSvg />
				<Text>I'm varun rana</Text>

				<Info>Self-Taught Jr. Software Developer</Info>
				<Bio>
					Hello there! I'm a passionate web enthusiast and problem solver. I thrive on the thrill of
					crafting captivating web experiences that seamlessly blend creativity and functionality.
					With an unwavering focus on user satisfaction, I meticulously design interfaces that leave
					a lasting impression. Whether it's building sleek landing pages or dynamic web
					applications, I am driven to create meaningful digital journeys that inspire and engage.
					Let's collaborate and bring your unique vision to life!
				</Bio>

				<Socials>
					<CustomLink href="https://github.com/varunrana0">
						<GitHubIcon />
					</CustomLink>
					<CustomLink href="https://linkedin.com/in/varunranaa">
						<LinkedinIcon />
					</CustomLink>
				</Socials>
			</InnerContainer>
		</Container>
	);
}

export default Hero;
