export const data = {
	firstName: "Mehdi",
	lastName: "Sepahvand",
	headline: "Software Engineer, Professional Engineer",
	profilePic: "profilepic.png",
	website: "http://www.mehdisep.com",
	github: "http://github.com/medsep",
	linkedin: "https://www.linkedin.com/in/sylvia-pap",
	blog: "https://dev.to/medsep",
	stackOverflow: "https://stackoverflow.com/users/12420157/med-sep",
	leetCode: "https://leetcode.com/medsep/",
};

const githubRepos = {
	racoon: {
		frontend: "https://github.com/sylviapap/racoon-frontend",
		backend: "https://github.com/sylviapap/racoon-backend",
	},
	socialApe: "https://github.com/medsep/Social-Media-App",
	talkr: "https://github.com/sylviapap/TalkR",
	subscription: "https://github.com/sylviapap/client-subscription-app",
	whack: "https://github.com/sylviapap/whack-a-virus",
	chatbot: "https://github.com/sylviapap/chatbot",
	cli: "https://github.com/sylviapap/ruby-cli-app",
	python: "https://github.com/sylviapap/python-project",
};

const liveSiteURLs = {
	racoon: "https://racoon.digital/",
	twitterClone: "https://sylvia-twitter.netlify.app/",
	talkr: "https://translation-chat-app.herokuapp.com/",
	subscription: "https://subscribr.netlify.app/",
	whack: "https://sylviapap.github.io/whack-a-virus/",
	chatbot: "https://sylviapap.github.io/chatbot/",
};

const blogURLs = {
	
};

export const projects = [
	{
		title: "Social Media App",
		imageURL: "twitter-clone.jpg",
		websiteURL: liveSiteURLs.socialApe,
		description:
			"Clone project to answer application question 'Tell your life story in Tweets'",
		technology: "React • JavaScript • CSS • HTML • Material UI",
		githubURL: githubRepos.socialApe,
	}
];

export const skills = [
	{
		name: "Python",
		href: githubRepos.python,
	},
	{
		name: "Java",
		href: githubRepos.Java,
	},
	{
		name: "JavaScript",
		href: githubRepos.chatbot,
	},
	{
		name: ".Net",
		href: githubRepos.CSharp,
	},
	{
		name: "Rails",
		href: githubRepos.talkr,
	},
	{
		name: "React",
		href: githubRepos.racoon.frontend,
	},
	{
		name: "CSS",
		href: githubRepos.whack,
	},
	{
		name: "HTML",
		href: githubRepos.twitterClone,
	},
	{
		name: "Test Driven Development",
		href: githubRepos.racoon.backend,
	},
	{
		name: "Data Structures & Algorithms",
		href: data.leetCode,
	},

	{
		name: "AWS",
		href: githubRepos.AWS,
	},
];

export const contactItems = [
	{
		href: data.linkedin,
		icon: "fa fa-linkedin",
		text: "LinkedIn",
	},
	{
		href: data.github,
		icon: "fa fa-github",
		text: "GitHub",
	},
	{
		href: data.blog,
		icon: "fab fa-dev",
		text: "Blog",
	},
		{
		href: data.stackOverflow,
		icon: "fab fa-stack-overflow",
		text: "Stack Overflow",
	},
];

export const blogPosts = [
	{
		href: blogURLs.personalSite,
		title: "Blog posts to appear here",
	}
];
