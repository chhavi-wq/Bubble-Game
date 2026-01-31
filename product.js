var clutter=0;
var sound=new Audio("/Users/apple/Music/Music/Media.localized/Music/Unknown Artist/Unknown Album/bubble-pop-06-351337.mp3");
var gameOver=false;
var bubbleCount=180;
var bubbleColor='bg-yellow-600'
function makeBubble(){
clutter="";
for(i=1;i<=bubbleCount;i++){
      clutter+=`<div class="text-white hover:bg-gray-800 hover:scale-90 flex justify-center items-center ${bubbleColor} rounded-full h-[4vh] w-[4vh]" id="circle">${Math.floor(Math.random()*10)}</div>`
}
document.querySelector("#p-bottom").innerHTML=clutter;
}
makeBubble();
var hitrn=0;
function hit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML=hitrn;
}
hit();
var timer=45;
function runtimer(){
    var time= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
        }else{
            clearInterval(time);
            clearInterval(refreshInterval);
            gameOver=true;
            document.querySelector("#p-bottom").innerHTML="";
            document.querySelector("#p-bottom").innerHTML=`<h1 class='text-2xl font-bold'>Level ${level} Game Over. Your score is ${score}.</h1>`
      }
    },1000)
}
runtimer();

document.querySelector("#p-bottom").addEventListener("click",(e)=>{
    var clickedNum=(Number(e.target.textContent));
    if (clickedNum === hitrn){
        sound.currentTime=0;
        sound.play();
        increaseScore();
        makeBubble();
        hit();
    }
})
var level=1;
var score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#option").textContent=score;
    if(score>=50 && level===1){
        bubbleColor='bg-red-500'
        level=2;
        document.querySelector("#level").textContent=2;
        bubbleCount=320;
        speed=4500;
        increaseTime();
        makeBubble();
    }
    if(score>=100 && level===2){
        bubbleColor='bg-black'
        level=3;
        document.querySelector("#level").textContent=3;
        speed=3500;
        increaseTime();
        bubbleCount=400;
        makeBubble();
    }   
}
var refreshInterval;
var speed=5000;
function increaseTime(){
    clearInterval(refreshInterval);
    refreshInterval=setInterval(() => {
        makeBubble();
        hit();
    }, speed);
}
increaseScore();
