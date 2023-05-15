let newLiElement = document.createElement('li');
//newLiElement.textContent = '新項目';

let newTextNode = document.createTextNode('新項目');
newLiElement.appendChild(newTextNode);


//let ulElement = document.querySelector('ul');
//let ulElement = document.getElementById('todo');
let ulElement = document.getElementsByTagName('ul')[0];
console.log(ulElement);

ulElement.appendChild(newLiElement);
