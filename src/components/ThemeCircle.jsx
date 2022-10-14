function ThemeCircle({ bg, setColors, value, title }) {
	return (
		<div
			className={`h-8 md:w-8 w-14 rounded-full ${bg} cursor-pointer`}
			value={value}
			title={title}
			onClick={() => {
				setColors(value);
			}}></div>
	);
}

export default ThemeCircle;
