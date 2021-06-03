img="";
status="";
function preload(){
    img=loadImage('A-fruit-bowl-007.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status decteting objects";
}
function modelLoaded(){
    console.log(" Model Loaded!")
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
if (error){
    console.log(error);
}
console.log(results);
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("apple",45,75);
    noFill();
    stroke("#800080");
    rect(30,60,450,350);

    fill("#FF0000");
    text("grapes",320,120);
    noFill();
    stroke("#800080");
    rect(300,90,270,320);
}