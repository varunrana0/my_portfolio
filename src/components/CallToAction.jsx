import React from "react";

function CallToAction() {
	return (
		<div className="md:px-14 py-0 md:pt-10 pb-4 h-full mt-20">
			<div className="flex md:flex-row flex-col gap-3 justify-between md:items-end w-full h-full">
				<h1 className="w-fit">
					<span className="block capitalize tracking-wider text-5xl text-emerald-50 font-semibold">
						let's
					</span>
					<span className="block capitalize tracking-wider text-xl text-emerald-500 font-black">
						talk
					</span>
				</h1>

				<form className="w-full md:w-fit">
					<div className="flex md:flex-row flex-col gap-2 md:w-fit w-full">
						<input
							type="email"
							placeholder="xyz@gmail.com"
							className="py-2 px-4 text-sm rounded-md text-emerald-200 font-semibold tracking-wider bg-transparent border border-emerald-400 outline-none focus:outline-none"
							required
						/>
						<button
							type="button"
							className="py-2 px-4 text-xs rounded-md font-semibold tracking-wide bg-transparent border border-emerald-200 text-emerald-200 uppercase motion-safe:hover:bg-emerald-900/20 transition-all duration-200 ease-out">
							let's talk
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CallToAction;
