window.onload = function() {
    let pictureBtn = $("picture-button");
    pictureBtn.onclick = getRandomPic;
}

function getRandomPic() {
    console.log("Button was clicked");
}

function $(id:string):HTMLElement{
    return document.getElementById(id);
}