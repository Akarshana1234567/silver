img="";
function preload(){
    img=loadImage('Hittinger-Bedroom.png');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Bed",45,75);
    noFill();
    stroke("#800080");
    rect(30,60,450,350);
}