import CustomLink from "common/customLink/CustomLink";
import {
	GitHubIcon,
	InstagramIcon,
	LinkedinIcon,
	TwitterIcon,
} from "components/icons/icons";
import { Container, Email, Flex, Phone, Socials } from "./footer.style";

const Footer = () => {
	return (
		<Container>
			<Flex>
				<Email>
					<a href="mailto:varunrana829@gmail.com">
						varunrana829@gmail.com
					</a>
				</Email>
				<Phone>
					<a href="tel:+917827304056">7827304056</a>
				</Phone>
			</Flex>
			<Socials>
				<CustomLink
					href="https://github.com/varun-raana"
					justifyCenter
					width="true"
					bg="#facc15">
					<GitHubIcon />
				</CustomLink>

				<CustomLink
					href="https://linkedin.com/in/varunranaa"
					justifyCenter
					width="true"
					bg="#f87171">
					<LinkedinIcon />
				</CustomLink>

				<CustomLink
					href="https://twitter.com/Varun_Ranaa"
					justifyCenter
					width="true"
					bg="#4ade80">
					<TwitterIcon />
				</CustomLink>

				<CustomLink
					href="https://www.instagram.com/varun8048/"
					justifyCenter
					width="true"
					bg="#fb923c">
					<InstagramIcon />
				</CustomLink>
			</Socials>
		</Container>
	);
};

export default Footer;
