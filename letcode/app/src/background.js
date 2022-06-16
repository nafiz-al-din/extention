function getXPath (info, tab) {
    const msg = {
        type: 'getXpath',
        info
    }
    
    chrome.runtime.sendMessage(tab.id, msg, () => {
        console.log('send message !');
    })

    // chrome.runtime.sendMessage(msg, function (response) {
    //     console.log('send message !', response);
    // })
}





chrome.runtime.onInstalled.addListener(() => {
    console.log({chrome});
})


chrome.contextMenus.create({
    id: "_LET-X",
    title: 'let-x-path',
    contexts: ["all", "action", "link", "selection"]
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    getXPath(info, tab)
})