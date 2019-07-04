console.log("background.js running");

// chrome.browserAction.onClick.addListener(buttonClicked)

// function buttonClicked(tab) {
//   console.log("keys pressed");
//   console.log("this is the tab", tab)
//   let msg = {
//     text: "Hello!"
//   }
//   chrome.tabs.sendMessage(tab.id, msg)
// }

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // How do I pass this response back to content.js???????????
  let params = { active: true, currentWindow: true };
  chrome.tabs.query(params, gotTabs);
  function gotTabs(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);
  }
});

// Pass now the title and the url to the popup extension window
