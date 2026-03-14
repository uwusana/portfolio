// ===== PROJECT DATA =====

const projects = [
  {
    title: "Savr",
    desc: "Gen Z financial literacy platform.",
    img: "assets/images/projects/p1.png",
    github: "#",
    live: "#"
  },
  {
    title: "Artire",
    desc: "Artist hiring platform.",
    img: "assets/images/projects/p2.png",
    github: "#",
    live: "#"
  },
  {
    title: "Postcard App",
    desc: "Digital postcard maker.",
    img: "assets/images/projects/p3.png",
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio",
    desc: "This cute website 💅",
    img: "assets/images/projects/p4.png",
    github: "#",
    live: "#"
  }
];


// ===== WAIT FOR DOM =====

document.addEventListener("DOMContentLoaded", () => {

  const leftPage = document.getElementById("leftPage");
  const rightPage = document.getElementById("rightPage");
  const pages = document.querySelector(".pages");

  let index = 0; // CURRENT SPREAD


  // ===== RENDER FUNCTION =====

  function renderPages(){

    const left = projects[index];
    const right = projects[index + 1];

    leftPage.innerHTML = left ? `
      <div class="project">
        <img src="${left.img}" class="project-image">
        <h4>${left.title}</h4>
        <p>${left.desc}</p>
        <div class="links">
          <a href="${left.github}">GitHub</a>
          <a href="${left.live}">Live</a>
        </div>
      </div>
    ` : "";

    rightPage.innerHTML = right ? `
      <div class="project">
        <img src="${right.img}" class="project-image">
        <h4>${right.title}</h4>
        <p>${right.desc}</p>
        <div class="links">
          <a href="${right.github}">GitHub</a>
          <a href="${right.live}">Live</a>
        </div>
      </div>
    ` : "";

  }


  // INITIAL LOAD
  renderPages();


  // ===== NEXT PAGE =====

rightPage.addEventListener("click", () => {

  if (index + 2 < projects.length) {

    pages.classList.add("flip-forward");

    setTimeout(() => {
      index += 2;
      renderPages();
      pages.classList.remove("flip-forward");
    }, 250);

  }

});


  // ===== PREVIOUS PAGE =====

  leftPage.addEventListener("click", () => {

  if (index - 2 >= 0) {

    pages.classList.add("flip-back");

    setTimeout(() => {
      index -= 2;
      renderPages();
      pages.classList.remove("flip-back");
    }, 250);

  }

});

});