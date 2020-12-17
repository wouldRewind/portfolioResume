
import "@babel/polyfill";
import {particleInit} from "./src/js/particle";
import {listenGithub} from "./src/js/GitHubAPI";
import {insertMenu,handleMenu} from "./src/js/menu";

// перед тем, как загрузятся стили
document.addEventListener("DOMContentLoaded",function()
{
	console.log(1);
	
	// particleInit()
	listenGithub()
	insertMenu()
	handleMenu()
})





