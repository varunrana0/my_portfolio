import React from "react";
import portfolioImg from "../assets/images/my-image.jpg";
import { listStyles } from "../styles/About";
import Socials from "./Socials";

function About() {
	return (
		<div className="md:px-14 lg:py-36 xl:py-20 py-14 w-full h-full">
			<h1 className="text-white capitalize font-bold text-xl mb-10 w-fit flex items-center">
				<span>about</span>
				<span className="border-b-2 border-normal ml-2">me</span>
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
						<span className="text-skin-normal font-black">
							self taught full stack web developer.
						</span>{" "}
						i love and eager to learn new web technologies and
						trying to create new things with them. my interest in{" "}
						<span className="text-skin-normal font-black">
							web development
						</span>{" "}
						started back in 2020.
					</p>
					<p className="mt-3 text-base text-gray-300 capitalize font-medium tracking-wide mb-4">
						i have recently completed my web development internship
						with{" "}
						<a
							href="http://botmaticsolution.com"
							target={"_blank"}
							rel="noreferrer"
							className="text-skin-normal font-black relative group">
							Botmatic Soutions pvt ltd.
						</a>
						&nbsp;pune, maharashtra.
					</p>
					<div>
						<strong className="text-white capitalize tracking-wider text-sm mb-3 inline-block">
							here are some of the technologies i'm recently
							working with:
						</strong>
						<ul className="grid grid-cols-2 mt-2 list-none gap-4">
							<li className={listStyles}>
								<span className="relative text-white">
									React.js
								</span>
							</li>
							<li className={listStyles}>
								<span className="relative text-white">
									Next.js
								</span>
							</li>
							<li className={listStyles}>
								<span className="relative text-white">
									React Query
								</span>
							</li>
							<li className={listStyles}>
								<span className="relative text-white">
									Supabase
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="relative z-20">
					<img
						src={portfolioImg}
						className="rounded-xl w-72 h-full md:h-96 md:w-full block relative shadow-base"
						alt="portfolioImage"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
