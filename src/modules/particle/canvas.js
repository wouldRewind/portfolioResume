let canvas = document.createElement("canvas"),
ctx = canvas.getContext("2d"),
w = canvas.width = innerWidth,
h = canvas.height = innerHeight;


const cvsContainer = document.querySelector(".no-pad");
cvsContainer.appendChild(canvas);

// cvsContainer.onresize = function()
// {
// 	w = canvas.width = cvsContainer.offsetWidth;
// 	h = canvas.height = cvsContainer.offsetHeight;
// }

export {canvas,ctx,w,h};
