
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

// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  console.log("画像をクリックしました");
   if (mySrc === "images/firefox-icon.png") {
    console.log(mySrc)
    myImage.setAttribute("src", "images/firefox2.png");    
  } else {
    console.log("2")
    console.log(mySrc)
    
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
}
