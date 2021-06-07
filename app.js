var inputBox = document.querySelector(".input-box");
var translateButton = document.querySelector(".translate-btn");
var outputBox = document.querySelector(".output")

function generateURL(text) {
    var serverURL = "https://api.funtranslations.com/translate/doge.json";

    return serverURL + "?" + "text=" + text;
}

function errorhandler(error) {
    console.log("Error occured..." + error);
    alert("Error occured...Try after sometime.... :(")

}


function clickEventHandler() {
    var inputText = inputBox.value;

    fetch(generateURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedOutput = json.contents.translated
            outputBox.innerText = translatedOutput
        })
        .catch(errorhandler)
}



translateButton.addEventListener("click", clickEventHandler)