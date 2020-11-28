import "@babel/polyfill";
import { particleInit } from "./src/js/particle";
import { listenGithub } from "./src/js/GitHubAPI";
// перед тем, как загрузятся стили
document.addEventListener("DOMContentLoaded", function () {
    particleInit();
    listenGithub();
});
