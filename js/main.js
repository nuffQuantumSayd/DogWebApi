var SinglePic = (function () {
    function SinglePic() {
    }
    return SinglePic;
}());
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
        var response = JSON.parse(http.responseText);
        console.log(response);
        console.log(response.status);
        console.log(response.message);
        displayPicture(response);
    }
}
function displayPicture(pic) {
    var imageUrl = JSON.stringify(pic.message);
    var imageUrlArray = imageUrl.split("/");
    console.log(imageUrlArray);
    var displayDiv = $("display-pic");
    var dogBreedTitle = displayDiv.querySelector("h2");
    dogBreedTitle.innerHTML = imageUrlArray[4];
    var picturePara = displayDiv.querySelector("p");
    picturePara.innerHTML = "<img src='" + pic.message + "'>";
}
function $(id) {
    return document.getElementById(id);
}
