<<<<<<< HEAD

function updateMessage(id,message){
    let message_element = document.getElementById(id);
    message_element.innerText = message;
}

let id = "message";
let msg = "加入會員可以得到30% off 的優待券";
updateMessage(id,msg);

=======
function updateMessage(message){
    let message_element = document.getElementById('message')
    message_element.innerText = message
}

let msg = "加入會員可以得到10% off 的優待卷"
updateMessage(msg)
>>>>>>> e13eb607ad179c5d8536367b7d2984a0a7403dae
