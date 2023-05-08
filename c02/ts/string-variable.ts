let user_name:string;
let message:string;

user_name="Maple"
message="hello"

let user_span = document.getElementById('name') as HTMLElement;
let note_span = document.getElementById('note') as HTMLElement;

/*
 innerHTML 是 W3C 規定的標準寫法，
 而 innerText 則是除了可以用來取得 HTML 元素之外，
   還會把元素的 HTML 標籤去除掉，
   但 innerText 並非 W3C 所規定的標準寫法，
   而且僅適用於 IE 瀏覽器
 */
user_span.innerHTML = user_name;
note_span.innerText = message;




