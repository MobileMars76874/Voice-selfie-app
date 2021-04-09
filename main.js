var Speechrecognition = window.webkitSpeechRecognition;
var Recognition = new Speechrecognition();

function start(){
document.getElementById("textbox").innerHTML = "";
Recognition.start();
}

Recognition.onresult = function(event){
console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content)
document.getElementById("textbox").innerHTML = Content;
if(Content == "take my selfie"){
speak();
}
}

function speak(){
var synth = window.speechSynthesis;
speech_data = "Taking your selfie in 5 seconds";
var speak_this = new SpeechSynthesisUtterance(speech_data);
synth.speak(speak_this);
console.log(speak_this);
Webcam.attach(camera);
setTimeout(function(){
Click_pic();
Save();
},5000);
}
camera = document.getElementById("camera");
Webcam.set({
width : 300,
height : 250,
image_format: "png",
png_quality: 90
});

function Click_pic(){
Webcam.snap(function(data_url){
document.getElementById("result").innerHTML = "<img id='pic' src='"+data_url+"'>";
});
}

function Save(){
link = document.getElementById("link");
image = document.getElementById("pic").src;
link.href = image;
link.click();
}





