<<<<<<< Updated upstream
const btn = document.getElementById('option_button');
btn.addEventListener('click', () => {
  const menu = document.getElementById('list_menu');
  const burger = document.getElementById('burger');
  menu.classList.toggle('header_list_open');
  burger.classList.toggle('option_burger_open');
});
=======
const btn = document.getElementById('option_burger_button');
if (btn) {
  btn.style.backgroundColor = 'red';
  btn.addEventListener('click', () => {
    const menu = document.getElementById('menu_list');
    menu.classList.toggle('menu_list--open');
  });
}
>>>>>>> Stashed changes
