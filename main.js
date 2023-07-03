function startClassification(){
navigator.mediaDevices.getUserMedia({
    audio:true
});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2u9mnD1SL/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
var cat=0;
var wolf=0;
var elephant=0;
function gotResult(error,results){
if (error){
    console.error(error);
}    
else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result").innerHTML="voiceDetected-"+results[0].label;
    document.getElementById("result_count").innerHTML="detectedCat-"+cat+"dectectedWolf-"+wolf+"detectedElephant="+elephant;
    document.getElementById("result").style.color='rgb('+random_number_r+','+random_number_g+','+random_number_b+')';
    document.getElementById("result_count").style.color='rgb('+random_number_r+','+random_number_g+','+random_number_b+')';
    if(results[0].label=="Cat"){
        img.src="Cat.gif";
        cat=cat+1;

    } else if(results[0].label=="Wolf"){
        img.src="Wolf.gif";
        wolf=wolf+1;
    }
    else if(results[0].label=="Elephant"){
        img.src="Elephant.gif";
        elephant=elephant+1;
    }
    else{img.src="Ear running weirdly.gif"};
}
}
