const skills = [
	{
		title: "Webpack",
		src: "https://cdn2.hexlet.io/assets/technologies_logos/webpack-icon-6a52434d039cb5e9227b95b6d943212c27f32ded5010c6f2a8c6dd69d4506af9.svg"
	},
	{
		title: "GIT",
		src: "https://www.ipraxa.com/common/images/git.png"
	},
	{
		title: "HTML",
		src: "http://inf.vspu.ac.ru/umm_chul/web.png"
	},
	{
		title: "NPM",
		src: "https://www.idaszak.com/assets/img/npm.png"
	},
	{
		title: "React.js",
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png"
	},
	{
		title: "JavaScript",
		src: "https://kursuswebdesign.org/wp-content/uploads/2017/01/membuka-jendela-baru-pada-browser-dengan-javascript-.png"
	},
	{
		title: "CSS3",
		src: "https://bitronica.ru/files/img/css_logo.png"
	},
	{
		title: "Node.js",
		src: "https://static.tildacdn.com/tild6363-6462-4033-b463-366433623961/8356d8a491e72b2baeae.png"
	}
]
const skillBlock = document.querySelector(".skill");


skills.forEach(skill => {

	const fig = document.createElement("figure");
	fig.classList.add("skill__item");
	
	const figCaption = document.createElement("figcaption");
	figCaption.classList.add("skill__title");
	figCaption.innerText = skill.title;

	const skillImg = document.createElement("img");
	skillImg.src = skill.src;
	if(skill.title == "JavaScript") skillImg.classList.add("js")

	fig.append(figCaption,skillImg);

	skillBlock.appendChild(fig);

})