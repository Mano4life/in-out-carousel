let next = document.getElementById("next");
let prev = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listItem = document.querySelector(".carousel .list");
let thumbnail = document.querySelector(".carousel .thumbnail");
let itemTopic = document.querySelectorAll(".carousel .list .item .topic");
let itemDes = document.querySelectorAll(".carousel .list .item .des");
let thumbnailTopic = document.querySelectorAll(".carousel .thumbnail .item .title");
let thumbnailDes = document.querySelectorAll(".carousel .thumbnail .item .des");

//pre setting topic and description.
itemTopic[0].innerHTML = thumbnailTopic[3].innerHTML;
itemDes[0].innerHTML = thumbnailDes[3].innerHTML;

next.onclick = function () {
  showSlider("next");
};
prev.onclick = function () {
  showSlider("prev");
};

let timeRunning = 1500;
let runTimeOut;

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
  itemTopic = document.querySelectorAll(".carousel .list .item .topic");
  itemDes = document.querySelectorAll(".carousel .list .item .des");
  thumbnailTopic = document.querySelectorAll(".carousel .thumbnail .item .title");
  thumbnailDes = document.querySelectorAll(".carousel .thumbnail .item .des");

  if (type === "next") {
    listItem.appendChild(itemSlider[0]);
    thumbnail.appendChild(itemThumbnail[0]);
    carousel.classList.add("next");

    itemTopic[1].innerHTML = thumbnailTopic[0].innerHTML;
    itemDes[1].innerHTML = thumbnailDes[0].innerHTML;

  } else {
    let positionLastItem = itemSlider.length - 1;
    listItem.prepend(itemSlider[positionLastItem]);
    thumbnail.prepend(itemThumbnail[positionLastItem]);
    carousel.classList.add("prev");

    itemTopic[3].innerHTML = thumbnailTopic[2].innerHTML;
    itemDes[3].innerHTML = thumbnailDes[2].innerHTML;
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
  }, timeRunning);
}
