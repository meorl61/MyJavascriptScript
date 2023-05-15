var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>系統維護中</h2>';
msg += '我們的伺服器將在下午3點到4點維護';
msg += 'During this time, there may be minor disruptions to service.</div>';

let element = document.createElement('div');
element.setAttribute('id', 'note');
element.innerHTML = msg;
document.body.appendChild(element);

document.getElementById('close').addEventListener('click', function(event){
    event.preventDefault();
    document.body.removeChild(element);


});

