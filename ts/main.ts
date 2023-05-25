class SinglePic {
    message:string;
    status:string;
}

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
        //alert("Check the console because we are finished!");
        
        /*
        {"message":"https:\/\/images.dog.ceo\/breeds\/chow\/n02112137_16777.jpg","status":"success"}
        */

        //console.log(http.responseText);
        //parse response to an object
        let response:SinglePic = JSON.parse(http.responseText);

        //logging properties of the object
        console.log(response);
        console.log(response.status);
        console.log(response.message);
        
        displayPicture(response);
    }
    
}
function displayPicture(pic:SinglePic){
    //turns the url into a string
    let imageUrl = JSON.stringify(pic.message);
    //console.log(imageUrl);

    //splits the url into an array by the / character
    let imageUrlArray = imageUrl.split("/");
    console.log(imageUrlArray);

    //gets the div that will display the picture
    let displayDiv = $("display-pic");

    //gets the h2 element that will display the breed
    let dogBreedTitle = displayDiv.querySelector("h2");

    //sets the h2 element to the breed from the array above
    dogBreedTitle.innerHTML = imageUrlArray[4];

    //gets the p element that will display the picture
    let picturePara = displayDiv.querySelector("p");
    //console.log(picturePara);
    //sets the p element to the picture from the url in SinglePic property
    picturePara.innerHTML = "<img src='" + pic.message + "'>";
}



function $(id:string):HTMLElement{
    return document.getElementById(id);
}