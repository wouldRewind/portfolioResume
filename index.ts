
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

// $(function(){
// 	$("a[href^='#']").click(function(){
// 		const blockID : string = $(this).attr("href").slice(1); 
// 		console.log(blockID);
		
// 		document.getElementById(blockID).scrollIntoView({
// 			behavior:"auto",
// 			block: "start"
// 		})
// 	});
// });




