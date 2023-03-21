import "../styles/hero.css";

const GlitchText = ({ children }) => {
	return (
		<h1 className=" font-black bg-none " data-text={children}>
			{children}
		</h1>
	);
};

export default GlitchText;
