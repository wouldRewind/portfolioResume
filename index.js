import {particleInit} from "./src/js/particle.js";
import {listenGithub} from "./src/js/GitHubAPI.js";

// перед тем, как загрузятся стили
document.addEventListener("DOMContentLoaded",function()
{
	particleInit()
	listenGithub()
})



