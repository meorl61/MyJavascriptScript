"use strict";
//建立變數
let price;
let quantity;
let total;
//給變數值
price = 65;
quantity = 14;
//計算
total = price * quantity;
/*
let cost_id = document.getElementById('cost') //可能為 HTMLElement 或 null
強轉型為 HTMLElement
*/
let cost_id = document.getElementById('cost');
cost_id.innerHTML = "$" + total;
