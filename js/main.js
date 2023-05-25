window.onload = function () {
    var pictureBtn = $("picture-button");
    pictureBtn.onclick = main;
};
function main() {
    var http = new XMLHttpRequest();
    http.open("GET", "https://dog.ceo/api/breeds/image/random");
    http.onreadystatechange = processRequest;
    http.send();
}
function processRequest() {
    var http = this;
    if (http.readyState == 4 && http.status == 200) {
        alert("Check the console because we are finished!");
        console.log(http.responseText);
    }
}
function $(id) {
    return document.getElementById(id);
}
