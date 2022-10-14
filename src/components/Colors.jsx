import ThemeCircle from "./ThemeCircle";

function Colors({ setColors }) {
	return (
		<div className="sm:fixed sticky top-0 p-4 sm:py-0 sm:bg-transparent bg-inherit w-fit z-50 rounded-full sm:right-10 sm:top-20 md:space-y-3 flex md:flex-col flex-row md:space-x-0 space-x-3 justify-end md:mt-0 mt-2">
			<ThemeCircle
				title={"teal"}
				setColors={setColors}
				value={"teal"}
				bg={"bg-teal-400"}
			/>
			<ThemeCircle
				title={"emerald"}
				setColors={setColors}
				value={""}
				bg={"bg-emerald-600"}
			/>
			<ThemeCircle
				title={"pink"}
				setColors={setColors}
				value={"pink"}
				bg={"bg-pink-600"}
			/>
		</div>
	);
}

export default Colors;
