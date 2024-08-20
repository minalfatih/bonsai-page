//
document.querySelectorAll(".landing ul li").forEach((li) => {
  let checkIcon = document.createElement("i");
  checkIcon.className = "fa-solid fa-check";
  li.appendChild(checkIcon);
});

document.querySelector(".btn").onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    document.querySelector(".workflow .price span").textContent =
      +document.querySelector(".workflow .price span").textContent * 2;
    document.querySelector(".workflow-plus .price span").textContent =
      +document.querySelector(".workflow-plus .price span").textContent * 2;
    document.querySelector(".workflow .price sub").textContent = "/yearly";
    document.querySelector(".workflow-plus .price sub").textContent = "/yearly";
  } else {
    document.querySelector(".workflow .price span").textContent =
      +document.querySelector(".workflow .price span").textContent / 2;
    document.querySelector(".workflow-plus .price span").textContent =
      +document.querySelector(".workflow-plus .price span").textContent / 2;
    document.querySelector(".workflow .price sub").textContent = "/monthly";
    document.querySelector(".workflow-plus .price sub").textContent =
      "/monthly";
  }
};
