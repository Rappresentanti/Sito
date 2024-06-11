window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var logo = document.querySelector('.logo');
  var socialIcons = document.querySelector('.social-icons');
  
  if (window.scrollY > 100) {
    header.classList.add('small-header');
    logo.classList.add('small-logo');
    socialIcons.classList.add('social-icons-right');
  } else {
    header.classList.remove('small-header');
    logo.classList.remove('small-logo');
    socialIcons.classList.remove('social-icons-right');
  }
});
