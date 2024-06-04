//change heading
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myHeading.textContent = "Snippet is King";
// Add silly alert
/*
document.querySelector("img").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
*/
// Toggle Image
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/snippet_lives.jpg") {
    myImage.setAttribute("src", "images/snippet.jpg");
  } else {
    myImage.setAttribute("src", "images/snippet_lives.jpg");
  }
};

// Set User name
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    if (!localStorage.getItem("name")) {
       setUserName();
    }else {
      const storedName = localStorage.getItem("name");
      myHeading.textContent = `Hello ${storedName}, Meet Snippet`;
    }
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello ${myName}, Meet Snippet`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello ${storedName}, Meet Snippet`;
}
myButton.onclick = () => {
  setUserName();
};