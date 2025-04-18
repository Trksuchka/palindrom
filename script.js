const clickBtn = document.getElementById("check-btn");
const outputText = document.getElementById("result");

function chekInput(){
    const inputValue = document.getElementById("text-input").value;
    if (inputValue.toString() === ""){
        alert("Please input a value");
    }else {
        palindrom(inputValue);
    }
}

function palindrom(someText){
    someText = someText.toString().toLowerCase().replace(/[\s!?",._\-']/g, "");
    if (someText === someText.split("").reverse().join("")){
        outputText.innerHTML = `${someText} is a palindrome`;
    }else {
        outputText.innerHTML = `${someText} is not a palindrome`;
    }
}

clickBtn.addEventListener("click", chekInput);