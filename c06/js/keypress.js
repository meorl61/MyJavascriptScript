let messageElement = document.getElementById('message');
let lastKey = document.getElementById('lastKey');
let charDisplay = document.getElementById('charactersLeft');

messageElement.addEventListener('keyup',(event) => {
lastKey.innerHTML = `最後一個<br>key: ${event.key} <br>keycode:${event.keyCode}<br>code:${event.code}`
let textEntered = messageElement.value;
let counter = 180 - textEntered.length;
charDisplay.textContent = `已輸入${strlen(textEntered)},還剩下可輸入字數: ${counter}`;
} )