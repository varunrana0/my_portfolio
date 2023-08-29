import TimelineProject from "components/experience/Experience";
import { Wrapper } from "./work.style";

function WorkBefore() {
	return (
		<Wrapper id="about">
			{/* <Container>
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
			</Container> */}

			<TimelineProject />
		</Wrapper>
	);
}

export default WorkBefore;
