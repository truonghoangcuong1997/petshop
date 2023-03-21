document.getElementById('imglogo').addEventListener("click", function OpenMenu() {
    let imgMenu = document.getElementById('imgMenu');
    let closeMenu = document.getElementById('btnClose')
    if (imgMenu) {
        imgMenu.src = './images/icons8-close-50.png'
        imgMenu.id = 'btnClose'

        let Menu1 = document.getElementById('Menu1');
        Menu1.style.display = 'none'

        let Menu2 = document.getElementById('Menu2');
        Menu2.style.display = 'block'
    } else {
        closeMenu.src = './images/icons8-menu-rounded-50.png'
        closeMenu.id = 'imgMenu'

        let Menu1 = document.getElementById('Menu2');
        Menu1.style.display = 'none'

        let Menu2 = document.getElementById('Menu1');
        Menu2.style.display = 'block'
    }
    
});

document.getElementById('pay').addEventListener("click", function openPopup(){
    let popUp = document.getElementById('popup_form')
    popUp.style.display = 'block'
})

document.getElementById('close_popup').addEventListener('click', function closePopup(){
    let popUp = document.getElementById('popup_form')
    popUp.style.display = 'none'
})

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
