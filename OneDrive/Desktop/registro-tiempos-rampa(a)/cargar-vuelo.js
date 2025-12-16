function cargarVueloGuardado() {
  const datosVuelo = JSON.parse(localStorage.getItem('datosVuelo'));
  if (!datosVuelo || !datosVuelo.vuelo) {
    alert('Ingresá un vuelo primero');
    return;
  }

  const vuelo = datosVuelo.vuelo;
  const registrosPorVuelo =
    JSON.parse(localStorage.getItem('registrosPorVuelo')) || {};

  const registros = registrosPorVuelo[vuelo] || [];

  localStorage.setItem('registrosRampa', JSON.stringify(registros));
  location.reload();
}
