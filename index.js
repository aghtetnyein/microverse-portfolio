const worksData = [
  {
    id: 1,
    title: "Project 1",
    image: "./assets/images/work-img-1.png",
    description:
      "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },
  {
    id: 2,
    title: "Project 2",
    image: "./assets/images/work-img-1.png",
    description:
      "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },
  {
    id: 3,
    title: "Project 3",
    image: "./assets/images/work-img-1.png",
    description:
      "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },
  {
    id: 4,
    title: "Project 4",
    image: "./assets/images/work-img-1.png",
    description:
      "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },
];

const navModal = document.getElementById("navigation-modal");
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const navLinks = document.querySelectorAll("#navigation-modal a");
const worksPopupClose = document.querySelector("#works-popup #close");
const worksPopup = document.querySelector("#works-popup");

const worksGrid = document.querySelector("#works .works-grid");
let modalWork = {};

worksData.forEach((work) => {
  worksGrid.innerHTML += `
    <div class="work-item">
      <div class="work-item-content">
        <h3>${work.title}</h3>
        <p>
          ${work.description.trim().substring(0, 150)}...
        </p>
        <ul class="tags">
          <li class="tag-item">css</li>
          <li class="tag-item">html</li>
          <li class="tag-item">bootstrap</li>
          <li class="tag-item">Ruby</li>
        </ul>
      </div>
      <button class="see-project" type="button">See Project</button>
    </div>
  `;
});

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

// works pop up section
const seeProjBtns = document.querySelectorAll(".see-project");
const sampleProjectBtns = document.querySelectorAll(".sample-project-btn");
const modalTitle = document.querySelector("#works-popup h3");
const modalDesc = document.querySelector("#works-popup p");

sampleProjectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    worksPopup.style.display = "flex";
    worksPopup.style.opacity = "100%";
    disableScroll();
  });
});

seeProjBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalWork = worksData.find(
      (work) => work.title === btn.previousElementSibling.children[0].innerHTML
    );
    modalTitle.innerHTML = modalWork.title;
    modalDesc.innerHTML = modalWork.description;
    worksPopup.style.display = "flex";
    worksPopup.style.opacity = "100%";
    disableScroll();
  });
});

worksPopupClose.addEventListener("click", () => {
  modalTitle.innerHTML = "Multi Post Stories";
  modalDesc.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it 1960s with the releaLorem Ipsum is simply
  dummy text of the printing and typesetting industry. Lorem Ipsum
  has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it
  1960s with the releax map lapora verita.`;
  worksPopup.style.display = "none";
  worksPopup.style.opacity = "0";
  enableScroll();
});

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
