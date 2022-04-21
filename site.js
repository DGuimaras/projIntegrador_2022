function showCategories() {
    var x = document.getElementById("categories");
    var y = document.getElementById("pieces");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.marginTop = "15px";
    } else {
      x.style.display = "none";
      y.style.marginTop = "70px";
    }
}

document.getElementById("criar").addEventListener("click", function(){
  document.getElementById("container").style.display = "none";
  document.getElementById("criarconta").style.display = "block";
});

document.getElementById("iniciar_sessao").addEventListener("click", function(){
  document.getElementById("container").style.display = "block";
  document.getElementById("criarconta").style.display = "none";
});