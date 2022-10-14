import ThemeCircle from "./ThemeCircle";

function Colors({ setColors }) {
	return (
		<div className="sm:fixed right-10 top-20 md:space-y-3 flex md:flex-col flex-row md:space-x-0 space-x-3 justify-end md:mt-0 mt-10">
			<ThemeCircle
				title={"teal"}
				setColors={setColors}
				value={"teal"}
				bg={"bg-teal-700"}
			/>
			<ThemeCircle
				title={"emerald"}
				setColors={setColors}
				value={""}
				bg={"bg-emerald-700"}
			/>
			<ThemeCircle
				title={"pink"}
				setColors={setColors}
				value={"pink"}
				bg={"bg-pink-700"}
			/>
		</div>
	);
}

export default Colors;
