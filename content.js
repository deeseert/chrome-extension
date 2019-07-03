//For copying and paste
function getTitle() {
  let title = document.querySelector("h1").innerText;
  console.log("Title:", title);
  return title;
}

function getUrl() {
  const myUrl = window.location.href;
  console.log("URL:", myUrl);
  return myUrl;
}

function gotMessage() {
  console.log("heydfgdfsg");
  // if (message.txt) {
  const title = getTitle();
  const url = getUrl();
  return { title, url };
  // }
}
const details = gotMessage();

// Paste URL and Title in the
// document.addEventListener("keydown", logKey);

// function logKey(e) {
//   const myTitle = document.querySelector("#myTitle");
//   if (e.code === "Digit1") {
//     myTitle.innerText = "You pressed 1";
//   } else {
//     myTitle.innerText = "You pressed something else";
//   }
// }

// chrome.runtime.sendMessage(document.getElementsByTagName("title")[0].innerText);
// chrome.runtime.sendMessage(document.querySelector("h1").innerText);
// chrome.runtime.sendMessage(window.location.href);

chrome.runtime.sendMessage(details);
