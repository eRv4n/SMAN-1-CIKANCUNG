const navbar = document.querySelector(".navbar-bottom");
const contentKesiswaan = document.querySelector(".contentKesiswaan");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    contentKesiswaan.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    contentKesiswaan.classList.remove("scrolled");
  }
  // dropdown dari contentKesiswaan, otomatis ke tutup jika aktif dan scroll
  if (contentKesiswaan.classList.contains("actived")) {
    contentKesiswaan.classList.remove("actived");
  }
});

function dropdownKesiswaan() {
  event.preventDefault();
  contentKesiswaan.classList.toggle("actived");
}
