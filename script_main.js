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

// Rileva se l'utente sta utilizzando un dispositivo mobile
function isMobile() {
  return window.matchMedia("only screen and (max-width: 760px)").matches;
}

// Gestione del comportamento del logo e del menu
document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const logo = document.getElementById('logo');
  const links = menu.querySelectorAll('a');

  function showMenu() {
    menu.classList.add('show');
    logo.style.transform = 'scale(1.5)';
    links.forEach((link, index) => {
      link.style.transitionDelay = `${index * 0.2}s`;
      setTimeout(() => {
        link.style.opacity = '1';
        link.style.transform = 'translateX(20px)';
      }, 50);
    });
  }

  function hideMenu() {
    links.forEach(link => {
      link.style.opacity = '0';
      link.style.transform = 'translateX(-50px)';
    });
    setTimeout(() => {
      menu.classList.remove('show');
      logo.style.transform = 'scale(1)';
    }, 500);
  }

  if (isMobile()) {
    showMenu();
  } else {
    logo.addEventListener('click', function() {
      if (menu.classList.contains('show')) {
        hideMenu();
      } else {
        showMenu();
      }
    });
  }
});
