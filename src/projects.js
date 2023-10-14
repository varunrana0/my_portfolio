import colorsFinder from "./assets/projects-img/colors_finder_v2.png";
import githubUserFinder from "./assets/projects-img/find-github-profile.png";
import eliteVibes from "./assets/projects-img/elite-vibes.webp";
import pomodroTimer from "./assets/projects-img/pomodrotimer.png";
import portfolio from "./assets/projects-img/portfolio_project.webp";
import portfolioOne from "./assets/projects-img/portfolio.png";
import onboardingSteps from "./assets/projects-img/onBoarding.png";
import contentLayerImage from "./assets/projects-img/contentlayer_blog.webp";
import triviaGameQuiz from "./assets/projects-img/trivia_game.webp";

export const projects = [
	{
		name: "portfolio two",
		url: "https://varunrana.info",
		projectImg: portfolio,
		skills: ["ReactJs", "TailwindCss", "Git", "GitHub"],
		desc: "A Simple, Effective and Easier way to get hired by the top companies is by showing them your skills as well a good portolio helps more.",
		sourceCode: "https://github.com/varunrana0/my_portfolio",
	},
	{
		name: "Colors Finder",
		url: "https://color-finder-v2.vercel.app/",
		projectImg: colorsFinder,
		skills: ["ReactJs", "TailwindCss", "NodeJs", "mongoDB", "Git", "GitHub", "RestAPIs"],
		desc: "Colors Finder is a web-based tool that allows you to easily fetch the color scheme of any website by simply entering its URL. Whether you're a designer seeking inspiration or a developer looking to match a website's color scheme to your project, Colors Finder has got you covered. With the ability to fetch colors from global files or CSS files, you can get an accurate representation of any website's color palette. Try Colors Finder today and elevate your design and development workflow.",
		sourceCode: "https://github.com/varunrana0/whichColorOnSite",
	},
	{
		name: "gitHub user finder",
		url: "https://find-github-profile.netlify.app",
		projectImg: githubUserFinder,
		skills: ["ReactJs", "React-spinners", "TailwindCss", "Git", "GitHub"],
		desc: "A Simple, Effective and Easier way to find any gitHub user Repository. just enter user login name and see their repo name, when they joined github and more.",
		sourceCode: "https://github.com/varunrana0/GitHub-User-Finder",
	},
	{
		name: "Blogs with nextjs and contentlayer",
		url: "https://contentlayers-blogs.vercel.app/",
		projectImg: contentLayerImage,
		skills: ["Nextjs", "Contentlayer", "TailwindCss", "Git", "GitHub"],
		desc: "Quickstart Guide: Setting Up a Blog with Next.js and ContentLayer",
		sourceCode: "https://github.com/varunrana0/contentlayers-blogs",
	},
	{
		name: "Trivia game quiz with context api",
		url: "https://trivia-gaming-quiz-with-context-api.vercel.app/",
		projectImg: triviaGameQuiz,
		skills: ["Reactjs", "Context API", "TailwindCss", "Git", "GitHub"],
		desc: "Trivia Quiz game with react and context api.",
		sourceCode: "https://github.com/varunrana0/trivia_gaming_quiz_with_contextAPI",
	},
	{
		name: "pomodro timer app",
		url: "https://pomodrotimer.netlify.app",
		projectImg: pomodroTimer,
		skills: [
			"ReactJs",
			"React-spinners",
			"react-router",
			"firebase",
			"TailwindCss",
			"Git",
			"GitHub",
		],
		desc: "timer app with 25 minutes work schedule with a 5 minute break to get relaxed.",
		sourceCode: "https://github.com/varunrana0/pomodro-timer-app",
	},
	{
		name: "onboarding steps form",
		url: "https://onboarding-steps-form.netlify.app/",
		projectImg: onboardingSteps,
		skills: ["ReactJs", "TailwindCss", "Git", "GitHub"],
		desc: "Build workspace with this cool multi steps form with some animations.",
		sourceCode: "https://github.com/varunrana0/OnBoarding_Steps_Form",
	},
	{
		name: "portfolio one",
		url: "https://varun-rana.netlify.app",
		projectImg: portfolioOne,
		skills: ["ReactJs", "TailwindCss", "react-router", "Git", "GitHub"],
		desc: "A Simple, Effective and Easier way to get hired by the top companies is by showing them your skills as well a good portolio helps more.",
		sourceCode: "https://github.com/varunrana0/PortFolio-Website",
	},
	{
		name: "Elite Vibes Management Company",
		url: "https://elitevibes.in",
		projectImg: eliteVibes,
		skills: [
			"ReactJs",
			"React-spinners",
			"TailwindCss",
			"NodeJs",
			"react-router",
			"firebase",
			"mongoDB",
			"Express.js",
			"TailwindCss",
			"Git",
			"GitHub",
		],
		desc: "EliteVibes Is One Of The Most Premier Entertainment Company In Pune That Covers All Aspects Of Entertainment Such As Gaming, Live Concerts, Networking Events, Private Parties And Holistic Festival Management. Get In Touch With Us For More Details.",
		sourceCode: "https://github.com/varunrana0/Ellite-Vibes-React",
	},
];

export const technologies = {
	"Tech I Know": [
		"chakra ui",
		"CI/CD",
		"codux",
		"css",
		"formik",
		"git",
		"github",
		"html",
		"htmx",
		"javascript",
		"jest",
		"material ui",
		"mongoDB",
		"next.js",
		"node.js",
		"playwright",
		"react hook form",
		"react.js",
		"react query",
		"react table",
		"styled components",
		"supabase",
		"tailwindcss",
		"typescript",
		"upstash",
		"yup",
		"zod",
	],
	"Tech I'm Currently Working With": [
		"axios",
		"chakra ui",
		"formik",
		"next.js",
		"react.js",
		"react query",
		"react table",
		"react hook form",
		"supabase",
		"typescript",
		"upstash",
		"yup",
	],
	"Learning Now": ["Htmx", "Bun", "Go", "trpc", "aws"],
};
