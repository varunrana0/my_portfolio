import work from "../../work.json";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { AiOutlineLaptop } from "react-icons/ai";
import CustomLink from "common/customLink/CustomLink";
import "react-vertical-timeline-component/style.min.css";
import { Paragraph, SubTitle, Title } from "./timeline.style";

export default function TimelineProject() {
	return (
		<>
			<VerticalTimeline animate={true} lineColor="black">
				{work &&
					work?.map((item, index) => (
						<VerticalTimelineElement
							style={{ fontFamily: "Roobert" }}
							key={index}
							className="vertical-timeline-element--work"
							contentStyle={{
								background: "white",
								animationDelay: item?.delay,
								borderBottom: "none",
								border: "2px solid black",
								borderRadius: "30px",
								boxShadow: item?.shadow,
								marginBottom: "1rem",
								wordBreak: "break-word",
							}}
							contentArrowStyle={{
								border: "none",
							}}
							position={item?.timelinePostion}
							date={item?.date}
							iconStyle={{
								color: "white",
								background: "black",
								border: "none",
								boxShadow: "none",
							}}
							icon={<AiOutlineLaptop />}>
							<Title>{item?.position}</Title>

							<CustomLink
								href={item?.website}
								className="text-blue-500">
								{item?.name}
							</CustomLink>

							<SubTitle className="vertical-timeline-element-subtitle">
								{item?.city}, {item?.state}
							</SubTitle>

							<Paragraph>{item?.desc}</Paragraph>
						</VerticalTimelineElement>
					))}
			</VerticalTimeline>
		</>
	);
}
