(()=>{"use strict";const t=t=>"function"==typeof t,n=function(n){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:t)(n)&&n()||n},e=document.querySelector("button"),o=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*n+t)}.bind(void 0,0,100),i=Array(8).fill(0),l=function(){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;return[...new Array(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)].map((()=>e(e(t))))}.bind(void 0,8,o),r=((t,n)=>{t.classList.toggle(n)}).bind(void 0,e,"animationGo"),d=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return t?function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t=t.replace(/[%/]/g,""),t=t.replace("  "," "),t}(t),function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((t=>+t))}(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(" ")}(t))}(t):n};e.addEventListener("click",r),setInterval((async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;const e=document.querySelector("button"),o=e.style.borderRadius,i=t(o),r=n();var u;console.log(`Old border radius: ${o}`),console.log(i),console.log(r),await(u=10,new Promise((t=>setTimeout(t,u)))),console.log(e)}),3e3)})();
//# sourceMappingURL=bundle.js.map