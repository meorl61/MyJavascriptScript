const createPrompt = require('prompt-sync');

const prompt = createPrompt();

const result = prompt('What is your favorite number: ');
console.log(result);