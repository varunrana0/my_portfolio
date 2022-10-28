function ThemeCircle({ bg, setColors, value, title }) {
	return (
		<div
			className={`h-8 w-8 rounded-full ${bg} cursor-pointer`}
			value={value}
			title={title}
			onClick={() => {
				setColors(value);
			}}></div>
	);
}

export default ThemeCircle;
