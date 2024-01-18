const fs = require('fs');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const months = Array.from({ length: 12 }, (_, i) => i);
console.log(months);

const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

const hoursInDay = Array.from({ length: 24 }, (_, i) => i + 1);

function generateDailyEnergy() {
  return hoursInDay.map((v, i) => getRandomNumber(50, 200));
}

function generateMonthlyEnergy() {
  return daysInMonth.map(day => ({
    day: day,
    hour_x_energy: generateDailyEnergy()
  }));
}

function generateYearlyEnergy(year) {
  return {
    year: year,
    months: months.map((month, index) => ({
      month: month,
      days: generateMonthlyEnergy()
    }))
  };
}

function generateEnergyData(startYear, endYear) {
  const energyData = [];

  for (let year = startYear; year <= endYear; year++) {
    energyData.push(generateYearlyEnergy(year));
  }

  return energyData;
}

const energyData = generateEnergyData(2022, 2025);

const jsonData = JSON.stringify(energyData, null, 2);

fs.writeFileSync('./src/db/energy_data.json', jsonData);

console.log('Energy data generated in energy-data.json');
