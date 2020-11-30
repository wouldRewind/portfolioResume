
import "@babel/polyfill";
import {particleInit} from "./src/js/particle";
import {listenGithub} from "./src/js/GitHubAPI";
import {insertMenu,handleMenu} from "./src/js/menu";
import WOW from "wow.js";



// перед тем, как загрузятся стили
document.addEventListener("DOMContentLoaded",function()
{
	new WOW().init() // инициализирую объект анимации
	particleInit()
	listenGithub()
	insertMenu()
	handleMenu()
})




