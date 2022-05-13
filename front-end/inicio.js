/*function changeToCriar() {
    var x = document.getElementById("iniciar");
    var y = document.getElementById("criar");
    if (y.style.display === "none") {
      y.style.display = "block";
      x.style.display = "none";
    } 
}

function changeToIniciar() {
    var x = document.getElementById("criar");
    var y = document.getElementById("iniciar");
    if (y.style.display === "none") {
      x.style.display = "none";
      y.style.display = "block";
    } 
}*/

document.getElementById("criarconta").addEventListener("click", function(){
  document.getElementById("iniciar").style.display = "none";
  document.getElementById("criar").style.display = "block";
});

document.getElementById("iniciar_sessao").addEventListener("click", function(){
  document.getElementById("iniciar").style.display = "block";
  document.getElementById("criar").style.display = "none";
});

function changeToSite() {
    location.replace("site.html");
}