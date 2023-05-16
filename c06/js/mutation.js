//let classbuttonelement = document.getElementsByClassName('button')[0];
//let classbuttonelement = document.querySelector('.button');
let classbuttonelement = document.querySelector('a.add');
//let ulelement = document.getElementsByTagName('ul')[0];
let ulelement = document.querySelector('ul');
let countelement = document.querySelector('#counter');

classbuttonelement.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Button Clicked');
    let linum = ulelement.getElementsByTagName('li').length;
    let createaddlist = document.createElement('li');
//    createaddlist.innerText = 'New Item';
let textNode = document.createTextNode('New Item'+linum);
    createaddlist.appendChild(textNode);  
    ulelement.appendChild(createaddlist);

})

const observer = new MutationObserver(function (mutations) {
    let listItems = ulelement.getElementsByTagName('li').length;
    countelement.innerHTML=listItems;
console.log('mutations');
  });
  
  
observer.observe(ulelement, {
    childList: true,
    attributes: true,
    characterData: true,
  });

