document.addEventListener("keypress",keywaspressed);
var b = document.querySelectorAll(".drum");
for (let index = 0; index < b.length; index++) {
  b[index].addEventListener("click", handleClick);
}



function handleClick() {
  let tar = this.innerHTML;
  animate(tar);
  makesound(tar);
  
}

function keywaspressed(event) {
    makesound(event.key);
    animate(event.key);
}

function animate(currkey) {
   let activebtn="."+ currkey;
    document.querySelector(activebtn).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(activebtn).classList.remove("pressed");
    },100)
    
}

function makesound(exp) {
    switch (exp) {
        case "w":
          let audio1 = new Audio("sound/tom-1.mp3");
          audio1.play();
          break;
        case "a":
          let audio2 = new Audio("sound/tom-2.mp3");
          audio2.play();
          break;
        case "s":
          let audio3 = new Audio("sound/tom-3.mp3");
          audio3.play();
          break;
        case "d":
          let audio4 = new Audio("sound/tom-4.mp3");
          audio4.play();
          break;
        case "j":
          let audio5 = new Audio("sound/snare.mp3");
          audio5.play();
          break;
        case "k":
          let audio6 = new Audio("sound/crash.mp3");
          audio6.play();
          break;
        case "l":
          let audio7 = new Audio("sound/kick-bass.mp3");
          audio7.play();
          break;
      }
    
}

