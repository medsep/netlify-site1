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
	
	socialApe: "https://github.com/medsep/Social-network-project",
	
};

const liveSiteURLs = {
	
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
		
	},
	{
		name: "Java",
		
	},
	{
		name: "JavaScript",
		
	},
	{
		name: ".Net",
		
	},
	{
		name: "Rails",
		
	},
	{
		name: "React",
		 
	},
	{
		name: "CSS",
		 
	},
	{
		name: "HTML",
		
	},
	{
		name: "Test Driven Development",
		
	},
	{
		name: "Data Structures & Algorithms",
		
	},

	{
		name: "AWS",
		
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
