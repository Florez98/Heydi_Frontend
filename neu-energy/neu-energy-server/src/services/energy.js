const getMaxEnergy = monthFound => {
    let maxEnergy = 0;

    monthFound.days.forEach(day => {
        day.hour_x_energy.forEach(hour => {
            if (hour > maxEnergy) {
                maxEnergy = hour;
            }
        });
    });

    return maxEnergy;
};

const injectEnergyPercent = (monthlyData, maxEnergy) => {
    monthlyData.days.forEach(day => {
        day.hour_x_energy = day.hour_x_energy
            .map(value => ({ watts: value, percentage: value / maxEnergy }));
    });
    return monthlyData.days;
};

module.exports = { getMaxEnergy, injectEnergyPercent };