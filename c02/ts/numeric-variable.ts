//建立變數
let price:number;
let quantity:number;
let total:number;

//給變數值
price = 65;
quantity = 14;

//計算
total = price * quantity;

/*
let cost_id = document.getElementById('cost') //可能為 HTMLElement 或 null
強轉型為 HTMLElement
*/
let cost_id = document.getElementById('cost') as HTMLElement;
cost_id.innerHTML="$" + total;
