
function updateMessage(id,message){
    let message_element = document.getElementById(id);
    message_element.innerText = message;
}

let id = "message";
let msg = "加入會員可以得到30% off 的優待券";
updateMessage(id,msg);

