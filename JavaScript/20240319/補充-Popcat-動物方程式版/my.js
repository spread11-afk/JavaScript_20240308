let PIC=document.getElementById("pic");
let N=0;
let audio = document.createElement("audio");

PIC.onmouseover=aaa;
PIC.onmouseout=bbb;
PIC.onmousedown=ccc;
PIC.onmouseup=aaa;

function aaa(){
    this.src="./img/p2.png"
}

function bbb(){
    this.src="./img/p1.png"
}

function ccc(){
    N=N+1;
    this.src="./img/p3.png";
    document.getElementById("tt").innerHTML=N;
    playAudio();
}

function playAudio() {
    audio.src = "a.mp3";
    audio.play();
  }



