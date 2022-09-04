let reset = document.getElementById("reset")

chrome.storage.sync.get(["currentPage"], function(result) {
    document.getElementById("current").innerHTML = "Changes on Current Page: " + result.currentPage;
});
chrome.storage.sync.get(["everyPage"], function(result) {
    document.getElementById("every").innerHTML = "Changes on Every Page: " + result.everyPage;
});

reset.addEventListener('click', function(){
    chrome.storage.sync.set({ everyPage: 0 });
    document.getElementById("every").innerHTML = "Changes on Every Page: " + 0;
})