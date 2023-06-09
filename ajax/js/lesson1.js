let sarea_array = []
let sareaElement = document.getElementById('sarea');
let sarea_map = new Map();

sareaElement.addEventListener('change', (event) => {
    let selectedIndex = sareaElement.selectedIndex;
    selectedValue = sareaElement.options[selectedIndex].value
    if (sarea_array.includes(selectedValue)) {
        console.log('有這個行政區');
        console.log(sarea_array);
        let youbike = sarea_map.get(event.target.value);
        let youbiketext = `行政區:${youbike.sarea}<br>站名:${youbike.sna}<br>空位數量:${youbike.sbi}<br>狀態:${youbike.bemp}`;
        document.getElementById("youbiketext").innerHTML = youbiketext;
    }
});

function reqListener() {
    let youbikedata = JSON.parse(this.responseText);

    for (const youbike of youbikedata) {
        sarea_array.push(youbike.sarea);
        sarea_map.set(youbike.sarea, youbike);
    }

    sarea_array = [...new Set(sarea_array)];
    let optionElement = document.createElement('option');
    optionElement.textContent = '請選擇行政區';
    sareaElement.appendChild(optionElement);

    for (const area of sarea_array) {
        let optionElement = document.createElement('option');
        optionElement.textContent = area;
        sareaElement.appendChild(optionElement);
    }
    
}

const windowload = (event) => {
    console.log('網頁已經全部被載入');
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    req.send();
}

window.addEventListener('load', windowload);


