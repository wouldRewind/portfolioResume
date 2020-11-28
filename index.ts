
import "@babel/polyfill";
import {particleInit} from "./src/js/particle";
import {listenGithub} from "./src/js/GitHubAPI";
import Typed from 'typed.js';
import $ from "jquery";

document.getElementById("myName").addEventListener("animationend",function(){
	var typed = new Typed('.accent', {
	typeSpeed: 1,
	strings: ['Nikita Suhanov'],
	});
})




// перед тем, как загрузятся стили
document.addEventListener("DOMContentLoaded",function()
{
	particleInit()
	listenGithub()
})



