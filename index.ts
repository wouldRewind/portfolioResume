
import "@babel/polyfill";
import {particleInit} from "./src/js/particle";
import {listenGithub} from "./src/js/GitHubAPI";
import {insertMenu,handleMenu} from "./src/js/menu";
import {hangAnimation} from "./src/js/anim";

// перед тем, как загрузятся стили
document.addEventListener("DOMContentLoaded",function()
{
	
	particleInit() // анимированный фон
	listenGithub() // подгрузка репозиториев
	insertMenu()
	handleMenu()
	hangAnimation(); // анимация на блоки
})





