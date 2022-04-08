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