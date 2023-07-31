
function loadJS(file) {
    var script = document.createElement("script");
    script.src = file;
    document.getElementsByTagName("head").item(0).appendChild(script);
}

// java dosyalarını yükle
loadJS("./write.js");
loadJS("./console.js");
setTimeout(function() {
    loadJS("./alert.js");
}, 1000);


