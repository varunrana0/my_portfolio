import React, { useState } from "react";
import { Box, Container, Flex, InnerBoxes } from "./calltoaction.style";

const accordionData = [
	{
		title: "Section 1",
		content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
	},
	{
		title: "Section 2",
		content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
	},
	{
		title: "Section 3",
		content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
	},
];

const CallToAction = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<Container>
			<Box>
				{accordionData.map(({ title, content }) => (
					<InnerBoxes
						key={title}
						backgroundColor="#4f3dca"
						onClick={() => setIsActive(!isActive)}>
						<Flex>
							<div>{title}</div>
							<div>{isActive ? "-" : "+"}</div>
						</Flex>

						{isActive && (
							<div>
								<div>{content}</div>
							</div>
						)}
					</InnerBoxes>
				))}
				{/* <InnerBoxes
					backgroundColor="#4f3dca"
					onClick={() => setIsActive(!isActive)}>
					<Flex>
						<div>Acc 1</div>
						<div>{isActive ? "-" : "+"}</div>
					</Flex>

					{isActive && <div>{isActive ? "open" : "close"}</div>}
				</InnerBoxes> */}

				{/* <InnerBoxes
					backgroundColor="#ce2aec"
					onClick={() => setIsActive(!isActive)}>
					<Flex>
						<div>Acc 1</div>
						<div>{isActive ? "-" : "+"}</div>
					</Flex>

					{isActive && <div>{isActive ? "open" : "close"}</div>}
				</InnerBoxes> */}
				{/* <InnerBoxes
					backgroundColor="#b3edc2"
					onClick={() => setIsActive(!isActive)}>
					<Flex>
						<div>Acc 1</div>
						<div>{isActive ? "-" : "+"}</div>
					</Flex>

					{isActive && <div>{isActive ? "open" : "close"}</div>}
				</InnerBoxes>
				<InnerBoxes
					backgroundColor="#33edce"
					onClick={() => setIsActive(!isActive)}>
					<Flex>
						<div>Acc 1</div>
						<div>{isActive ? "-" : "+"}</div>
					</Flex>

					{isActive && <div>{isActive ? "open" : "close"}</div>}
				</InnerBoxes> */}
				{/* <InnerBoxes backgroundColor="#ce2aec" />
				<InnerBoxes backgroundColor="#b3edc2" />
				<InnerBoxes backgroundColor="#33edce" /> */}
			</Box>
		</Container>
	);
};

export default CallToAction;
