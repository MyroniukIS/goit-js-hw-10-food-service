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
checkbox.addEventListener('change', (e) => {
    console.log(e);
    // body.classList.remove(Theme.LIGHT);
    body.classList.toggle(Theme.DARK);
    if (body.classList.contains(Theme.DARK)) {
        body.classList.remove(Theme.LIGHT);
    }
});