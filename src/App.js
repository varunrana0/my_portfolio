import TechStack from "components/techstack/TechStack";
import Footer from "components/footer/Footer";
import Hero from "components/Hero";
import WorkBefore from "components/work/WorkBefore";
import { Center, Main } from "./styles/main.style";
import CallToAction from "components/calltoaction/CallToAction";

function App() {
	return (
		<Main>
			<Center className="scrollbar-hide">
				<Hero />
				<WorkBefore />
				<TechStack />
				<CallToAction />
				<Footer />
			</Center>
		</Main>
	);
}

export default App;
