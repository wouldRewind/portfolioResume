import {languageOptions,GitHubRepos} from "../modules/github/displayRepos.js";

const userUrl = "https://api.github.com/users/wouldRewind";
// на API сгоняю один раз, потом хранить всё буду здесь
let repos = [];
const select = document.querySelector("select#language");
const reposContainer = document.querySelector("main.github");
// возвращает промис объектов репозиториев с несколькими нужными свойствами в resolve
const getRepos = async userUrl => { 
	// получение и обработка репозиториев
	let repos = await fetch(`${userUrl}/repos`)
	repos = await repos.json();
	// возвращаю нужные свойства
	return repos
	.map(function ({name,description,language,url})
	{
		return {
			name,
			description,
			language,
			url : url
			.replace("api.","")
			.replace("repos/","")			
		}
	})
}
// select будет на странице, пушатся будут только option'ы


const insertRepos = (container,repos,selectedLanguage) => {
	// удаляю предыдущие значения
	[...container.children].forEach(node => node.remove());
	// вставляю новые
	container.append(...GitHubRepos(selectedLanguage,repos));		
	
}


// при загрузке страницы забираю данные репозиториев и загружаб select
document.addEventListener("DOMContentLoaded",function()
{
	// по умолчанию подгружаются репозитории на JavaScript
	getRepos(userUrl)
	.then(data => {
		repos = [...data];
		// вставляю в select options
		const langOptions = languageOptions(repos);

		select.append(...langOptions);
		// ищем в option с атрибутом selected
		const lang = langOptions
		.find(({selected}) => selected)
		.value;
		// пушу
		insertRepos(reposContainer,repos,lang);
	})
})

select.addEventListener("change",event => {
	insertRepos(reposContainer,repos,event.target.value)
})

