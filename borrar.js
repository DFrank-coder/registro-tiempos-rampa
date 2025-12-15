function borrarRegistros() {
  if (confirm('¿Seguro que querés borrar todos los registros?')) {
    localStorage.removeItem('registrosRampa');
    location.reload();
  }
}
