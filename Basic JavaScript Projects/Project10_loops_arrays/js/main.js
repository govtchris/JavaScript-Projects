
//While loop example
function Call_Loop () {
    var Digit = "";
    var X = 1;
    while (X < 21) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//String theory property

function st_Function() {
    var str = "Hey you guys!";
    var n = str.length;
    document.getElementById("ST").innerHTML = n; 
}

//For loop example
var Land = ["Plains", "Island", "Swamp", "Mountain", "Forest"];
var Content = "";
var Y;
function for_Loop () {
    for ( Y = 0; Y < Land.length; Y++){
        Content += Land[Y]+ "<br>"
    }
    document.getElementById("for_list").innerHTML = Content;
}

//Array example
function array_Function() {
    var Dragon = ["flying", "burning", "eating", "collecting gold"];
    document.getElementById("Array").innerHTML = "Dragons love " + Dragon[1] +
     " the countryside" + " and " + Dragon[3] + ".";
}

//Const keyword example
function constant_function() {
    const frog = {species:"American Bullfrogs", location:"Worldwide", color:"Green"};
    frog.color = "Brown";
    frog.size = "Large";
    document.getElementById("Constant").innerHTML = frog.species + " are a " + frog.size + 
    " " + frog.color + " that can be found " + frog.location + ".";
}

//Let keyword example

var B = 82;
document.write(B);
{
    const B = 28;
    document.write("<br>" + B);
}
document.write("<br>" + B);

//Return statement

function return_Function () {
    function return_pi (){
        return Math.PI;
    };
    document.getElementById("Return").innerHTML = return_pi ();
}

//Object example

let grinch = {
    color: "green",
    drink: "coffee",
    attitude: "grumpy",
    description: function() {
        return "The Grinch is a " + this.color + ", " + this.drink + "-loving "
        + this.attitude + " dude.";
    }
};
document.getElementById("Object").innerHTML = grinch.description ();

//Break example

function break_Statement() {
    var text = "";
    var i;
    for (i = 0; i < 7; i++){
        if (i === 6) {
            break;
        }
        text += "The number is " + i + "<br>";
        document.getElementById("Break").innerHTML = text;
    }
}

//Continue example

function con_Statement () {
    var txt = "";
    var J;
    for (J = 0; J < 7; J++){
        if (J === 4) {
            continue;
        }
        txt += "The number is " + J + "<br>";
        document.getElementById("Con").innerHTML = txt;
    }
}