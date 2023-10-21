var ogExistingElements = document.getElementsByClassName("ogOverlay");
if (ogExistingElements.length > 0) {
    for (; ogExistingElements.length > 0;)ogExistingElements[0].parentNode.removeChild(ogExistingElements[0]);
    console.log("qsog - cleared screen")
}
else for (var ogElements = document.querySelectorAll(".qvobject,.qvplaceholder"), i = 0; i < ogElements.length; i++)
 { var ogElement = ogElements[i], ogHtmlOuter = document.createElement("div"); 
ogHtmlOuter.style.position = "relative", ogHtmlOuter.style.display = "inline-flex" , ogHtmlOuter.style.top = 0, ogHtmlOuter.style.left = 0, ogHtmlOuter.style.zIndex = 100000,
 ogHtmlOuter.style.margin = "0px",ogHtmlOuter.style.fontSize = "13px", ogHtmlOuter.style.padding = "0px", ogHtmlOuter.style.backgroundColor = "#6bb345", 
ogHtmlOuter.style.userSelect = "text", ogHtmlOuter.style.color = "#FFFFFF", ogHtmlOuter.className = "ogOverlay",
 ogHtmlOuter.innerHTML = '<a id="ogOverlay' + i + '" onclick="ogCopyToClipboard(document.getElementById(\'ogOverlay' + i + '\').innerHTML)" style="color:#FFFFFF;text-decoration:none;user-select:text;">'
 + ogElement.getAttribute("id") + "</a>", ogElement.appendChild(ogHtmlOuter), console.log("Element " + i + " id: " + ogElement.getAttribute("id")) } function ogCopyToClipboard(e) { function t(t) { t.clipboardData.setData("text/plain", e), t.preventDefault() } document.addEventListener("copy", t), document.execCommand("copy"), document.removeEventListener("copy", t), console.log("Copied " + e + " to clipboard") }
//temp