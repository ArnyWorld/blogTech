let bars = document.querySelector(".navigationBar__bars");
let menu = document.querySelector(".navigationBar__links");
let progress = document.querySelector(".progressBar");
let date = new Date();
let year = date.getFullYear();
let yearHTML = document.querySelector("#year");
yearHTML.textContent = year;

let goTop = document.querySelector(".goTop");

progress.style.width = 0+"%";



function listeners(){
    //Menu
    bars.addEventListener("click",showMenu);
    //Scroll
    goTop.addEventListener("click",topFunction);
    //progressBar
    window.addEventListener("scroll", scrollProgressBar);

   //topShow
   window.addEventListener('scroll',()=>{
    const scrollPX = window.scrollY;
    //console.log(scrollPX);
    if(scrollPX > 200){
        goTop.style.display="flex";      
    }else{
        goTop.style.display="none";
    }
});

}

listeners();
  


function showMenu(){
    console.log("Hiciste click");
    menu.classList.toggle("navigationBar__links--show");
}


function scrollProgressBar() {
   
    let scrollTop = document.documentElement.scrollTop;
  
    let scrollHeight = document.documentElement.scrollHeight;
    
    let clientHeight = document.documentElement.clientHeight;
 
    let windowHeight = scrollHeight - clientHeight;

    let porcentaje = scrollTop / windowHeight * 100;

    progress.style.width = porcentaje + "%";

}

function topFunction(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}