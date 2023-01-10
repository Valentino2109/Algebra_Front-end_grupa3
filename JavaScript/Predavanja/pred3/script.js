// 1
var h1 = document.createElement("h1");
var body = document.getElementsByTagName("body")[0];
body.prepend(h1);

// 2
var noviDiv = document.createElement("div");
var descDiv = document.querySelector(".description");
body.insertBefore(noviDiv, descDiv.nextSibling);

// 3
var footerUl = document.querySelector("#footer > ul");
for (var i = 0; i < 3; i++) {
    var li = document.createElement("li");
    footerUl.append(li);
}

// 4
h1.innerText = "Karlovac";

// 5
var noviH3 = document.createElement("h3");
var span = var descDiv.children[0];
noviH3.innerText = "5 rijeka";
descDiv.replaceChild(noviH3, span);

// 6
var infoDiv = document.querySelector(".info")