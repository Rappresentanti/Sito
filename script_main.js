// Imposta la data e l'ora del countdown (esempio: 31 dicembre 2024 23:59:59)
var countDownDate = new Date("Oct 6, 2024 23:59:59").getTime();

// Aggiorna il countdown ogni secondo
var x = setInterval(function() {

  // Ottieni la data e l'ora di oggi
  var now = new Date().getTime();

  // Trova la distanza tra ora e la data del countdown
  var distance = countDownDate - now;

  // Calcoli per giorni, ore, minuti e secondi
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Visualizza il risultato nell'elemento con id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Se il countdown è finito, scrivi del testo
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
function toggleMenu() {
  var sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.toggle('active');
}