const languageOptions = (repos,optionElement = "option") => { // optionElement - может быть так же и li элементом
	let optionNames = [...new Set(repos
		.map(({language}) => language))];
	// исключаюю null из optionNames
	optionNames = optionNames.filter(language => language);
	// вовзаращаю option'ы
	return optionNames.map((language,idx) => {
		const option = document.createElement(optionElement);
		option.setAttribute("value",language);
		option.innerText = language;
		
		if(language == "JavaScript") // язык по умолчанию - JavaScript
			option.setAttribute("selected",true)
		option.setAttribute("data-wow-delay",`${idx * 0.5}s`)
		option.classList.add("wow","fadeInDown")
		return option;
	})
};

const GitHubRepos = (selectedLanguage,repos) => {

	const accordingRepos = repos.filter(({language}) => language == selectedLanguage); // оставляю репозитории, соответсвующие выбранному языку

	return accordingRepos // мэпаю репозитории в HTML отображение 
	.map(({language,url,name,description}) => {

		const repo = document.createElement("figure");
		repo.classList.add("github-repo","wow","fadeInDown"); // вешаю анимацию на блок с репозиторием
		
		const link = document.createElement("a");
		link.href = url;
		link.target ="_blank";
		link.classList.add("github-repo__link");
		link.innerText = name;

		const desc = document.createElement("p");
		desc.classList.add("github-repo__desc");
		// если опсинание на кириллице, меняю шрифт
		const regexp = /[а-яё]/ig;

		if(regexp.test(description) == true)
			desc.classList.add("cyrillic");
		
		const maxLen = 40; // максимальная длинна описания репозитория
		const breadCrumbs = "..." // если описание большое, обрезаю

		// если description пустой(null), возвращается первый операнд(false эквивалентен пустой строке), если же строка - возвращает второй операнд: огр.строку + крошки
		desc.innerText = 
		typeof description == "object" ? "Without description" // если описания нет, приходит null, а typeof null == object, спасибо Эйх
		: typeof description == "string" && description.length < maxLen ? description  
		: description.slice(0,maxLen).concat(breadCrumbs)  

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
