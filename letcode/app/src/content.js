function reciever (message, sender, sendResponse) {
    console.log('message recieved !');

    console.log({message, sender, sendResponse});
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('message recieved !');

    console.log({message, sender, sendResponse});

    sendResponse({farewell: "goodbye"});
})