function Hero() {
	return (
		<div className="container mx-auto md:px-10 lg:py-36 xl:py-28 py-24 w-full h-full">
			<h2 className="text-base text-emerald-200 tracking-wide">
				<span className="capitalize tracking-wide">hi,</span> 👋 my name is
			</h2>

			<h1 className="w-fit text-[40px] text-emerald-50 md:text-7xl md:mb-5 mb-3">
				<span className="block capitalize font-black mb-1 tracking-wide">
					varun rana.
				</span>
			</h1>

			<p className="mb-10 text-4xl md:text-8xl font-black text-emerald-700/60">
				I build <span className="text-emerald-300">&</span> design web Interfaces.
			</p>

			{/* <p className="max-w-md text-emerald-50 text-sm md:text-base capitalize tracking-wide font-medium">
				i'm a{" "}
				<span className="inline-block capitalize font-bold text-emerald-400">
					self taught web developer.
				</span>{" "}
				A 24 Year Old Full Stack Web Developer, I Write Code. I've Made web
				Applications And Mobile Apps.
			</p> */}

			<a
				href="/"
				className="py-3 px-4 border border-emerald-600 rounded capitalize drop-shadow-md shadow-inherit text-white font-black text-sm motion-safe:hover:scale-110 transition-all duration-300 ease-in-out">
				check my projects below!
			</a>
		</div>
	);
}

export default Hero;
