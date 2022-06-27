'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// const btnsOpenModal = document.querySelector('.show-modal');
// Whenever we use queurySelector with a selector which actually matches multiple ElementInternals, only the first one will get selected

const btnsOpenModal = document.querySelectorAll('.show-modal');
// return a nodelist

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//selecting multiple elements with same class
for (let i = 0; i < btnsOpenModal.length; i++) {
  const ele = btnsOpenModal[i];
  ele.addEventListener('click', openModal);
}

//if you want to use the same function in multiple event listeners,then
//you need to specify that function as a separate function and then you can pass
//that function as an argument to multiple "add event listener" method
const closeModal = e => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  //   console.log('Key pressed');
  //   console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
