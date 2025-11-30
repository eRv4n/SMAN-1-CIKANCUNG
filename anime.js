import { animate } from "animejs";

// const counters = [
//   { id: "alumni", end: 6000 },
//   { id: "siswa", end: 1252 },
//   { id: "prestasi", end: 54 },
// ];

// function animateCounters() {
//   counters.forEach((item) => {
//     const el = document.getElementById(item.id);
//     const rect = el.getBoundingClientRect();

//     if (rect.top < window.innerHeight && !el.dataset.started) {
//       el.dataset.started = "true";

//       anime({
//         targets: { value: 0 },
//         value: item.end,
//         easing: "easeOutExpo",
//         duration: 2000,
//         round: 1, // supaya angka bulat
//         update(anim) {
//           el.innerText = anim.animations[0].currentValue;
//         },
//       });
//     }
//   });
// }

// window.addEventListener("scroll", animateCounters);
// window.addEventListener("load", animateCounters);
