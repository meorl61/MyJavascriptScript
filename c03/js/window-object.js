<<<<<<< HEAD
//windows 代表整個瀏覽器視窗
//Document 代表物件框
//window.document.body.innerHTML = "hello world";
//{$window.innerHeight} 瀏覽器inner高度
//{$window.innerWidth} 瀏覽器inner寬度

let msg = `<h2>browser window</h2>`;
msg += `<p>brower_width: ${window.innerWidth}</p>`;
msg += `<p>brower_height: ${window.innerHeight}</p>`;
msg += `<p>使用者的螢幕寬度: ${window.screen.width}</p>`;
msg += `<p>使用者的螢幕高度: ${window.screen.height}</p>`;


let info_element = document.getElementById('info');
info_element.innerHTML = msg;
/*
window.alert(`現在時間是` + new Date() 
+ `現在browser位置:${window.location}` );
*/
let favDialog_element=document.getElementById('favDialog');
favDialog_element.showModal();
//favDialog_element.show();
=======
let msg = '<h2>browser window</h2>'
msg += `<p>browser_width:${window.innerWidth}</p>`
msg += `<p>browser_height:${window.innerHeight}</p>`
msg += `<p>螢幕寬度:${window.screen.width}</p>`
msg += `<p>螢幕高度:${window.screen.height}</p>`
msg += `<p>手機螢幕寬度:${window.screen.availWidth}</p>`
msg += `<p>手機螢幕高度:${window.screen.availHeight}</p>`
info_element = document.getElementById('info')
info_element.innerHTML = msg;
//window.alert(`現在browser位置${window.location}`)
favDialog_element = document.getElementById('favDialog')
favDialog_element.showModal();
//favDialog_element.show();
>>>>>>> e13eb607ad179c5d8536367b7d2984a0a7403dae
