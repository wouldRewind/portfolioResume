
import "@babel/polyfill";
import {particleInit} from "./src/js/particle";
import {listenGithub} from "./src/js/GitHubAPI";
import {insertMenu,handleMenu} from "./src/js/menu";
import $ from "jquery";


// перед тем, как загрузятся стили
document.addEventListener("DOMContentLoaded",function()
{

	particleInit()
	listenGithub()
	insertMenu()
	handleMenu()
})

$(function(){
	$("a[href^='#']").click(function(){
		const blockID : string = $(this).attr("href"); 
		console.log(blockID);
		
		// document.querySelector(blockID).scrollIntoView({
		// 	behavior:"smooth",
		// 	block: "start"
		// })
	});
});




