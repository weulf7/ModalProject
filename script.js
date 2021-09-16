'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const btnModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModalF = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener('click', openModal);
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
   closeModalF();
  }
});

closeModal.addEventListener('click', closeModalF);

overlay.addEventListener('click', closeModalF);
