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
  let dots = document.getElementsByClassName("dot");
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
}



let count = 0;

document.getElementById("decreaseBtn").onclick = function() {
    count-=1;
    document.getElementById("counterScreen").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function() {
    count+=1;
    document.getElementById("counterScreen").innerHTML = count;
}




function menu() {

    if(document.getElementById("links").style.display === "block") {
        document.getElementById("links").style.display = "none";
    } else {
        document.getElementById("links").style.display = "block";
    }

}