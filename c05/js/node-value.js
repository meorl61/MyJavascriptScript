let elementTwo = document.getElementById('two');
let nodeTwo = elementTwo.firstChild;
console.log(nodeTwo.nodeValue);
console.log(nodeTwo.nextSibling);
console.log(nodeTwo.nextSibling.firstChild.nodeName);
console.log(nodeTwo.nextSibling.firstChild.nodeType);
console.log(nodeTwo.nextSibling.firstChild);
console.log(elementTwo.innerHTML);
console.log(elementTwo.innerText);
nodeTwo.nodeValue=nodeTwo.nodeValue.replace('pine nuts','aaaa');

//nodeTwo.nodeValue=nodeTwo.nodeValue.replace('pine nuts','aaaa');
let elementThree = document.getElementById('three');