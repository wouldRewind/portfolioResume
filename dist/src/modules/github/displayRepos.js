var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var languageOptions = function (repos) {
    var optionNames = __spreadArrays(new Set(repos
        .map(function (_a) {
        var language = _a.language;
        return language;
    })));
    // исключаюю null из optionNames
    optionNames = optionNames.filter(function (language) { return language; });
    // вовзаращаю option'ы
    return optionNames.map(function (language) {
        var option = document.createElement("option");
        option.value = language;
        option.innerText = language;
        if (language == "JavaScript") // язык по умолчанию - JavaScript
            option.setAttribute("selected", true);
        return option;
    });
    // пушу их в селект
    select.append.apply(select, options);
    // возвращаю select
};
var GitHubRepos = function (selectedLanguage, repos) {
    // нахожу подходящие репы
    var accordingRepos = repos.filter(function (_a) {
        var language = _a.language;
        return language == selectedLanguage;
    });
    return accordingRepos
        .map(function (_a) {
        var language = _a.language, url = _a.url, name = _a.name, description = _a.description;
        var repo = document.createElement("figure");
        repo.classList.add("github-repo", "wow", "fadeInDown");
        var link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.classList.add("github-repo__link");
        link.innerText = name;
        var desc = document.createElement("p");
        desc.classList.add("github-repo__desc");
        // если опсинание на кириллице, меняею шрифт
        var regexp = /[а-яё]/ig;
        if (regexp.test(description) == true)
            desc.classList.add("cyrillic");
        var maxLen = 40; // максимальная длинна описания репозитория
        var breadCrumbs = "..."; // если описание большое, обрезаю
        // если description пустой(null), возвращается первый операнд(false эквивалентен пустой строке), если же строка - возвращает второй операнд: огр.строку + крошки
        desc.innerText =
            typeof description == null ? description
                : typeof description == "string" && description.length < maxLen ? description
                    : typeof description == "string" && description.slice(0, maxLen).concat(breadCrumbs);
        var progLanguage = document.createElement("p");
        progLanguage.classList.add("github-repo__language");
        var marker = document.createElement("span");
        marker.classList.add("github-repo__marker");
        progLanguage.append(marker, language);
        repo.append(link, desc, progLanguage);
        return repo;
    });
};
export { languageOptions, GitHubRepos };
