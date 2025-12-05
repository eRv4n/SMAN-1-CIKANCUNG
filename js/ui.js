document.addEventListener("DOMContentLoaded", () => {
  // Variable

  // Navbar Desktop
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("nav-link");
  const kesBtn = document.getElementById("kesiswaanBtn");
  const kesMenu = document.getElementById("kesiswaanMenu");

  // Navbar Mobile
  const hamburger = document.getElementById("hamburger");
  const l1 = document.getElementById("line1");
  const l2 = document.getElementById("line2");
  const l3 = document.getElementById("line3");
  const mobileMenu = document.getElementById("mobileMenu");

  // All
  const tittleText = document.getElementById("tittle-text");

  // #### Logic ####

  // Kesiswaan Button
  kesBtn.addEventListener("click", () => {
    kesMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!kesBtn.contains(e.target) && !kesMenu.contains(e.target)) {
      kesMenu.classList.add("hidden");
    }
  });
  // End Kesiswaan Button

  // Mobile Hamburger Animation
  hamburger.addEventListener("click", () => {
    // Animasi hamburger
    l1.classList.toggle("rotate-45");
    l1.classList.toggle("translate-y-[6px]");
    l2.classList.toggle("opacity-0");
    l3.classList.toggle("-rotate-45");
    l3.classList.toggle("-translate-y-[6px]");
    // Toggle menu
    // mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("translate-x-full");
    mobileMenu.classList.toggle("translate-x-0");
  });

  // On Scroll
  window.addEventListener("scroll", () => {
    kesMenu.classList.add("hidden");
    if (window.scrollY > 10) {
      navbar.classList.add("bg-gray-50", "border-b", "border-gray-300");
      navbar.classList.remove("bg-linear-to-b", "from-gray-800/50", "to-transparent");
      tittleText.classList.add("text-cyan-600");
      tittleText.classList.remove("text-gray-50");
      navLinks.classList.remove("text-gray-50");
      navLinks.classList.add("text-gray-700");
      kesMenu.classList.remove("bg-gray-50/30", "text-gray-50");
      kesMenu.classList.add("bg-gray-50", "text-gray-700");
    } else {
      navbar.classList.remove("bg-gray-50", "border-b", "border-gray-300");
      navbar.classList.add("bg-linear-to-b", "from-gray-800/50", "to-transparent");
      tittleText.classList.remove("text-cyan-600");
      tittleText.classList.add("text-gray-50");
      navLinks.classList.add("text-gray-50");
      navLinks.classList.remove("text-gray-700");
      kesMenu.classList.add("bg-gray-50/30", "text-gray-50");
      kesMenu.classList.remove("bg-gray-50", "text-gray-700");
    }
  });

  // ===== Scroll Spy (Active Nav Link on Scroll) =====

  // Ambil semua link navbar desktop
  const navLinksAll = document.querySelectorAll(".nav-link");

  // Mapping text link → ID section
  const navMap = {
    Beranda: "beranda",
    "Tentang Sekolah": "tentang-sekolah",
    "SPMB 2026": "spmb",
    Berita: "berita",
    Kontak: "footer",
  };

  // Ambil semua section yang ada
  const sectionsList = Object.values(navMap)
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  // Fungsi update active link
  function updateActiveNav() {
    let scrollPosition = window.scrollY + window.innerHeight / 3;

    // ==== Jika scroll kurang dari 10px ====
    if (window.scrollY < 10) {
      navLinksAll.forEach((link) => {
        link.classList.remove("nav-inactive");

        // warna terang (awal)
        link.classList.add("text-gray-100");
      });
      return; // hentikan di sini
    }

    // ==== jika scroll sudah lewat 10px ====
    navLinksAll.forEach((link) => {
      link.classList.remove("text-gray-100");
    });

    let activeId = null;

    sectionsList.forEach((sec) => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        activeId = sec.id;
      }
    });

    navLinksAll.forEach((link) => {
      const text = link.textContent.trim();
      const target = navMap[text];

      link.classList.remove("nav-active");
      link.classList.remove("nav-inactive");

      if (target === activeId) {
        link.classList.add("nav-active");
      } else {
        link.classList.add("nav-inactive");
      }
    });
  }

  // Jalanin pas load & scroll
  updateActiveNav();
  window.addEventListener("scroll", updateActiveNav);

  document.getElementById("year").textContent = new Date().getFullYear();
});

// Swiper.js

// Import core & modules
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Data program unggulan
const fasilitas = [
  {
    nama: "Lab Komputer",
    deskripsi: "Pengenalan lingkungan sekolah.",
    gambar: "https://www.damai.sch.id/wp-content/uploads/2020/01/lab-komputer-tk-sd-2020.jpg",
  },
  {
    nama: "Lab Kimia",
    deskripsi: "Meningkatkan literasi.",
    gambar:
      "https://sma3jogja.sch.id/wp-content/uploads/2020/05/8d2e2f8e-d346-4ec5-adc7-37dedfae9a5a-1024x576.jpg",
  },
  {
    nama: "Lab Fisika",
    deskripsi: "Kegiatan senam untuk mensegarkan badan.",
    gambar: "https://smpn1baturetno.sch.id/wp-content/uploads/2020/08/Lab-Fisika-3-1-1600x900.jpg",
  },
  {
    nama: "Lab Biologi",
    deskripsi: "Kegiatan senam untuk mensegarkan badan.",
    gambar: "https://sman1cibungbulang.sch.id/wp-content/uploads/2022/02/Laboratorium-Biologi-SMA-I.jpg",
  },
  // Tambah slide lain sesuai kebutuhan
];

// Elements teks dinamis
const namaEl = document.querySelector("#fasilitas-nama");
const deskripsiEl = document.querySelector("#fasilitas-deskripsi");
const swiperWrapperFasilitas = document.querySelector(".mySwiperFasilitas .swiper-wrapper");

// Render slide
fasilitas.forEach((item) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
    <img data-src="${item.gambar}" class="w-full h-80 md:h-[500px] object-cover swiper-lazy rounded-2xl"/>
    <div class="swiper-lazy-preloader"></div>
  `;
  swiperWrapperFasilitas.appendChild(slide);
});

// Init Swiper
// Fasilitas
const swiperFasilitas = new Swiper(".mySwiperFasilitas", {
  slidesPerView: 1,
  loop: fasilitas.length >= 2, // loop hanya aktif kalau slide ≥ 2
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  lazy: {
    loadPrevNext: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      const current = fasilitas[this.realIndex];
      namaEl.textContent = current.nama;
      deskripsiEl.textContent = current.deskripsi;
    },
  },
});

// Set awal teks
namaEl.textContent = fasilitas[0].nama;
deskripsiEl.textContent = fasilitas[0].deskripsi;
