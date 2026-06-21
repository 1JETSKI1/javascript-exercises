const convertToCelsius = function(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius * 9/5) + 32) * 10) / 10;
};

console.log(convertToCelsius(100));     // expect 37.8
console.log(convertToFahrenheit(73.2)); // expect 163.8
console.log(convertToCelsius(-100));    // expect -73.3
console.log(convertToFahrenheit(-10));  // expect 14

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

