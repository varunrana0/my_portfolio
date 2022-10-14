import html from "../assets/logo/html.svg";
import css from "../assets/logo/css.svg";
import tailwindcss from "../assets/logo/tailwind-css.svg";
import javascript from "../assets/logo/javascript-programming-language.svg";
import nodejs from "../assets/logo/node-js.svg";
import reactjs from "../assets/logo/react-js.svg";
import mongoDB from "../assets/logo/mongodb-original-wordmark.svg";
import expressJs from "../assets/logo/express-original-wordmark.svg";
import git from "../assets/logo/git.svg";
import gitHub from "../assets/logo/github-original-wordmark.svg";

const logos = [
	html,
	css,
	javascript,
	tailwindcss,
	nodejs,
	reactjs,
	mongoDB,
	expressJs,
	git,
	gitHub,
];

function Skills() {
	return (
		<div className="md:px-10 lg:py-36 xl:py-20 py-14 w-full h-full">
			<div className="grid lg:grid-cols-2 md:p-10 md:bg-black/5 rounded-xl">
				<h1 className="text-skin-extraLight capitalize text-3xl md:text-5xl w-fit">
					<span className="text-xl md:text-3xl block md:mr-0 mr-2">
						technologies
					</span>
					<span className="text-4xl md:text-6xl block font-black">i learned!</span>
				</h1>
				<div className="w-full rounded-xl md:p-10 py-10 mt-5 lg:mt-0 md:bg-black/5 ">
					<div className="grid md:grid-cols-4 grid-cols-3 gap-5 place-items-center max-w-sm flex-none">
						{logos &&
							logos.length > 0 &&
							logos.map((item) => (
								<img
									key={item}
									src={item}
									alt="logos"
									className="w-12 group flex-none h-full cursor-pointer grayscale hover:grayscale-0 transition-colors duration-300 ease-out"
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
