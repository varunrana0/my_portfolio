import Logo from "../assets/images/my-image.jpg";
import resume from "../assets/resume.pdf";

function Header() {
	return (
		<div className="py-5 lg:px-24 md:px-14 px-2 lg:max-w-screen-2xl mx-auto w-full flex items-center justify-between">
			<a
				href="/"
				className="inline-flex w-fit items-center text-white font-semibold capitalize tracking-wide">
				<img
					src={Logo}
					className="h-10 w-10 object-cover rounded-full mr-2 md:mr-4"
					alt="logo"
				/>{" "}
				varun rana
			</a>
			<a
				href={resume}
				rel="noreferrer"
				target={"_blank"}
				className="px-2 inline-flex items-center justify-center py-1 rounded text-white font-semibold tracking-wider hover:bg-skin-base group">
				<span className="inline-block">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 mr-2 group-hover:translate-x-1 transition-all duration-200 ease-in inline-block">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</span>
				<span>Resume</span>
			</a>
		</div>
	);
}

export default Header;
