
//Practicing with functions
function my_first_function () {
    var str = "This text is blue!"
    var result = str.fontcolor("blue").fontsize("20em");
    document.getElementById("blue_text").innerHTML = result;
}

//Operator concatendating
function myfunction () {
    var sentence = "I am learning";
    sentence += " a lot from this book!"
    document.getElementById("concatenate").innerHTML = sentence;
}