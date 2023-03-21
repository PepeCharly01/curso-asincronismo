const sum = (num1, num2) => {
    return num1 + num2;
}

const rest = (num1, num2) => {
    return num1 - num2;
}

const mult = (num1, num2) => {
    return num1 * num2;
}

const div = (num1, num2) => {
    return num1 / num2;
}

const calc = (num1, num2, callback) => {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));
console.log(calc(2, 8, rest));
console.log(calc(2, 5, mult));
console.log(calc(12, 2, div));

setTimeout(() => {
    console.log('Hola JavaScript');
}, 2000)

const grettin = (nombre) => {
    console.log(`Hola ${nombre}`);
}

setTimeout(grettin, 2000, 'Carlos');