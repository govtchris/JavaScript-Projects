//Addition Function
function addition_Function() {
    var addition = 9 + 2;
    document.getElementById("Math").innerHTML = "9 + 2 =" + addition;
}

//Subtraction Function
function subtraction_Function() {
    var subtraction = 9 - 2;
    document.getElementById("Math2").innerHTML = "9 - 2 =" + subtraction;
}

//Multiplication Function
function multiply_Function () {
    var multiply = 9 * 2;
    document.getElementById("Multiply").innerHTML = "9 * 2 =" + multiply;
}

//Division Function
function divide_Function () {
    var divide = 9 / 2;
    document.getElementById("Divide").innerHTML = "9 / 2 =" + divide;
}

//Multiple Operators Function
function allMath_Function () {
    var multiple = (9 + 2) * 9 / 2 - 9 
    document.getElementById("All Math").innerHTML = " Nine plus two multiplid by nine then divided by 2 then subtracted by 9 =" + multiple;
}

//Modulus Operators
function modulus_Operators () {
    var modulus = 25 % 6 
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of:" + modulus;
}

//Negation Operands
function negation_Operands () {
    var x = 92
    document.getElementById("Negative").innerHTML = "The negative of 92 is " + -x;
}

//Increment and Decrement Operators
function increase_Operator () {
    var y = 92
    y++
    document.write(y)
}

function decrease_Operator () {
    var z = 92
    z--
    document.write(z)
}

//Random Number Generators
window.alert(Math.random() * 92);

//Math Objects
function pIe (){ 
    document.getElementById("PIE").innerHTML = Math.PI;
}

function fLoor () {
    document.getElementById("Floor").innerHTML = Math.floor(92.1);
}