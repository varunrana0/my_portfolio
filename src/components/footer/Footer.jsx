import { Container, Copyright } from "./footer.style";

const Footer = () => {
	return (
		<Container>
			<Copyright>@{new Date().getFullYear()} varunrana.info</Copyright>
		</Container>
	);
};

export default Footer;
