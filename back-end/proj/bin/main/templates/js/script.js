document.getElementById("criarconta").addEventListener("click", function(){
    document.getElementById("iniciar").style.display = "none";
    document.getElementById("criar").style.display = "block";
  });
  
  document.getElementById("iniciar_sessao").addEventListener("click", function(){
    document.getElementById("iniciar").style.display = "block";
    document.getElementById("criar").style.display = "none";
  });

  function goToAbout() {
    location.replace("about.html");
  }
  
  function goToContacts() {
    location.replace("contacts.html");
  }
  
  function goToLoja() {
    location.replace("/../pages/main_page.jsp");
  }
  
  function goToEvents() {
    location.replace("events.html");
  }

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