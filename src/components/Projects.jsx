import React from "react";
import { projects } from "../projects";

function Projects() {
	return (
		<div className="md:px-10 lg:py-36 xl:py-20 py-14 w-full h-full" id="projects">
			<h1 className="text-emerald-100 capitalize text-xl w-fit font-semibold flex">
				<span>my</span>
				<span className="border-b-2 border-emerald-600 ml-2">workspace</span>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 inline-block ml-2">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
						/>
					</svg>
				</span>
			</h1>

			<div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full w-full">
				{projects &&
					projects.length > 0 &&
					projects.map((item, index) => {
						return (
							<div
								key={index}
								className=" w-full h-full flex flex-col p-4 rounded-3xl overflow-hidden border-2 even:bg-emerald-900/10 border-emerald-600 md:even:mt-10 md:odd:mt-20 md:odd:first-of-type:mt-0">
								<div className="sm:h-56 h-48 mb-4 overflow-hidden rounded-3xl">
									<img
										src={item.projectImg}
										alt={item.name}
										className="h-full w-full object-fit block aspect-auto"
									/>
								</div>
								<div className="mt-auto">
									<a
										href={item.url}
										target={"_blank"}
										rel="noreferrer"
										className="flex font-black tracking-wide text-sm md:text-lg text-emerald-50 capitalize motion-safe:hover:text-emerald-200 motion-safe:hover:tracking-wider transition-all duration-500 ease-in ">
										{item.name}
									</a>

									<div className="mt-4">
										<h5 className="text-[11px] tracking-wider mb-2 text-emerald-50 font-semibold capitalize py-1 px-2 bg-emerald-600 inline-block rounded-xl">
											skills i've used
										</h5>
										<div className="flex flex-wrap gap-2">
											{item.skills &&
												item.skills.length > 0 &&
												item.skills.map((item, index) => {
													return (
														<span
															key={index}
															className="border-2 border-emerald-700 py-1 px-2 text-xs rounded-xl text-emerald-100 cursor-pointer hover:bg-emerald-900/10 transition-all duration-200 tracking-wide capitalize">
															{item}
														</span>
													);
												})}
										</div>
									</div>
									<div className="mt-5">
										<h5 className="text-[11px] tracking-wider mb-1 text-emerald-50 font-semibold capitalize py-1 px-2 bg-emerald-600 inline-block rounded-xl">
											what it's about
										</h5>

										<p className="text-xs text-gray-300 capitalize font-semibold tracking-wider">
											{item.desc}
										</p>
									</div>
									<div className="mt-5">
										<div className="flex gap-3 mt-auto py-2 items-end justify-end">
											<a
												href={item.url}
												target={"_blank"}
												rel="noreferrer"
												className="bg-emerald-600 py-2 px-3 tracking-wider font-black rounded-md outline-none text-sm capitalize text-emerald-50 inline-block motion-safe:hover:bg-emerald-700 transition-colors duration-200 ease-linear">
												see live
											</a>
											<a
												href={item.sourceCode}
												target={"_blank"}
												rel="noreferrer"
												className=" py-2 px-3 rounded-md outline-none border-none tracking-wider font-black text-sm inline-block capitalize text-emerald-200 ">
												codespace
											</a>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Projects;
