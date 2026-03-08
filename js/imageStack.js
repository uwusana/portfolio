const stack = document.querySelector(".stack");

setInterval(() => {

const first = stack.firstElementChild;

stack.appendChild(first);

},3000);