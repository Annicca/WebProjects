const btn = document.getElementById('option_button');
btn.addEventListener('click', () => {
  const menu = document.getElementById('list_menu');
  const burger = document.getElementById('burger');
  menu.classList.toggle('header_list_open');
  burger.classList.toggle('option_burger_open');
});
