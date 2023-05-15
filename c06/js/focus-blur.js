

document.getElementById('username').addEventListener('focus',(event)=>{
let feedbackElement = document.getElementById('feedback');
feedbackElement.className = 'tip';
feedbackElement.innerHTML = 'username 最少要5個元';    
});


//用匿名, this 是指 windows , 要小心
document.getElementById('username').addEventListener('blur',(event)=>{
let feedbackElement = document.getElementById('feedback');
console.log(this,this.value);
console.log(event.target,event.currentTarget);

if(event.currentTarget.value.length<5) //event.target == event.currentTarget.rentTarget
{feedbackElement.className = 'warning';
feedbackElement.innerHTML = '注意:username 最少要5個元';  }   

else{
    feedbackElement.innerHTML = "";
}
});