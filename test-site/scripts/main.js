

document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Harry Potter 酷毙了，' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Harry Potter 酷毙了，' + storedName;
}
myButton.onclick = function() {
    setUserName();
}