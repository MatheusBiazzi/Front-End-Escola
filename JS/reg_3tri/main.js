/*//amaterasu
function falaAmaterasu(){
    document.querySelector("#fala_amat").play();
}
document.querySelector(".fala1").onclick =falaAmaterasu;
//Shinra tensei
function falaSTensei(){
    document.querySelector("#fala_stensei").play();
}
document.querySelector(".fala2").onclick =falaSTensei;
//kagura
function falaKagura(){
    document.querySelector("#fala_kagu").play();
}
document.querySelector(".fala3").onclick =falaKagura;
//kamehameha
function falaKamehameha(){
    document.querySelector("#fala_kame").play();
}
document.querySelector(".fala4").onclick =falaKamehameha;
//Risada Kyra
function falaLaught(){
    document.querySelector("#fala_laught").play();
}
document.querySelector(".fala5").onclick =falaLaught;
//rasegan
function falaRasegan(){
    document.querySelector("#fala_rase").play();
}
document.querySelector(".fala6").onclick =falaRasegan;
//chidori
function falaChidori(){
    document.querySelector("#fala_chid").play();
}
document.querySelector(".fala7").onclick =falaChidori;*/
function playAudio(audioId) {
    const audioElement = document.querySelector("#" + audioId);
    const allAudioElements = document.querySelectorAll("audio");
    allAudioElements.forEach(function(element) {
        if (!element.paused) {
            element.pause();
        }
    });
    audioElement.play();
}
const audioFiles = ["fala_amat", "fala_stensei", "fala_kagu", "fala_kame", "fala_laught", "fala_rase", "fala_chid"];
for (let i = 0; i < audioFiles.length; i++) {
    const audioId = audioFiles[i];
    const selector = ".fala" + (i + 1);
    document.querySelector(selector).onclick = function() {
        playAudio(audioId);
    };
}