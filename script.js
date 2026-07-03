// Smooth scrolling

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

const target=this.getAttribute("href");

if(target.startsWith("#")){

e.preventDefault();

document.querySelector(target).scrollIntoView({

behavior:"smooth"

});

}

});

});

// Header effect

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(15,23,42,.9)";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

}

else{

header.style.background="rgba(255,255,255,.08)";

header.style.boxShadow="none";

}

});

// Scroll animation

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

cards.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});

// Ripple effect

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=${diameter}px;

circle.style.left=${e.clientX-this.getBoundingClientRect().left-radius}px;

circle.style.top=${e.clientY-this.getBoundingClientRect().top-radius}px;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

// Typing effect

const heading=document.querySelector(".hero h1");

const text="Build Amazing Websites";

heading.textContent="";

let i=0;

function typing(){

if(i<text.length){

heading.textContent+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

// Footer year

document.querySelector("footer").innerHTML=
© ${new Date().getFullYear()} FutureTech. All Rights Reserved.;        