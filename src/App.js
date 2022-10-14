import { useState } from "react";
import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Colors from "./components/Colors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkBefore from "./components/WorkBefore";

function App() {
	const [colors, setColors] = useState("");

	const toggleTheme =
		colors === "teal" ? "theme-teal" : colors === "pink" ? "theme-pink" : "";

	return (
		<div className={toggleTheme}>
			<div className="App bg-[#23252f] min-h-screen font-VeryLight px-4">
				<Header />
				<Colors setColors={setColors} />
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
		</div>
	);
}

export default App;
