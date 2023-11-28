let carFuel;
let carSize;

function myFunc(carSize, carFuel) {
    return console.log(`заправка для ${carSize} авто, тип паливa ${carFuel}`)
}


console.log(myFunc('S', 'gas'))
console.log(myFunc('S', 'diesle'))
console.log(myFunc('M', 'gas'))
console.log(myFunc('M', 'diesel'))

console.log(myFunc('L', 'gas'))
console.log(myFunc('L', 'diesle'))
console.log(myFunc('XL', 'gas'))
console.log(myFunc('XL', 'diesle'))

