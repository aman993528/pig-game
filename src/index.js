let new1=document.querySelector(".btn--new")
let roll=document.querySelector(".btn--roll")
let hold=document.querySelector(".btn--hold")
let score=0;
let x=0;
document.querySelector(".dice").classList.add("hidden");
y=true;
roll.addEventListener("click",function(){
    if(y){
    document.querySelector(".dice").classList.remove("hidden");
    let random= Math.floor((Math.random()*6)+1)
    document.querySelector(".dice").setAttribute("src","./Image/dice-"+random+".png")
    score=score+random;
    
    if(random==1){
        score=0;
        document.querySelector("#current--"+x).innerHTML=score;
        xyz()
    }
    else{
        document.querySelector("#current--"+x).innerHTML=score;
    }

}
})
hold.addEventListener("click",function(){
    if(y){
    document.querySelector("#score--"+x).innerHTML=Number(document.querySelector("#score--"+x).innerHTML)+score;
    score=0;
    document.querySelector("#current--"+x).innerHTML=score;
    xyz()
    }
})
function xyz(){

    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
    if( document.querySelector("#score--"+x).innerHTML>19){
        document.querySelector(".player--0").classList.remove("player--active")
        document.querySelector(".player--1").classList.remove("player--active")
        document.querySelector(".player--"+x).classList.add("player--winner")
        int()
    }

    if(x==0){
        x=1;
    }
    else{x=0;}

}
new1.addEventListener("click",function(){
    score=0;
    x=0;
    document.querySelector("#current--0").innerHTML=0;
    document.querySelector("#score--0").innerHTML=0;
    document.querySelector("#current--1").innerHTML=0;
    document.querySelector("#score--1").innerHTML=0;
    document.querySelector(".player--0").classList.add("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.remove("player--winner")
    document.querySelector(".player--1").classList.remove("player--winner")
    y=true;

})
if( document.querySelector("#score--"+x)==20){
    document.querySelector(".player--"+x).classList.toggle("player--winner")
}
let int=function(){
    document.querySelector(".dice").classList.add("hidden");
    y=false;
}