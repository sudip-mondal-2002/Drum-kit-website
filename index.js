
function playSoundChar(st) {
  switch (st) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
  }
}

function buttonAnimation(st) {
  var charlist = ["w", "s", "a", "d", "j", "k", "l"];

  if (charlist.includes(st)){
    var activeButton = document.querySelector("." + st);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100)
}
}
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    playSoundChar(buttonInnerHtml)
    buttonAnimation(buttonInnerHtml)
  });

}
document.addEventListener("keydown", function(event) {
  playSoundChar(event.key)
  buttonAnimation(event.key)
})
