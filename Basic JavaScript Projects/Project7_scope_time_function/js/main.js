//Global Variable Example
var X = 10
function global_Variable() {
    document.write ( X + 17 +" ");
}
global_Variable ();

//Local Variable Example
function local_Variable () {
    var Y = 20;
    document.write( Y + 17 + " ");
}
local_Variable ();

//Local Variable console.log example
function console_Function () {
    console.log( Z + 17);
}
console_Function ();

//If statement using Date()

function timeFunction() {
    if (new Date () .getHours() < 18) {
    document.getElementById("Time").innerHTML = "Hello"
    }
}

//If statement using <>

function if_Statement () {
    if (5 <= 5) {
        document.getElementById("IFF").innerHTML = "Hi";
    }
}

//Else statement

function age_Function () {
    age = document.getElementById("age").value;
    if (age >= 18) {
        Response = "You are old enough to vote"
    }
    else {
        Response = "You are not old enough to vote"
    }
    document.getElementById("response").innerHTML = Response;

}

//Else If Statements

function Time_function () {
    var Time = new Date() . getHours(); 
    var Reply;
    if ( Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if ( Time >= 12 ==  Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}