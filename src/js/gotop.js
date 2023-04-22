const gotopWrapper = document.querySelector('.gotop-wrapper');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    gotopWrapper.classList.add('show');
  } else {
    gotopWrapper.classList.remove('show');
  }
});

gotopWrapper.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
