import React from "react";

function CallToAction() {
	return (
		<div className="md:px-14 py-0 md:pt-10 pb-4 h-full mt-20">
			<div className="flex md:flex-row flex-col gap-3 justify-between md:items-end w-full h-full">
				<h1 className="w-fit">
					<span className="block capitalize tracking-wider text-5xl text-white font-black">
						let's
					</span>
					<span className="block capitalize tracking-wider text-xl text-skin-normal font-black">
						talk
					</span>
				</h1>

				<form className="w-full md:w-fit">
					<div className="flex md:flex-row flex-col gap-2 md:w-fit w-full">
						<input
							type="email"
							placeholder="xyz@gmail.com"
							className="py-2 px-4 text-sm rounded-md text-skin-light font-semibold tracking-wider bg-transparent border border-normal outline-none focus:outline-none placeholder:text-gray-100"
							required
						/>
						<button
							type="button"
							className="py-2 px-4 text-xs rounded-md font-semibold tracking-wide border-none text-skin-light uppercase bg-skin-normal text-white">
							let's talk
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CallToAction;
