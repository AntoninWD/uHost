var backdrop =  document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectButtons = document.querySelectorAll('.plan button');
var modalButton = document.querySelector('.modal button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for (var i = 0; i < selectButtons.length; i++) {
   selectButtons[i].addEventListener('click', function(){
   modal.classList.add('open');
   backdrop.classList.add('open');
   });
}
backdrop.addEventListener('click', function(){
mobileNav.classList.remove('open');
 closeModal();
});
if (modalButton) {
 modalButton.addEventListener('click', closeModal);
}

 function closeModal() {
  if (modal) {
   modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
 }

toggleButton.addEventListener('click', function(){
mobileNav.classList.add('open');
backdrop.classList.add('open');
});

