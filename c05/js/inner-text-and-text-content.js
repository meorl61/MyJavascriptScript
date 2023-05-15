let Elementone=document.getElementById("one");
let innerhtml_string = Elementone.innerHTML;
let innerText_string = Elementone.innerText;
let textContent_string = Elementone.textContent;

console.log(one.textContent)
console.log(one.innerHTML)
console.log(one.innerText)
let firstchild=one.firstChild;
let nest=firstchild.nextSibling;
console.log(firstchild.firstChild.nodeValue);
console.log(nest.nodeValue);

let msg = '<p>文字textContent:' + textContent_string +'</p>'
msg += '<p>內容innerText:' + innerText_string + '</p>'

let elementResults = document.getElementById('scriptResults')
elementResults.innerHTML = msg
Elementone.textContent  = '被取代了'
