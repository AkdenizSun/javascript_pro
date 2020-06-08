//today forecast
const kelvin = 293;
//convert today forecast in celsius
let celsius = kelvin - 273;
//convert today forecast in fahrenheit and round the number
let fahrenheit = Math.floor(celsius * (9/5) + 32)
//convert today forecast in Newton scale and ound the number
let newton = Math.floor(celsius *(33/100) )
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${newton} degrees Newton.`);