import React from "react";

function Footer() {
	return (
		<div className="md:px-10 w-full h-full">
			<div className="border-t-2 border-emerald-800/40 py-4 md:p-4 ">
				<div className="flex justify-between items-center gap-2">
					<h2 className="text-sm md:text-lg  font-semibold text-emerald-600 capitalize">
						varun rana
					</h2>
					<p className="text-sm md:text-lg text-emerald-600 capitalize font-semibold tracking-wide">
						copyright ©️ all right reserved.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
