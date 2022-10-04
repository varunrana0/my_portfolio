import colorsFinder from "./assets/projects-img/findcolors.info_.png";
import githubUserFinder from "./assets/projects-img/find-github-profile.png";
import eliteVibes from "./assets/projects-img/elite-vibes.png";
import pomodroTimer from "./assets/projects-img/pomodrotimer.png";
import portfolio from "./assets/projects-img/portfolio_project.png";

export const projects = [
	{
		name: "Colors-Finder",
		url: "http://findcolors.info",
		projectImg: colorsFinder,
		skills: [
			"ReactJs",
			"TailwindCss",
			"NodeJs",
			"mongoDB",
			"Git",
			"GitHub",
			"RestAPIs",
		],
		desc:
			"you liked colors on a website but, it's time consuming and cumbersome to fiddle around with source code, inspecting elements just to get colors. Here we come into picture, jsut enter website URL and we go and grab all colors using by that website.",
		sourceCode: "https://github.com/varun-raana/whichColorOnSite",
	},
	{
		name: "git-hub-user-finder",
		url: "https://find-github-profile.netlify.app",
		projectImg: githubUserFinder,
		skills: ["ReactJs", "React-spinners", "TailwindCss", "Git", "GitHub"],
		desc:
			"A Simple, Effective and Easier way to find any gitHub user Repository. just enter user login name and see their repo name, when they joined github and more.",
		sourceCode: "https://github.com/varun-raana/GitHub-User-Finder",
	},
	{
		name: "Elite-Vibes Management Company",
		url: "https://elite-vibes.herokuapp.com",
		projectImg: eliteVibes,
		skills: [
			"ReactJs",
			"React-spinners",
			"TailwindCss",
			"NodeJs",
			"firebase",
			"mongoDB",
			"Express.js",
			"TailwindCss",
			"Git",
			"GitHub",
		],
		desc:
			"EliteVibes Is One Of The Most Premier Entertainment Company In Pune That Covers All Aspects Of Entertainment Such As Gaming, Live Concerts, Networking Events, Private Parties And Holistic Festival Management. Get In Touch With Us For More Details.",
		sourceCode: "https://github.com/varun-raana/Ellite-Vibes-React",
	},
	{
		name: "pomodro timer app",
		url: "https://pomodrotimer.netlify.app",
		projectImg: pomodroTimer,
		skills: ["ReactJs", "React-spinners", "TailwindCss", "Git", "GitHub"],
		desc:
			"timer app with 25 minutes work schedule with a 5 minute break to get relaxed.",
		sourceCode: "https://github.com/varun-raana/pomodro-timer-app",
	},
	{
		name: "personal portfolio",
		url: "https://varun-rana-portfolio.netlify.app",
		projectImg: portfolio,
		skills: ["ReactJs", "TailwindCss", "Git", "GitHub"],
		desc:
			"A Simple, Effective and Easier way to get hired by the top companies is by showing them your skills as well a good portolio helps more.",
		sourceCode: "https://github.com/varun-raana/my_portfolio",
	},
];
