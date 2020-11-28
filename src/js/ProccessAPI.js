import {GitHubRepos} from "../modules/github/displayRepos.js";
export const insertRepos = (container,repos,selectedLanguage) => {
	// удаляю предыдущие значения
	[...container.children].forEach(node => node.remove());
	// вставляю новые
	container.append(...GitHubRepos(selectedLanguage,repos));		
}
export const userUrl = "https://api.github.com/users/wouldRewind";
export const getRepos = async userUrl => { 
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
export const select = document.querySelector("select#language");
export const reposContainer = document.querySelector("main.github");