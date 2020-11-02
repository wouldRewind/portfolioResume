const userUrl = "https://api.github.com/users/wouldRewind";
// возвращает объектов репозиториев с несколькими нужными свойствами
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
// возвращает тег select с опциями выбора языка программирования
const languageSelect = repos => {
	let optionNames = [...new Set(repos.map(({language}) => language))];
	// исключаюю null из optionNames
	optionNames = optionNames.filter(language => language);
	// создаю select	
	const select = document.createElement("select");
	select.name = "language";
	select.id = "language";
	// составляю option'ы
	const options =  optionNames.map(language => {

		const option = document.createElement("option");
		option.value = language;
		option.innerText = language;
		
		if(language == "JavaScript") // язык по умолчанию - JavaScript
			option.setAttribute("selected",true)
		return option;
	})
	// пушу их в селект
	select.append(...options);
	// возвращаю select
	return select;
};
// вставляет select в заданный контейнер
const insertSelect = (select,container) => {
	container.appendChild(select);
}
// возвращает массив HTML-блоков - все репозитории для заданного языка language
const repoList = (repos,language) => {

}

function handleRepos(repos)
{
	// вставляю select на страницу
	const selectWrap = document.querySelector(".select-wrap");
	const select = languageSelect(repos);
	insertSelect(select,selectWrap);
	
	
}





getRepos(userUrl)
.then(handleRepos);



