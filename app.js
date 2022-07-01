var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumb = document.getElementsByClassName("thumb");

var backgroundImage = [

    "img/bg1.jpg",
    "img/bg2.jpg",
    "img/bg3.png",
    "img/bg4.jpg",
    "img/bg5.png",
];

var i = 0;

next.addEventListener("click", ()=>{

    if(i < 4){

        document.body.style.backgroundImage = `url('${backgroundImage[i+1]}')`;
        thumb[i+1].classList.add("active_thumb");
        thumb[i].classList.remove("active_thumb");
        document.body.style.transition = "background 0.7s ease";
        i++;
    }
})

prev.addEventListener("click", ()=>{

    if(i > 0){

        document.body.style.backgroundImage = `url('${backgroundImage[i-1]}')`;
        thumb[i-1].classList.add("active_thumb");
        thumb[i].classList.remove("active_thumb");
        document.body.style.transition = "background 0.7s ease";
        i--;
    }
})