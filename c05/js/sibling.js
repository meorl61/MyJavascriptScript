let two_element = document.getElementById('two');

// 取得鄰居的元件
var previous_element=two_element.previousElementSibling;
var next_element=two_element.nextElementSibling;
previous_element.className='complete';
next_element.className='cool';

// two_element.before(document.createElement('h1'));

