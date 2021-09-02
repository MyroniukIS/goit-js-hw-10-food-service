import data from "../db/menu.json"
// console.log(data);
import menuTemplate from "../templates/menuTemplate.hbs"
// console.log(menuTemplate(data));
const template = menuTemplate(data);
// console.log(template);

const body = document.querySelector("body");
// console.log(body);

const ul = document.querySelector(".js-menu");
// console.log(ul);
ul.insertAdjacentHTML("afterbegin", template);