(()=>{"use strict";let t=document.createElement("canvas"),e=t.getContext("2d"),n=t.width=innerWidth,i=t.height=innerHeight;document.querySelector(".no-pad").appendChild(t);const a=[],o={bgColor:"#1F1F20",color:"#F1D5D7",count:innerWidth>1e3?40:innerWidth>600?20:15,maxVelocity:1,lineLength:150,maxRadius:5,minRadius:1};class r{constructor(){const{minRadius:t,maxRadius:e,maxVelocity:a}=o;this.animDirection=1,this.radius=Math.floor(e*Math.random()+t),this.x=Math.random()*n,this.y=Math.random()*i,this.velocityX=Math.random()*(2*a)-a,this.velocityY=Math.random()*(2*a)-a}position(){(this.x>=n||this.x<=0)&&(this.velocityX*=-1),(this.y>=i||this.y<=0)&&(this.velocityY*=-1),this.x+=this.velocityX,this.y+=this.velocityY}reDraw(){e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI),e.fillStyle=o.color,e.fill(),e.closePath()}}function s(){e.fillStyle=o.bgColor,e.fillRect(0,0,n,i),function(){for(let t in a)a[t].position(),a[t].reDraw()}(),function(){const{maxRadius:t,minRadius:e}=o;a.forEach((n=>{(n.radius>t||n.radius<e)&&(n.animDirection*=-1),n.radius+=.1*n.animDirection}))}(),function(){let t,n,i,r,s;for(let c in a)for(let l in a)if(t=a[c].x,n=a[c].y,i=a[l].x,r=a[l].y,s=Math.sqrt(Math.pow(i-t,2)+Math.pow(r-n,2)),s<o.lineLength){const a=Math.pow(s,3),o=1e5;e.lineWidth=o/a>1?.5:o/a,e.strokeStyle="#F1D5D7",e.beginPath(),e.moveTo(t,n),e.lineTo(i,r),e.stroke(),e.closePath()}}(),requestAnimationFrame(s)}const c=(t,e,n)=>{[...t.children].forEach((t=>t.remove())),t.append(...((t,e)=>e.filter((({language:e})=>e==t)).map((({language:t,url:e,name:n,description:i})=>{const a=document.createElement("figure");a.classList.add("github-repo","wow","fadeInDown");const o=document.createElement("a");o.href=e,o.target="_blank",o.classList.add("github-repo__link"),o.innerText=n;const r=document.createElement("p");r.classList.add("github-repo__desc"),1==/[а-яё]/gi.test(i)&&r.classList.add("cyrillic"),r.innerText=null==typeof i||"string"==typeof i&&i.length<40?i:"string"==typeof i&&i.slice(0,40).concat("...");const s=document.createElement("p");s.classList.add("github-repo__language");const c=document.createElement("span");return c.classList.add("github-repo__marker"),s.append(c,t),a.append(o,r,s),a})))(n,e))},l=document.querySelector("select#language"),d=document.querySelector("main.github");let u=[];const h=()=>{(async t=>{let e=await fetch("https://api.github.com/users/wouldRewind/repos");return e=await e.json(),e.map((function({name:t,description:e,language:n,url:i}){return{name:t,description:e,language:n,url:i.replace("api.","").replace("repos/","")}}))})().then((t=>{u=[...t];const e=(t=>{let e=[...new Set(t.map((({language:t})=>t)))];return e=e.filter((t=>t)),e.map((t=>{const e=document.createElement("option");return e.value=t,e.innerText=t,"JavaScript"==t&&e.setAttribute("selected",!0),e}))})(u);l.append(...e);const n=e.find((({selected:t})=>t)).value;c(d,u,n)})),l.addEventListener("change",(t=>{c(d,u,t.target.value)}))};document.addEventListener("DOMContentLoaded",(function(){!function(){const t=o.count;for(let e=0;e<t;e++)a.push(new r);s()}(),h()}))})();