const age1 = [12, 13, 14, 15, 16];
const age2 = [22, 23, 34, 25];
const age3 = [31, 34, 35];

// const totalAges = age1.concat(age2).concat(55).concat(age3);
const totalAges = [...age1, ...age2, 55, ...age3];
console.log(totalAges);

const maximum = Math.max(...totalAges);
console.log(maximum);
