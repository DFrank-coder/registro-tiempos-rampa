function guardarRegistrosPorVuelo() {
  const datosVuelo = JSON.parse(localStorage.getItem('datosVuelo'));
  if (!datosVuelo || !datosVuelo.vuelo) {
    alert('Primero cargá el número de vuelo');
    return;
  }

  const vuelo = datosVuelo.vuelo;
  const registrosActuales = JSON.parse(localStorage.getItem('registrosRampa')) || [];

  const registrosPorVuelo =
    JSON.parse(localStorage.getItem('registrosPorVuelo')) || {};

  registrosPorVuelo[vuelo] = registrosActuales;

  localStorage.setItem(
    'registrosPorVuelo',
    JSON.stringify(registrosPorVuelo)
  );

  alert(`Registros guardados para el vuelo ${vuelo}`);
}
