leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(570, 150);
    PoseNet = ml5.poseNet(video, modelLoaded)
    PoseNet.on("pose", gotPoses)
}

function draw(){
    background("#DD8F0E.");
    textSize(difference);
    fill("#f5a19d");
    text("Sprujan", 50, 200);
}

function modelLoaded(){
    console.log("PoseNet is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}