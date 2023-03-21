import CallToAction from "components/calltoaction/CallToAction";
import Footer from "components/footer/Footer";
import Hero from "components/Hero";
import WorkBefore from "components/work/WorkBefore";

import { Center, Main } from "./styles/main.style";

function App() {
	return (
		<Main>
			<Center className="scrollbar-hide">
				<Hero />
				<WorkBefore />
				<CallToAction />
				<Footer />
			</Center>
		</Main>
	);
}

export default App;
