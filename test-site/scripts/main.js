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
        myHeading.innerHTML = '欢迎来到哈利波特的世界，' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎来到哈利波特的世界，' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
