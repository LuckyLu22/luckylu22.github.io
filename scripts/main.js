const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/icon.jpg") {
    myImage.setAttribute("src", "images/icon2.jpg");
  } else {
    myImage.setAttribute("src", "images/icon.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Nice to meet u, ${myName}`;
  }
};

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Nice to meet u, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };