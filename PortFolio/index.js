const intro = document.querySelector("#intro");
const title = document.querySelector("#name");
const box = document.querySelector("#box");
const bg = document.querySelector("#bg");
const body = document.querySelector("#body");
const main = document.querySelector("#main");
let heading = title.innerHTML;
let names = ["HELLO..", "WELCOME",]
const background = ["0 20px 25px -5px #CD1818, 0 8px 10px -6px #CD1818","0 20px 25px -5px #F94C10, 0 8px 10px -6px #F94C10",
"0 20px 25px -5px #DB005B, 0 8px 10px -6px #DB005B","0 20px 25px -5px #053B50, 0 8px 10px -6px #053B50"]
let index=1;
let j=1;
let i=0;
let b=0;
    bg.addEventListener("click",(e)=>{
        main.style.boxShadow = background[b];
        b++;
    })




const text= document.querySelector("#para");
let t0= text.innerHTML;
let k0=1;

const texting0 =()=>{
    let new_text = t0.slice(0,k0);
    text.innerHTML=new_text;
    k0++;

    setTimeout(() => {
        texting0()
    },0);
}

const writing =()=>{
    let new_name = heading.slice(0,j);
    title.innerHTML=new_name;
    j++;

    setTimeout(() => {
        writing()
    }, 600);
}

const typewriter = ()=>{
    let new_title = names[i].slice(0,index);
    intro.innerHTML=new_title;
    index++;

    setTimeout(() => typewriter(), 1000)
    if(index==((names[i].length)+1)){
        i++;
        index=1;
    }
    }
texting0();
writing();
typewriter();