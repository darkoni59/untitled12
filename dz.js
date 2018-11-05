var num = Math.floor(Math.random() * 100) + 1;
var NbEssais = 0;
var vie=10;

function Devine() {
    var choisi = document.form1.devine1.value;
    NbEssais++;
    status = "Nombre d'essais : " + NbEssais;
    if (choisi < num){
        document.form1.indice.value = "Non, le nombre est plus grand.";
    life();}
    if (choisi > num){
        document.form1.indice.value = "Non, le nombre est plus petit.";
    life();}
    if (choisi == num)
    {
        alert("Correct ! Vous avez trouvé en " + NbEssais + "essais.");
        location.reload();
    }
    if (NbEssais === 10) {
        alert("Désolé, c'est fini. Le nombre correct était : " + num);
        location.reload();}
function life() {
     vie--;
    document.getElementById("vie").innerHTML="il te reste"+" "+ vie +"life";

}}