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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}