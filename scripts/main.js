// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  console.log("画像をクリックしました");
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla はかっこいいよ、${myName} さん`;
}

myButton.onclick = function() {
  setUserName();
}
