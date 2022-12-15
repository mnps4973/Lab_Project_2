let video;
let poseNet;
let poses = [];
//poseNet variables
let noseX = 0;
let noseY = 0;
let leftEyeX = 0;
let leftEyeY = 0;
let rightEyeX = 0;
let rightEyeY = 0;
let leftEarX = 0;
let leftEarY = 0;
let rightEarX = 0;
let rightEarY = 0;
let leftShoulderX = 0;
let leftShoulderY = 0;
let rightShoulderX = 0;
let rightShoulderY = 0
let leftElbowX = 0;
let leftElbowY = 0;
let rightElbowX = 0;
let rightElbowY = 0;
let leftHandX = 0;
let leftHandY = 0;
let rightHandX = 0;
let rightHandY = 0;
let leftHipX = 0;
let leftHipY = 0;
let rightHipX = 0;
let rightHipY = 0;
let leftKneeX = 0;
let leftKneeY = 0;
let rightKneeX = 0;
let rightKneeY = 0;
let leftAnkleX = 0;
let leftAnkleY = 0;
let rightAnkleX = 0;
let rightAnkleY = 0;

function setup() {
  createCanvas(640, 480);

  // load up your video
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
  poseNet.on('pose', gotPose);
  // This sets up an event that fills the global variable "poses"
}

function gotPose(results) {
  poses = results;

  if (! poses || poses.length < 1) return;
  
  pose = poses[0].pose;
  
  //nose
  noseX = pose.nose.x;
  noseY = pose.nose.y;
  //left eye
  leftEyeX = pose.leftEye.x;
  leftEyeY = pose.leftEye.y;
  //right eye
  rightEyeX = pose.rightEye.x;
  rightEyeY = pose.rightEye.y;
  //left ear
  leftEarX = pose.leftEar.x;
  leftEarY = pose.leftEar.y;
  //right ear
  rightEarX = pose.rightEar.x;
  rightEarY = pose.rightEar.y;
  //left shoulder
  leftShoulderX = pose.leftShoulder.x;
  leftShoulderY = pose.leftShoulder.y;
  //right shoulder
  rightShoulderX = pose.rightShoulder.x;
  rightShoulderY = pose.rightShoulder.y;
  //left elbow
  leftElbowX = pose.leftElbow.x;
  leftElbowY = pose.leftElbow.y;
  //right elbow
  rightElbowX = pose.rightElbow.x;
  rightElbowY = pose.rightElbow.y;
  //left hand
  leftHandX = pose.leftWrist.x;
  leftHandY = pose.leftWrist.y;
  //right hand
  rightHandX = pose.rightWrist.x;
  rightHandY = pose.rightWrist.y;
  //left hip
  leftHipX = pose.leftHip.x;
  leftHipY = pose.leftHip.y;
  //right hip
  rightHipX = pose.rightHip.x;
  rightHipY = pose.rightHip.y;
  //left knee
  leftKneeX = pose.leftKnee.x;
  leftKneeY = pose.leftKnee.y;
  //right knee
  rightKneeX = pose.rightKnee.x;
  rightKneeY = pose.rightKnee.y;
  //left ankle
  leftAnkleX = pose.leftAnkle.x;
  leftAnkleY = pose.leftAnkle.y;
  //right ankle
  rightAnkleX = pose.rightAnkle.x;
  rightAnkleY = pose.rightAnkle.y;

}

function draw() {
  //video
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  //circle points
  noStroke();
  fill(255,0,0);
  ellipse(noseX, noseY, 10,10);
  ellipse(leftEyeX, leftEyeY, 10,10);
  ellipse(rightEyeX, rightEyeY, 10,10);
  ellipse(leftEarX, leftEarY, 10,10);
  ellipse(rightEarX, rightEarY, 10,10);
  ellipse(leftShoulderX, leftShoulderY, 10,10);
  ellipse(rightShoulderX, rightShoulderY, 10,10);
  ellipse(leftElbowX, leftElbowY, 10,10);
  ellipse(rightElbowX, rightElbowY, 10,10);
  ellipse(leftHandX, leftHandY, 10,10);
  ellipse(rightHandX, rightHandY, 10,10);
  ellipse(leftHipX, leftHipY, 10,10);
  ellipse(rightHipX, rightHipY, 10,10);
  ellipse(leftKneeX, leftKneeY, 10,10);
  ellipse(rightKneeX, rightKneeY, 10,10);
  ellipse(leftAnkleX, leftAnkleY, 10,10);
  ellipse(rightAnkleX, rightAnkleY, 10,10);
}
