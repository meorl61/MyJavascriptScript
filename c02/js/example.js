let greeting = "您好";
let my_name = "徐先生";
let message = `${greeting},  ${my_name} 請檢查以下訂單:`;
let greetingElement = document.getElementById('greeting');
greetingElement.innerText=message;

let sign = "客家小館";

let userSign_element = document.getElementById('userSign');
userSign_element.innerText=sign;

let tiles = sign.length;
let tiles_element = document.getElementById('tiles');
tiles_element.innerText=tiles.toString();

let subTotal = tiles * 5;
let subTotal_element = document.getElementById('subTotal');
subTotal_element.innerText="$ " + subTotal.toString();

let shipping= 7
let shipping_element = document.getElementById('shipping');
shipping_element.innerText="$ " + shipping.toString();

let grandTotal = subTotal + shipping;
let grandTotal_element =document.getElementById('grandTotal');
grandTotal_element.innerText="$ " + String(grandTotal);










