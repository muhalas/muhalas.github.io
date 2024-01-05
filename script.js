// email JS
// function sendMail() {
//   var params = {
//     email_id: document.getElementById("email_id").value,
//     message: document.getElementById("message").value,
//   };
//   emailjs.send("service_97euy1r", "template_7npfzoh", params).then(function (res) {
//     alert("Success! " + res.status);
//   });
// }

function sendMail() {
  var templateParams = {
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_97euy1r", "template_7npfzoh", templateParams).then(
    function (error) {
      console.log("Email terkirim:", error);
      // Tampilkan alert setelah pengiriman berhasil
      alert("Gagal mengirim email. Silakan coba lagi!");
    },
    function (response) {
      console.log("Gagal mengirim email:", response);
      // Tampilkan alert jika pengiriman gagal
      alert("Email Berhasil Terkirim!.");
    }
  );
}

// const wrapper = document.querySelector(".wrapper");
// const carousel = document.querySelector(".carousel");
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const firstCardWidth = carousel.querySelector(".card").offsetWidth;
// const carouselChildrens = [...carousel.children];

// let isDragging = false,
//   startX,
//   startScrollLeft;

// // Get the number of cards that can fit inthe carousel at once
// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// // Insert copies of the last view cards to beginning of carousle for infinite scrolling
// carouselChildrens
//   .slice(-cardPerView)
//   .reverse()
//   .forEach((card) => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

// // Insert copies of the last view cards to beginning of carousle for infinite scrolling
// carouselChildrens.slice(0, cardPerView).forEach((card) => {
//   carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Add event listeners for the arrow buttons ti scroll the carousel left and right
// arrowBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
//   });
// });

// const dragStart = (e) => {
//   isDragging = true;
//   carousel.classList.add("dragging");
//   // Records the initial cursor and scroll position of the carousel
//   startX = e.pageX;
//   startScrollLeft = carousel.scrollLeft;
// };

// const dragging = (e) => {
//   if (!isDragging) return; // if isDragging is false return from here
//   // Update the scroll position of the carousel based on the cursor movement
//   carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// };

// const dragStop = () => {
//   isDragging = false;
//   carousel.classList.remove("dragging");
// };

// const autoPlay = () => {
//   if (window.innerWidth < 800) return; // Return if window is smaller than 800
//   // autoPlay the carousel after every 2500 ms
//   timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
// };
// autoPlay();

// const infiniteScroll = () => {
//   // If the carousel is at the beginning, scroll to the end
//   if (carousel.scrollLeft === 0) {
//     carousel.classList.add("no transition");
//     carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.scrollWidth;
//     carousel.classList.remove("no transition");
//   }
//   //   If carousel is at the end,scroll the beginning
//   else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//     carousel.classList.add("no transition");
//     carousel.scrollLeft = carousel.scrollWidth;
//     carousel.classList.remove("no transition");
//   }

//   clearTimeout(timeoutId);
//   if (!wrapper.matches(":hover")) autoPlay();
// };

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);
