chrome.runtime.onInstalled.addListener(() => {
    console.log('hello world');
    console.log({"extentionID": chrome.runtime.id});
    // window.open("https://www.twitter.com/", '_blank');
    console.log({"chrome class": chrome});

    const url = chrome.extension.getURL('http://localhost:3000')
    
    // chrome.permissions.getAll(perms => {
    //     console.log(perms);
    // });

    chrome.storage.sync.set({name: 'nafiz', data: ['asd', 123]})

    chrome.storage.sync.get('name', (data) => {
        console.log(data);
    });

    chrome.i18n.detectLanguage('en', (data) => {
        console.log(data);
    });

    // console.log(chrome.instanceID);
    
});

chrome.bookmarks.onCreated.addListener(function() {
    console.log({"bookmarks chrome class": chrome.bookmarks});
    console.log('changed');
    
    chrome.browserAction.setBadgeText({text: '2'}, (a) => {
        console.log({a});
    });
});

chrome.commands.onCommand.addListener(command => {
    chrome.commands.getAll(res => {
        console.log(res);
    })

    console.log({command});
})

chrome.browserAction.onClicked.addListener(function(tab) { 
    console.log({tab});

    chrome.browserAction.setBadgeText({}, (a) => {
        console.log({a});
    });
});