//建立變數  var let const  
// 字串可用單引號, 也可用雙引號, 結束要用; 
let my_name = "Maple";
console.log(my_name); // console 輸出
let first_name = "Hua";
console.log(first_name); // console 輸出
let end_name = "xxx";
console.log(end_name); // console 輸出

let today = new Date();
let hourNow = today.getHours();
let greeting:string;  //無資料時, 可用型別

if(hourNow > 18) {
    greeting = 'Good evening!';
} else if(hourNow>12){
    greeting = 'Good afternoon!';
} else if (hourNow>0){
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
document.write('<h3>'+ greeting +'</h3>');
console.log(greeting);