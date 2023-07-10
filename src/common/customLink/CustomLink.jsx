import { Link } from "./link.style";

const CustomLink = ({
	href,
	children,
	className,
	title,
	bg,
	borderBottom,
	justifyCenter,
	width,
}) => {
	return (
		<Link
			title={title}
			href={href}
			className={className}
			justifyCenter={justifyCenter}
			borderBottom={borderBottom}
			width={width}
			bg={bg}
			target={href && href.startsWith("#") ? "_self" : "_blank"}
			rel="noreferrer"
		>
			{children}
		</Link>
	);
};

export default CustomLink;
