import TimelineProject from "components/Projects/TimelineProjects";
// import { useEffect, useState } from "react";
import {
	AnimatedFlex,
	Container,
	Experience,
	Title,
	Wrapper,
} from "./work.style";

function WorkBefore() {
	// const [animate, setAnimate] = useState(false);

	// useEffect(() => {
	// 	function handleScroll() {
	// 		if (window.scrollY >= 500) {
	// 			// Change this value to the minimum scroll position at which you want the animation to start
	// 			setAnimate(true);
	// 		} else {
	// 			setAnimate(false);
	// 		}
	// 	}
	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	return (
		<Wrapper id="about">
			<Container>
				<AnimatedFlex>
					<Experience>
						<Title>experience</Title>
						<Title className="stroke-text22">experience</Title>
					</Experience>
					<Experience>
						<Title>experience</Title>
						<Title className="stroke-text22">experience</Title>
					</Experience>
				</AnimatedFlex>
			</Container>

			<TimelineProject />
		</Wrapper>
	);
}

export default WorkBefore;
