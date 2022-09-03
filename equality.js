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
]

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
        text = text.replace(regex, equalityWords[i][1])
    }
    node.nodeValue = text
}

recursionText(document.body)