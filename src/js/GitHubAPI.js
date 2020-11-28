import {languageOptions} from "../modules/github/displayRepos";
 import {userUrl,reposContainer,select,getRepos,insertRepos} from "./ProccessAPI";
// на API сгоняю один раз, потом хранить всё буду здесь
let repos = [];
// возвращает промис объектов репозиториев с несколькими нужными свойствами в resolve
// select будет на странице, пушатся будут только option'ы

const hangSelectListener = () => { // вешаю слушатель на select
	select.addEventListener("change",event => {
		insertRepos(reposContainer,repos,event.target.value)
	})	
}
// при загрузке страницы забираю данные репозиториев и загружаб select
const downloadOnce = () => { // один раз загружаю, потом использую
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
}

export const listenGithub = () => {
	downloadOnce()
	hangSelectListener()	
}



