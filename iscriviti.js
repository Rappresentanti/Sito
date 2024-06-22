document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    fetch('path/to/your/backend/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById('status').textContent = 'Iscrizione avvenuta con successo!';
        document.getElementById('signup-form').reset();
      } else {
        document.getElementById('status').textContent = 'Errore nell\'iscrizione. Riprova.';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('status').textContent = 'Errore nell\'iscrizione. Riprova.';
    });
  });
  