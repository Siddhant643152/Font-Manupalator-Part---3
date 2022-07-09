nose_X = 0;
nose_Y = 0;
leftWrist_X = 0;
rightWrist_X = 0;
difference = 0;

function preload(){
}
function setup(){
canvas = createCanvas(500,350);
canvas.center();
video = createCapture(VIDEO);
classifier = ml5.poseNet(video, modal_loaded);
classifier.on('pose', gotResults);
}
function draw(){
background("white");
fill("green");
text("SID", nose_X, nose_Y);
textSize(difference);
noFill();
}
function modal_loaded(){
    console.log("Modal Loaded");
}
function gotResults(results){
if(results.length > 0){
console.log(results);
nose_X = results[0].pose.nose.x;
nose_Y = results[0].pose.nose.y;
leftWrist_X = results[0].pose.leftWrist.x;
rightWrist_X = results[0].pose.rightWrist.x;
difference = floor(leftWrist_X - rightWrist_X);
document.getElementById("answer_span").innerHTML = difference + "px";
}
}