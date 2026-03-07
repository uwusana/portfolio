const projects=[

{
img:"assets/images/projects/project1.png",
github:"https://github.com/project1",
live:"https://project1.com"
},

{
img:"assets/images/projects/project2.png",
github:"https://github.com/project2",
live:"https://project2.com"
},

{
img:"assets/images/projects/project3.png",
github:"https://github.com/project3",
live:"https://project3.com"
}

];

let current=0;

function showProject(){

document.getElementById("projectImage").src=projects[current].img;

}

document.getElementById("btnA").onclick=()=>{

window.open(projects[current].github);

};

document.getElementById("btnB").onclick=()=>{

window.open(projects[current].live);

};