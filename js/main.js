const container = document.querySelector(".container");
const greyBlock = container.querySelector(".block-grey");
const colors = {
  item1: "block-red",
  item2: "block-yellow",
  item3: "block-green",
};
container.addEventListener("mouseover", function (e) {
  let blockActive = e.target;
  let colorItem = blockActive.className.split(" ")[1];
  if (colorItem in colors) {
    greyBlock.classList.add(colors[colorItem]);
  }
});
container.addEventListener("mouseout", function () {
  let greyClass = greyBlock.className.split(" ");
  if (greyClass.length > 2) {
    greyBlock.className = greyClass.splice(0, 2).join(" ");
  }
});
