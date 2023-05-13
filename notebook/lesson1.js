// npm install prompt-sync
const prompt = require('prompt-sync')({sigint:true});
let name = prompt("請輸入姓名:");
console.log('hello'+name);

const createPrompt = require('prompt-sync');
const prompt1 = createPrompt();
const result = prompt1('What is your favorite number: ');
console.log(result);