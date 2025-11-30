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
