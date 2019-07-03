console.log("Ready to go");

//For copying and paste
console.log("Ready to go again");
function getTitle() {
  let title = document.querySelector("h1").innerText;
  console.log(title);
}

function getUrl() {
  const myUrl = window.location.href;
  console.log("URL:", myUrl);
}

function gotMessage() {
  console.log("heydfgdfsg");
  // if (message.txt) {
  const title = getTitle();
  const url = getUrl();
  return { title, url }
  // }
}
const details = gotMessage();
// chrome.runtime.onMessage.addListener(gotMessage);
