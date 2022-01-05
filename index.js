const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// let totalBatteries = 0
// for (let n of numbers)
//     totalBatteris += n;


const totalBatteries = batteryBatches.reduce((acc, currentValue) => {
    return acc + currentValue;
}, 0);



