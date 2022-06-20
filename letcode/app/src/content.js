function reciever (message, sender, sendResponse) {
    
    console.log('message recieved !');
    console.log({message, sender});
    // sendResponse({type: 'OK'})
}


chrome.runtime.onMessage.addListener(reciever)