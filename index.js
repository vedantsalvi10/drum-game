//interaction with clicks
var drum = document.querySelectorAll(".drum").length;
for(var i=0; i<drum;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var buttenClick = this.innerHTML;
  
     makeSound(buttenClick);    
       animation(buttenClick);
  });


  //interaction with keys
  document.addEventListener("keydown",function(event){ //event tells us all the info of the key pressed
      makeSound(event.key);
      animation(event.key)
  });

  function makeSound(key){
switch (key){
        
case "w":  
    var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;

case "a": 
         var a = new Audio('sounds/tom-2.mp3');
          a.play();
          break;

case "s":  var s = new Audio('sounds/tom-3.mp3');
          s.play();
          break;
          
case "d":  var d = new Audio('sounds/tom-4.mp3');
          d.play();
          break;   
case "j":  var j = new Audio('sounds/snare.mp3');
          j.play();
          break;  
          
case "k":  var k = new Audio('sounds/kick-bass.mp3');
          k.play();
          break;

case "l":  var l = new Audio('sounds/crash.mp3');
          l.play();
          break;

default: console.log(buttenClick);
  }
  }
function animation(keyy){
  var transit = document.querySelector("." + keyy);
  transit.classList.add("pressed");

  setTimeout(function(){
     transit.classList.remove("pressed");
  },1001);
}
}