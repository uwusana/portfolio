const cards = document.querySelectorAll(".card");

setInterval(()=>{

const first = cards[0];

first.parentNode.appendChild(first);

},3000);