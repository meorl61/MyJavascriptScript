
document.getElementById('shoppingList').addEventListener('click', function(event) {
//delete li
    
//let li = event.target.parentElement;
    //let target = event.target;  //a
    event.preventDefault();  //prevents link from being followed  限制
    let atarget = event.target;
    //let litarget = event.target.parentElement;    
    let litarget = event.target.parentNode;  //li
    let ulElement = event.currentTarget;  //ul#shoppingList

    //delete node
    //ulElement.removeChild(litarget);
    litarget.remove();
})