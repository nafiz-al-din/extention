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
});

chrome.commands.onCommand.addListener(command => {
    console.log(command);
})