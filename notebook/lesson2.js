const prompt = require('prompt-sync')({ sigint: true });
let x = parseInt(prompt("請輸入X值:"));
let subtotal = (x + 1) * 5;
let shipping = 0.5 * (x + 1);

let total = subtotal + shipping;
console.log(total);