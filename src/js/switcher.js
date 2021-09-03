const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
console.log(Theme);

const body = document.querySelector("body");
console.log(body);

const checkbox = document.querySelector(".theme-switch__toggle");
console.log(checkbox);

body.classList.add(Theme.LIGHT);
localStorage.setItem("class", Theme.LIGHT);

checkbox.addEventListener('change', (e) => {
    // console.log(e);
    
    if (body.classList.contains(Theme.LIGHT)) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem("class", Theme.DARK);
    } else {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem("class", Theme.LIGHT);
    }
});
