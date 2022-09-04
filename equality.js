const equalityWords = [
    ["his", "their"],
    ["her", "their"],
    ["he", "they"],
    ["she", "they"],
    ["mankind", "humankind"],
    ["man-made", "human-caused"],
    ["himself", "themselves"],
    ["herself", "themselves"],
    ["wife", "partner"],
    ["husband", "partner"],
    ["girlfriend", "partner"],
    ["boyfriend", "partner"],
    ["sister", "sibling"],
    ["brother", "sibling"],
    ["mom", "parent"],
    ["dad", "parent"],
    ["mailman", "mailperson"],
    ["mailwoman", "mailperson"],
    ["businessman", "businessperson"],
    ["businesswoman", "businessperson"],
    ["cameraman", "cameraperson"],
    ["camerawoman", "cameraperson"],
    ["spokesman", "spokesperson"],
    ["spokeswoman", "spokesperson"],
    ["policeman", "police officer"],
    ["policewoman", "police officer"]
]
let found = 0
let total = 0

function recursionText(element) {
    if (/^(script|style)$/.test(element.tagName)) {
        return
    }
    var child = element.firstChild;
    while (child) {
        if (child.nodeType == 1 || child.nodeType == 9 || child.nodeType == 11) { //not sure if i should go through frags and docs but i will
            recursionText(child);
        } else if (child.nodeType == 3) {
            equalize(child);
        }
        child = child.nextSibling;
    }
}


function equalize(node){
    let text = node.nodeValue;
    for(let i=0;i<equalityWords.length;i++){
        let regex = new RegExp("\\b" + equalityWords[i][0] + "\\b", "gi")
        let matches = text.match(regex);
        if(matches != null){
            found += matches.length
        }
        text = text.replace(regex, equalityWords[i][1])
    }
    node.nodeValue = text
}

function main(){
    recursionText(document.body)
    chrome.storage.sync.set({ currentPage: found });
    chrome.storage.sync.get(["everyPage"], function(result) {
        total = result.everyPage ?? 0
        total += found
        chrome.storage.sync.set({ everyPage: total });
    });
} 

main()