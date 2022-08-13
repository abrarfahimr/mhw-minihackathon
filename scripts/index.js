
let monsterImages = [
  {
    id: 17,
    image: "./asset/images/greatest_jagras.jpeg",
  },
  {
    id: 18,
    image: "./asset/images/monster-hunter-world-kulu-ya-ku.jpeg",
  },
  {
    id: 19,
    image: "./asset/images/Monster-Hunter-Rise-Pukei-Pukei-3.png",
  },
  {
    id: 20,
    image: "./asset/images/barroth.jpeg",
  },
  {
    id: 21,
    image: "./asset/images/jyratodus.jpg",
  },
  {
    id: 22,
    image: "./asset/images/tobi kadachi.jpeg",
  },
  {
    id: 23,
    image: "./asset/images/monster_hunter_world_Anjanath.jpeg",
  },
  {
    id: 24,
    image: "./asset/images/azure ratholos.png",
  },
  {
    id: 25,
    image: "./asset/images/bezelguese.webp",
  },
  {
    id: 26,
    image: "./asset/images/behemoth.jpeg",
  },
  {
    id: 27,
    image: "./asset/images/MHW_Deviljho_01.jpeg",
  },
  {
    id: 28,
    image: "./asset/images/diablos.jpeg",
  },
  {
    id: 29,
    image: "./asset/images/black-diablose.jpeg",
  },
  

]


index = 16;
i = 0;
const infoName = document.querySelector(".info__name");
const infoType = document.querySelector(".info__type");
const infoSpecies = document.querySelector(".info__species");
const infoParagraph = document.querySelector(".info__paragraph");
const infoImages = document.getElementById("images");
// next btn
const infoNext = document.querySelector(".info__next");
const infoBack = document.querySelector(".info__back");

fetch("https://mhw-db.com/monsters")
  .then((response) => response.json())
  .then((monsters) => {
    infoNext.addEventListener("click", (event) => {
      event.preventDefault();
      index = index + 1;
      i = i + 1;
      if (index === 29 || i === 13) {
        index = 16;
        i = 0
      }
      infoName.innerText = monsters[index].name;
      infoType.innerText = monsters[index].type;
      infoSpecies.innerText = monsters[index].species;
      infoParagraph.innerText = monsters[index].description;
      infoImages.setAttribute('src', monsterImages[i].image);
      
    }) 
});

// back btn
fetch("https://mhw-db.com/monsters")
  .then((response) => response.json())
  .then((monsters) => {
    infoBack.addEventListener("click", (event) => {
     index = index - 1;
      i = i - 1;
      if (index === -1 || i === -1) {
        index = 16;
        i = 0
      }
      infoName.innerText = monsters[index].name;
      infoType.innerText = monsters[index].type;
      infoSpecies.innerText = monsters[index].species;
      infoParagraph.innerText = monsters[index].description;
      infoImages.setAttribute('src', monsterImages[i].image);
    }) 
});

