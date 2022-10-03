import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkBefore from "./components/WorkBefore";

function App() {
	return (
		<div className="App bg-[#23252f] min-h-screen font-VeryLight px-4">
			<Header />
			<div className="max-w-7xl mx-auto w-full">
				<Hero />
				<About />
				<Skills />
				<WorkBefore />
				<Projects />
				<CallToAction />
				<Footer />
			</div>
		</div>
	);
}

export default App;
