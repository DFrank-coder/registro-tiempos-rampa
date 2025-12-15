function obtenerHora() {
  const ahora = new Date();
  return ahora.toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

function registrar(evento) {
  const hora = obtenerHora();
  const log = document.getElementById('log');

  const p = document.createElement('p');
  p.textContent = `${evento}: ${hora}`;
  log.appendChild(p);

  const registros = JSON.parse(localStorage.getItem('registrosRampa')) || [];
  registros.push({ evento, hora });
  localStorage.setItem('registrosRampa', JSON.stringify(registros));
}

window.onload = () => {
  const registros = JSON.parse(localStorage.getItem('registrosRampa')) || [];
  const log = document.getElementById('log');

  registros.forEach(r => {
    const p = document.createElement('p');
    p.textContent = `${r.evento}: ${r.hora}`;
    log.appendChild(p);
  });
};
