// dinamic insert li 
let ul = document.querySelector('ul');
let li = document.createElement('li');
li.innerText = 'new li';
li.className='cool';
ul.appendChild(li);

let first_hot_element = document.querySelector('li.hot'); //只會抓第一個
first_hot_element.className = 'cool';

//一次取出多個
let all_elements = document.querySelectorAll('li.hot');
console.log(all_elements.length);

//querySelectorAll foreach

/* forEach 方法一
all_elements.forEach( 
    function(element) {
        element.className = 'complete';
    });
*/

/*forEach 方法二
all_elements.forEach(
    // 箭頭表 anonymous function
    currentElement => {
        currentElement.className = 'complete';
    });
*/

for (let i = 0; i < all_elements.length; i++) {
    all_elements[i].className = 'complete';
}   

