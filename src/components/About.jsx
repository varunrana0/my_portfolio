import React from "react";
import portfolioImg from "../assets/images/my-image.jpg";
import Socials from "./Socials";

function About() {
	return (
		<div className="md:px-14 lg:py-36 xl:py-20 py-14 w-full h-full">
			<h1 className="text-emerald-100 capitalize font-bold text-xl mb-10 w-fit flex items-center">
				<span>about</span>
				<span className="border-b-2 border-emerald-600 ml-2">me</span>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4 inline-block ml-2">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
						/>
					</svg>
				</span>
			</h1>

			<div className="grid lg:grid-cols-2 gap-10 lg:gap-4 h-full w-full place-items-center">
				<div className="h-full">
					<p className="text-base text-gray-300 capitalize font-medium tracking-wide mb-4">
						hello!, my name is varun rana and i am a{" "}
						<span className="text-emerald-600 font-black">
							self taught full stack web developer.
						</span>{" "}
						i love and eager to learn new web technologies and trying to create new
						things with them. my interest in{" "}
						<span className="text-emerald-600 font-black">web development</span>{" "}
						started back in 2020.
					</p>
					<p className="mt-3 text-base text-gray-300 capitalize font-medium tracking-wide mb-4">
						i recently completed my internship period of 6 months with{" "}
						<a
							href="http://botmaticsolution.com"
							target={"_blank"}
							rel="noreferrer"
							className="text-emerald-600 font-black relative group">
							Botmatic Soutions pvt ltd.
							<span className="absolute bottom-0 left-0 bg-emerald-600 h-[1px] w-0  group-hover:w-full transition-all duration-300 ease-in"></span>
						</a>
						&nbsp;pune, maharashtra.
					</p>
					<div>
						<strong className="text-emerald-100 capitalize tracking-wider text-sm mb-3 inline-block">
							here are some of the recent technologies i'm working with:
						</strong>
						<ul className="grid grid-cols-2 mt-2 list-none gap-4">
							<li
								className="w-fit transition-all duration-500 ease-in text-sm capitalize  font-semibold tracking-wider
												before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-600 relative inline-block">
								<span className="relative text-white">javascript</span>
							</li>
							<li
								className="w-fit transition-all duration-500 ease-in text-sm capitalize font-semibold tracking-wider
												before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-600 relative inline-block">
								<span className="relative text-white">React</span>
							</li>
							<li
								className="w-fit transition-all duration-500 ease-in text-sm capitalize font-semibold tracking-wider
												before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-600 relative inline-block">
								<span className="relative text-white">node.js</span>
							</li>
							<li
								className="w-fit transition-all duration-500 ease-in text-sm capitalize font-semibold tracking-wider
												before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-600 relative inline-block">
								<span className="relative text-white">tailwindcss</span>
							</li>
						</ul>
					</div>
					<div className="mt-10 w-fit">
						<h2 className="mb-4 capitalize text-gray-200 font-black tracking-wide text-sm">
							find me here
						</h2>
						<Socials />
					</div>
				</div>
				<div className="relative z-20">
					{/* <div className="absolute rounded-xl border-2 border-emerald-600 h-full w-full -top-3 -left-3 -z-10"></div> */}
					<img
						src={portfolioImg}
						className="rounded-xl w-72 h-full md:h-96 md:w-full block z-10 relative -translate-x-1 -translate-y-1"
						alt="portfolioImage"
					/>
					<div className="absolute rounded-xl bg-emerald-600/40 h-full w-full top-1 left-1 -z-10"></div>
				</div>
			</div>
		</div>
	);
}

export default About;
