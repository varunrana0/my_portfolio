import {
	Box,
	Container,
	Info,
	InnerContainer,
	Tag,
	Wrapper,
} from "./hero/hero.style";
import { AboutMeSvg } from "./icons/icons";

function Hero() {
	return (
		<Container>
			<InnerContainer>
				<AboutMeSvg />
				<Box>
					<Wrapper>
						<Tag>I</Tag>
						<Tag>'</Tag>
						<Tag>m</Tag>
					</Wrapper>
					<Wrapper>
						<Tag>V</Tag>
						<Tag>a</Tag>
						<Tag>r</Tag>
						<Tag>u</Tag>
						<Tag>n</Tag>
					</Wrapper>
				</Box>
				<Box>
					<Wrapper>
						<Tag>R</Tag>
						<Tag>a</Tag>
						<Tag>n</Tag>
						<Tag>a</Tag>
					</Wrapper>
				</Box>

				<Info>Self-Taught Jr. Software Developer</Info>
			</InnerContainer>
		</Container>
	);
}

export default Hero;
