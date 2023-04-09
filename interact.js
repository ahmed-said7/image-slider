let imgarray=document.querySelectorAll(".slider img");
let slidernum=document.querySelectorAll(".slide-number");
console.log(imgarray.length)
let current=0;
imgarray[current].classList.add("active");
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
slidernum.innerHTML= "you are in ";
let list=document.querySelector(".control ul")
for(let i=1;i<=imgarray.length;i++){
    console.log(imgarray[i])
    let newspan=document.createElement("span");
    newspan.innerHTML=i;
    newspan.setAttribute("index",i);
    list.appendChild(newspan);

}
let spans=document.querySelectorAll("ul span");
spans[current].classList.add("active");
next.onclick=function(){
    if(current<=4) {
        next.classList.remove("unactive");
        if(current!=3){
            current ++;
        }
        checked(current)
    }
}
prev.onclick=function(){
    if(current>=0) {
        prev.classList.remove("unactive");
        if(current!=0){
            current --;
        }
        checked(current)
    }
}
spans.forEach(function(span,index){
    span.onclick=function(){
        current=index;
        checked(current);
    }
});
function checked(current){
    for(let i=0;i<imgarray.length;i++){
        imgarray[i].classList.remove("active");
    }
    imgarray[current].classList.add("active");
    for(let i=0;i<spans.length;i++){
        spans[i].classList.remove("active");
    }
    spans[current].classList.add("active");
}