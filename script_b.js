/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
var yes = 0;

function appear() {
  document.getElementById("poem").style.opacity = 1;
}

function ap(obj, msg){
  obj.style.opacity = 1;
  document.getElementById("boardmsg").innerHTML = msg;
}

function ds(obj){
  if (yes == 0){
    obj.style.opacity = 0;
  document.getElementById("boardmsg").innerHTML = "uwu";
  }
}

function sirit(){
  var x = document.getElementsByClassName("pic");
  var l = x.length;
  for (var i = 0; i < l; i++) {
    x.item(i).style.opacity = 1;
  yes = 1;
  document.getElementById("poem").style.opacity = 1;
  document.getElementById("boardmsg").innerHTML = "you can drag hughug anywhere";
  }
}

dragElement(document.getElementById("hughug"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}