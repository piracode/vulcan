$(document).ready(function () {
  $(".slider-wrapper").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    SlidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

// navigation
const navigation = document.getElementById("header-nav");
const menu = document.getElementById("menu");
const menuUl = document.querySelector(".header__links");
menu.addEventListener("click", () => {
  navigation.style.setProperty("--childenNumber", navigation.children.length);
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
  menuUl.classList.toggle("active");
});
