const btn = document.getElementById('option_button');
btn.addEventListener('click', () => {
  const menu = document.getElementById('list_menu');
  menu.classList.toggle('header_list_open');
});
