function guardarDatosVuelo() {
  const vuelo = document.getElementById('vuelo').value;
  const matricula = document.getElementById('matricula').value;
  const aeropuerto = document.getElementById('aeropuerto').value;

  const datos = { vuelo, matricula, aeropuerto };
  localStorage.setItem('datosVuelo', JSON.stringify(datos));

  alert('Datos del vuelo guardados');
}

window.onload = () => {
  const datos = JSON.parse(localStorage.getItem('datosVuelo'));
  if (datos) {
    document.getElementById('vuelo').value = datos.vuelo || '';
    document.getElementById('matricula').value = datos.matricula || '';
    document.getElementById('aeropuerto').value = datos.aeropuerto || '';
  }
};
