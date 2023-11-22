
//aplausos
function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
}
document.querySelector(".tecla_aplausos").onclick = tocaSomAplausos;
//vaia
function tocaSomVaias(){
    document.querySelector("#som_tecla_vaia").play();
}
document.querySelector(".tecla_vaia").onclick = tocaSomVaias;

//risada
function tocaSomRisada(){
    document.querySelector("#som_tecla_risada").play();
}
document.querySelector(".tecla_risada").onclick = tocaSomRisada;

//errado
function tocaSomErrado(){
    document.querySelector("#som_tecla_errado").play();
}
document.querySelector(".tecla_errado").onclick = tocaSomErrado;

//grilo
function tocaSomGrilo(){
    document.querySelector("#som_tecla_grilo").play();
}
document.querySelector(".tecla_grilo").onclick = tocaSomGrilo;

//tambores
function tocaSomTambores(){
    document.querySelector("#som_tecla_tambores").play();
}
document.querySelector(".tecla_tambores").onclick = tocaSomTambores;

//trombeta
function tocaSomTrombeta(){
    document.querySelector("#som_tecla_trombeta").play();
}
document.querySelector(".tecla_trombeta").onclick = tocaSomTrombeta;

//dinheiro
function tocaSomDinheiro(){
    document.querySelector("#som_tecla_dinheiro").play();
}
document.querySelector(".tecla_dinheiro").onclick = tocaSomDinheiro;

//vitoria
function tocaSomVitoria(){
    document.querySelector("#som_tecla_vitoria").play();
}
document.querySelector(".tecla_vitoria").onclick = tocaSomVitoria;
/*

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
let lista = document.querySelectorAll(".tecla");
let contador = 0;
while(contador< lista.length){
    const efeito = lista[contador].classList[1];
    const idAudio = "#som_"+efeito;
    lista(contador).onclick = function(){
        tocaSom(idAudio);
    }
    contador++;
}*/
