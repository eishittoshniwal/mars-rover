var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
var roverx=10
var rovery=10
var roverwidth=100
var roverheight=100
var background="mars.jpg"
var roverimg="rover.png"
function add(){
    bg=new Image()
    bg.onload=uploadbackground
    bg.src=background

    rover=new Image()
    rover.onload=uploadrover
    rover.src=roverimg
}

function uploadbackground(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover,roverx,rovery,roverwidth,roverheight)
}
  
      window.addEventListener("keydown",KD)
      function KD(e){
var x=e.keyCode
console.log(x)
if(x==37){
    console.log("leftpress")
    left()
}
if(x==38){
    console.log("uppress")
    up()
}
if(x==39){
    console.log("rightpress")
    right()
}
if(x==40){
    console.log("downpress")
    down()
}
      }

function down(){
  if(rovery<=500){
      rovery=rovery+10
      uploadbackground()
      uploadrover()
  }  
}
function up(){
    if(rovery>=0){
    rovery=rovery-10
    uploadbackground()
    uploadrover()
}
}
function left(){
    if(roverx>=0){
        roverx=roverx-10
        uploadbackground()
        uploadrover()
    }
}
function right(){
    if(roverx<=700){
        roverx=roverx+10
        uploadbackground()
        uploadrover()
    }
}
