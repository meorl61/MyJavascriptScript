let addorderElement = document.getElementById('addorder');
let tableElement = document.getElementById('orderlist');
addorderElement.addEventListener('click', event => {
    let newttr=document.createElement('tr');
    let newtd=document.createElement('td');
    newtd.innerText="1";
    newttr.appendChild(newtd);
    console.log(newttr);
    newtd=document.createElement('td');
    newtd.innerText="20230516001";
    newttr.appendChild(newtd);
    console.log(newttr);
    newtd=document.createElement('td');
    newtd.innerText="test01";
    newttr.appendChild(newtd);
    console.log(newttr);
    newtd=document.createElement('td');
    newtd.innerText="新訂單";
    newttr.appendChild(newtd);
    console.log(newttr);
    newtd=document.createElement('td');
    newtd.innerHTML="<span class=\"edit\">修</span><span class=\"dele\">刪</span>";
    newttr.appendChild(newtd);
    console.log(newttr);
    tableElement.appendChild(newttr);
})

