var SinglePic = (function () {
    function SinglePic() {
    }
    return SinglePic;
}());
var DogBreedList = (function () {
    function DogBreedList() {
    }
    return DogBreedList;
}());
window.onload = function () {
    var pictureBtn = $("picture-button");
    pictureBtn.onclick = main;
    getAllDogBreeds();
};
function main() {
    var pictureBtn = $("picture-button");
    pictureBtn.disabled = true;
    getDogPics();
}
function getDogPics() {
    var http = new XMLHttpRequest();
    http.open("GET", "https://dog.ceo/api/breeds/image/random");
    http.onreadystatechange = processRequest;
    http.send();
}
function getAllDogBreeds() {
    var http = new XMLHttpRequest();
    http.open("GET", "https://dog.ceo/api/breeds/list/all");
    http.onreadystatechange = processDogBreeds;
    http.send();
}
function processDogBreeds() {
    var http = this;
    if (http.readyState == 4 && http.status == 200) {
        var categories = JSON.parse(http.responseText);
        console.log(http.responseText);
        console.log(categories);
        displayDogBreeds(categories);
    }
}
function displayDogBreeds(categories) {
    var categoriesArray = JSON.stringify(categories.message).split("\"");
    console.log("categories array");
    console.log(categoriesArray);
    var displayDiv = $("display-pic");
    var dogBreedList = displayDiv.querySelector("ul");
    for (var i = 1; i < categoriesArray.length; i += 2) {
        var singleDogBreed = document.createElement("li");
        singleDogBreed.innerText = categoriesArray[i];
        dogBreedList.appendChild(singleDogBreed);
    }
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
    if (http.readyState == 4) {
        var pictureBtn = $("picture-button");
        pictureBtn.disabled = false;
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
