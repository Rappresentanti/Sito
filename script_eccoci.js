document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  // Aggiungi qui la logica per inviare l'email al tuo server di newsletter
  alert('Grazie per esserti iscritto alla nostra newsletter, ' + email + '!');
});
// Funzione per ridimensionare il banner e il titolo al scroll
window.onscroll = function() {
  var header = document.getElementById('header');
  var banner = document.getElementById('banner');
  if (window.pageYOffset > 100) {
    banner.classList.add('smaller');
  } else {
    banner.classList.remove('smaller');
  }
};
