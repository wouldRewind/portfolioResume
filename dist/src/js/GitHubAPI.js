var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { languageOptions } from "../modules/github/displayRepos";
import { userUrl, reposContainer, select, getRepos, insertRepos } from "./ProccessAPI";
// на API сгоняю один раз, потом хранить всё буду здесь
var repos = [];
// возвращает промис объектов репозиториев с несколькими нужными свойствами в resolve
// select будет на странице, пушатся будут только option'ы
var hangSelectListener = function () {
    select.addEventListener("change", function (event) {
        insertRepos(reposContainer, repos, event.target.value);
    });
};
// при загрузке страницы забираю данные репозиториев и загружаб select
var downloadOnce = function () {
    // по умолчанию подгружаются репозитории на JavaScript
    getRepos(userUrl)
        .then(function (data) {
        repos = __spreadArrays(data);
        // вставляю в select options
        var langOptions = languageOptions(repos);
        select.append.apply(select, langOptions);
        // ищем в option с атрибутом selected
        var lang = langOptions
            .find(function (_a) {
            var selected = _a.selected;
            return selected;
        })
            .value;
        // пушу
        insertRepos(reposContainer, repos, lang);
    });
};
export var listenGithub = function () {
    downloadOnce();
    hangSelectListener();
};
