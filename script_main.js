// Imposta la data e l'ora del countdown (esempio: 31 dicembre 2024 23:59:59)
const countDownDate = new Date("Oct 6, 2024 23:59:59").getTime();

// Funzione per aggiornare il countdown
function updateCountdown() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(interval);
    countdownElement.innerHTML = "EXPIRED";
  }
}

// Aggiorna il countdown ogni secondo
const interval = setInterval(updateCountdown, 1000);

function cambiaOrientamento(orientamento) {
  document.body.className = orientamento;
}