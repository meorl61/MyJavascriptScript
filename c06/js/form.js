let formElement = document.getElementById('formSignup');
let termsHint = document.getElementById('termsHint');
let terms = document.getElementById('terms');
let packageElement = document.getElementById('package');
let packageHint = document.getElementById('packageHint');
let packagselect = packageElement.options[packageElement.selectedIndex].value;
console.log(packagselect);
packageElement.addEventListener('change', (event) => {

    // selectElement options 
    /*
    for(const option of packageElement.options){
    console.log(`value:${option.value}, \ntext:${option.text}, \nselected:${option.selected ? 'yes':'no'}`);
    }   
    */

    //selectedIndex 取對應的index

    if (packageElement.value == "monthly") {
        packageHint.innerText = "如果選擇1年,可省 $10 美金";
    }
    else { packageHint.innerText = "Good Job正確的選擇"; }
});


formElement.addEventListener('submit', (event) => {
    console.log('form submitted');
//event.preventDefault(); //關掉預設的動作
    if (terms.checked) {        
        termsHint.innerText = '感謝你的訂購';
        termsHint.style.backgroundImage = "url(images/hint.png)";
    } else {
        event.preventDefault(); //關掉預設的動作
        termsHint.innerText = '你必須打勾同意選項';
        termsHint.className = 'warning';
    }

})

