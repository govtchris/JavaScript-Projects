//Concatenate Method
function con_Function () {
    var word1 = "Hello, ";
    var word2 = "is ";
    var word3 = "it ";
    var word4 = "me ";
    var word5 = "your ";
    var word6 = "looking ";
    var word7 = "for?";
    var sentence = word1.concat(word2, word3, word4, word5, 
        word6, word7);
    document.getElementById("Concatenate").innerHTML= sentence;
}

//Slice Method
function slice_Function (){
    var Sentence = "Today is national beer day! Have a pint!";
    var Section = Sentence.slice(18,23);
    document.getElementById("slice").innerHTML = Section;
}

//Uppercase Method
function upper_Function(){
    var str = "this should be uppercase"
    var res = str.toUpperCase();
    document.getElementById("upper").innerHTML = res;
}

//Uppercase Method
function search_Function() {
    var str = "April 9th is national unicorn day!"
    var n = str.search("unicorn");
    document.getElementById("search party").innerHTML = n;
}

//Number to String Methods
function ntos_Function() {
    var x=47598;
    document.getElementById("numbers").innerHTML = x.toString();
}

//toPrecision Method
function precision_Method() {
    var X = 98578.99999999
    document.getElementById("precision").innerHTML = X.toPrecision(5)
}

//toFixed method
    function fixed_Method() {
        var X = 98578.99999999
        document.getElementById("fixed").innerHTML = X.toFixed(0)
    }

//valueOf Method
    function valueof_Method() {
        var X = 98578.99999999
        document.getElementById("value").innerHTML = X.valueOf(5)
    }