// Agregar y exportar los 2 métodos para leer y actualizar JSON
const fs = require('fs');

function getEnergyData(route) {
  try {
    // Se lee el archivo que contiene la data
    const data = fs.readFileSync(route, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error getting JSON data ->', error);
    return null;
  }
}

function updateEnergyData(route, newData) {
  try {
    const currentContent = getEnergyData(route);

    if (currentContent) {
      // Realiza las actualizaciones necesarias en contenidoActual

      // Convierte el objeto actualizado a JSON
      const newContent = JSON.stringify(newData, null, 2);

      // Escribe el archivo actualizado
      fs.writeFileSync(route, newContent, 'utf8');
      console.log('Data update success.');
    }
  } catch (error) {
    console.error('Error updating JSON data ->', error);
  }
}

module.exports = { getEnergyData, updateEnergyData };
