clownx = 0;
clowny = 0;
function preload(){
    clown = loadImage("https://i.postimg.cc/L61kYDDK/clown-nose.jpg");
}

function setup(){
  canvas = createCanvas(600, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(600, 400);
  posenet = ml5.poseNet(video, Modelloaded);
  posenet.on('pose', gotposes);
}

function gotposes(results){
  if(results.length > 0){
    console.log(results);
    clownx = results[0].pose.nose.x - 15;
    clowny = results[0].pose.nose.y - 15;
  }
}

function Modelloaded(){}

function draw(){
  image(video, 0, 0, 600, 400);
  image(clown, clownx, clowny, 40, 40);
}