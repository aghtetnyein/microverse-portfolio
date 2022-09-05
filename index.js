const navModal = document.getElementById("navigation-modal");
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const navLinks = document.querySelectorAll("#navigation-modal a");

menu.addEventListener("click", () => {
  navModal.style.left = 0;
  disableScroll();
});

close.addEventListener("click", () => {
  navModal.style.left = "100vw";
  enableScroll();
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    navModal.style.left = "100vw";
    enableScroll();
  });
}

// call this to Disable
function disableScroll() {
  var xPos = window.scrollX;
  var yPos = window.scrollY;
  window.onscroll = () => {
    window.scroll(xPos, yPos);
  };
}

// call this to Enable
function enableScroll() {
  window.onscroll = "";
}
