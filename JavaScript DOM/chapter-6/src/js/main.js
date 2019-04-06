console.log("Hello");

// 第一版
function showPic(whichPic) {
    var placeholder = document.getElementById("placeholder");
    var source = whichPic.getAttribute("href");
    placeholder.setAttribute("src",source);
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}


// 改进版
addLoadEvent(prepareGallery);

function prepareGallery() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(let i=0; i<links.length; i++){
        links[i].onclick = function() {
            showPic(this);
            return false;
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload !== "function") {
        window.onload = func
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

