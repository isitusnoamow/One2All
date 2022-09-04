chrome.storage.sync.get(["currentPage"], function(result) {
    document.getElementById("current").innerHTML = "Changes on Current Page: " + result.currentPage;
});
chrome.storage.sync.get(["everyPage"], function(result) {
    document.getElementById("every").innerHTML = "Changes on Every Page: " + result.everyPage;
});