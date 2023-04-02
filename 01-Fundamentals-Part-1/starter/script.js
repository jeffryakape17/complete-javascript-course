/*const markMass = 95;
const johnMass = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const markHigherBMI = markMass / (markHeight ** 2) > johnMass / (johnHeight ** 2);
console.log('mark higher BMI? ' + markHigherBMI);
*/

/*
const country = 'Indonesia';
const continent = 'Asia';
let population = '281';
console.log(country);
console.log(continent);
console.log(population);

const isIsland = true;
const language = 'Bahasa'
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log(population / 2);
console.log(population + 1);
console.log(population > 6);
console.log(population < 33);
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
const descriptionTemplate = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
console.log(descriptionTemplate);
*/

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough === true) {
    console.log('Sarah can start driving license 😊');
} else {
    console.log('Sarah cannot start driving license 😣');
}

const birthYear = 1986;
let century;

if (birthYear == 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);