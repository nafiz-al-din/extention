export function getXPath (info, tab) {
    const msg = {
        type: 'getXpath',
        info
    }

    chrome.tabs.sendMessage(tab.id, msg, () => {
        console.log('send message !');
    })
}

export function reciever (message, sender, sendResponse) {
    console.log('message recieved !');

    console.log({message, sender, sendResponse});
}