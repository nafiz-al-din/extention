//? ************************+>>>>>>>>>>>> RESOURCE 
// https://techblog.geekyants.com/building-a-chrome-extension-in-2021#heading-whats-a-chrome-extension
// https://www.freecodecamp.org/news/building-chrome-extension/


// 9a0ef68f-a435-4e6d-9c03-7feb861f0fa9

const response = async () => {
    try {
        const res = await fetch('https://62b1a670c7e53744afbde08b.mockapi.io/dummy', {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })

        const jsonData = await res.json()

        console.log({res: jsonData, json: JSON.stringify(res)});
        return [res, null]
    } catch (err) {
        console.log(err);
        return [null, err]
    }
} 

chrome.runtime.onInstalled.addListener(function () {
    console.log({chrome});
    console.log(chrome.action);
    // response()
})

chrome.action.setBadgeBackgroundColor(
    {color: '#00FF00'},  // Also green
    () => { console.log('color changed'); },
  );

chrome.action.onClicked.addListener((tab) => {
    console.log(tab, "CLICKED");
})