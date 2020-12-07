import {languageOptions} from "../modules/github/displayRepos";
 import {userUrl,reposContainer,select,getRepos,insertRepos} from "./ProccessAPI";
// на API сгоняю один раз, потом хранить всё буду здесь
let repos = [];
// возвращает промис объектов репозиториев с несколькими нужными свойствами в resolve
// select будет на странице, пушатся будут только option'ы


const hangSelectListener = (select,options) => { // вешаю слушатель на select

	select.append(...options);
	options.forEach(option => {
		option.addEventListener("click",e => {
			if(!option.getAttribute("selected")){ // если опция уже выбрана, ресурсозатратно повторно перезагружать репозитории (вызывать insertRepos)

				const selectedOption = options.find(opt => opt.getAttribute("selected")); // получаю выбранную опцию
				selectedOption.removeAttribute("selected") // теперь она не выбрана

				option.setAttribute("selected",true); // теперь она выбрана
				insertRepos(reposContainer,repos,option.getAttribute("value")); // показываю соответствующие репозитории
			} 

		})
	})
}
// при загрузке страницы забираю данные репозиториев и загружаб select
const downloadOnce = () => { // один раз загружаю, потом использую
	// по умолчанию подгружаются репозитории на JavaScript
	getRepos(userUrl)
	.then(data => {
		repos = [...data];
		// вставляю в select options

		const langOptions = languageOptions(repos,"li");
		hangSelectListener(select,langOptions)
		// ищем в option с атрибутом selected
		const lang = langOptions
		.find(opt => opt.getAttribute("selected"))
		.getAttribute("value");
		// пушу
		insertRepos(reposContainer,repos,lang);
	})
}

export const listenGithub = () => {
	downloadOnce()
}



