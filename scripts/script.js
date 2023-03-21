window.addEventListener('DOMContentLoaded', () => {

  let menuBtn = document.querySelector('#menu');

  menuBtn.addEventListener('click', () => {
    menuBtn.parentElement.classList.toggle('menu-btn_active');
    menuBtn.nextElementSibling.classList.toggle('menu-list_active');
  });

});