import Filterizr from 'filterizr';
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
	const filterizr : object =  new Filterizr(".filter-container")
})
// // document.addEventListener("load",function(){
// 	const filterizr : object =  new Filterizr(".gallery-container")
// })



