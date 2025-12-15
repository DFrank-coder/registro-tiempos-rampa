const fechaHoy = new Date().toLocaleDateString('es-AR');
const titulo = document.querySelector('h1');
titulo.textContent = `Registro de Tiempos en Rampa ✈️ - ${fechaHoy}`;
