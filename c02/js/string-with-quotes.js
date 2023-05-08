"use strict";
let title;
let message;

title="特價優惠";
message="<a href=\"sale.html\">25% off!</a>";

let aaa=document.getElementById('title');
let bbb=document.getElementById('note');
aaa.innerText=title;
bbb.innerHTML=message; // 內容為html