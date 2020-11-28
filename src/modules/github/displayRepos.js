const languageOptions = repos => {
	let optionNames = [...new Set(repos
		.map(({language}) => language))];
	// исключаюю null из optionNames
	optionNames = optionNames.filter(language => language);
	// вовзаращаю option'ы
	return optionNames.map(language => {

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
};

const GitHubRepos = (selectedLanguage,repos) => {
	// нахожу подходящие репы
	const accordingRepos = repos.filter(({language}) => language == selectedLanguage);
	return accordingRepos
	.map(({language,url,name,description}) => {

		const repo = document.createElement("figure");
		repo.classList.add("github-repo","wow","fadeInDown");
		
		const link = document.createElement("a");
		link.href = url;
		link.target ="_blank";
		link.classList.add("github-repo__link");
		link.innerText = name;

		const desc = document.createElement("p");
		desc.classList.add("github-repo__desc");
		// если опсинание на кириллице, меняею шрифт
		const regexp = /[а-яё]/ig;

		if(regexp.test(description) == true)
			desc.classList.add("cyrillic");
		
		const maxLen = 40; // максимальная длинна описания репозитория
		const breadCrumbs = "..." // если описание большое, обрезаю

		// если description пустой(null), возвращается первый операнд(false эквивалентен пустой строке), если же строка - возвращает второй операнд: огр.строку + крошки
		desc.innerText = 
		typeof description == null ? description
		: typeof description == "string" && description.length < maxLen ? description  
		: typeof description == "string" &&  description.slice(0,maxLen).concat(breadCrumbs)  

		const progLanguage = document.createElement("p");
		progLanguage.classList.add("github-repo__language");
		const marker = document.createElement("span");
		marker.classList.add("github-repo__marker");
		progLanguage.append(marker,language);

		repo.append(link,desc,progLanguage);
		return repo;
	})
}

export {languageOptions,GitHubRepos}
