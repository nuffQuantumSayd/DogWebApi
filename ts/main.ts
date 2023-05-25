window.onload = function() {
    let pictureBtn = $("picture-button");
    pictureBtn.onclick = main;
    
}

function main() {
    //console.log("Button was clicked");
    let http = new XMLHttpRequest();
    //prepare the request to the server
    //GET request asks the server for data
    //The URL is the website we are requesting data from
    http.open("GET", "https://dog.ceo/api/breeds/image/random");

    //function to handle different ready states
    http.onreadystatechange = processRequest;



    //Send the request to the server
    http.send();
}

function processRequest() {
    let http = <XMLHttpRequest>this;

    if(http.readyState == 4 && http.status == 200){
        alert("Check the console because we are finished!");
        console.log(http.responseText);
    }
    
}


function $(id:string):HTMLElement{
    return document.getElementById(id);
}