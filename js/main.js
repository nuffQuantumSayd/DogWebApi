window.onload = function () {
    var pictureBtn = $("picture-button");
    pictureBtn.onclick = getRandomPic;
};
function getRandomPic() {
    console.log("Button was clicked");
}
function $(id) {
    return document.getElementById(id);
}
