$(document).ready(function () {
  $(".slider-wrapper").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    SlidesToScroll: 1,
  });
});

// $(document).ready(function () {
//   $(".your-class").slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     SlidesToScroll: 3,
//   });
// });

// const headerNav = document.getElementById("header-nav");

// headerNav.style.display = "none";

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
