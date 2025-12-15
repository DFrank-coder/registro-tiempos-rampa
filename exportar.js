function exportarCSV() {
  const registros = JSON.parse(localStorage.getItem('registrosRampa')) || [];

  let csv = "Evento,Hora\n";
  registros.forEach(r => {
    csv += `${r.evento},${r.hora}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'registros_rampa.csv';
  a.click();
}
