images = [
  {
    id: 17,
    image: "../",
  },
];

("use strict");

fetch("https://mhw-db.com/monsters")
  .then((response) => response.json())
  .then((monsters) => {
    console.log(monsters);

    monsters.forEach((el) => {
      let name = el.name;
      let type;
      let species;
      let description;
      name = el.name;

      console.log(el.name, el.type, el.species, el.description);
    });
  });
