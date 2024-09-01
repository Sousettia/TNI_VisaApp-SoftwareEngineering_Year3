const boxContainer = document.querySelector(".boxContainer");
const saluteTextContainer = document.querySelector(".saluteTextContainer");
const saluteImgContainer = document.querySelector(".saluteImgContainer");
const authorName = document.querySelector(".name");
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer");
const jobTitles = document.querySelectorAll(".jobTitle");
const projectsTitle = document.querySelector(".projectsTitle");
const projectDesc = document.querySelector(".proDesc");
const phones = document.querySelectorAll(".phone");
const laptop = document.querySelector(".laptop");

for (let i = 0; i < 369; i++) {
  const list = [
    4, 5, 6, 7, 8, 9, 12, 13, 18, 19, 22, 23, 24, 25, 26, 27, 30, 31, 35, 36,
    45, 46, 47, 48, 49, 50, 53, 54, 59, 60, 63, 64, 65, 66, 67, 68, 71, 72, 76,
    77, 86, 87, 94, 95, 100, 101, 104, 105, 112, 113, 116, 117, 127, 128, 135,
    136, 141, 142, 145, 146, 153, 154, 155, 156, 168, 169, 176, 177, 182, 183,
    186, 187, 194, 195, 196, 197, 209, 210, 217, 218, 223, 224, 227, 228, 235,
    236, 237, 238, 250, 251, 258, 259, 264, 265, 268, 269, 276, 277, 280, 281,
    291, 292, 293, 294, 295, 296, 299, 300, 301, 302, 305, 306, 309, 310, 311,
    312, 313, 314, 317, 318, 322, 323, 332, 333, 334, 335, 336, 337, 340, 341,
    342, 343, 346, 347, 350, 351, 352, 353, 354, 355, 358, 359, 363, 364,
  ];

  const el = document.createElement("div");
  el.classList = list.includes(i) ? "box active" : "box";
  boxContainer.appendChild(el);
}

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  saluteTextContainer.style.transform = `translateY(${offsetY * 0.1}px)`;
  saluteImgContainer.style.transform = `translate(${offsetY * 0.4}px,${
    offsetY * 0.7
  }px)`;
  authorName.style.transform = `translateX(${offsetY * 0.1}px)`;
  jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`;
  jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;
  jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`;
  jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
  projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`;
  phones[0].style.transform = `translateX(calc(500vh - ${offsetY}px))`;
  laptop.style.transform = `translateX(calc(600vh - ${offsetY}px))`;
  phones[1].style.transform = `translateX(calc(750vh - ${offsetY}px))`;
});
