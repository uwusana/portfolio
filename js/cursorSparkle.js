document.addEventListener("mousemove",(e)=>{

const star=document.createElement("div");

star.className="sparkle";

star.style.left=e.pageX+"px";
star.style.top=e.pageY+"px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},600);

});
