//typeof Operator
document.write(typeof 87);

//Type Coercion
document.write( " eighty" + 7);

// Not a Number Test
function not_Anumber () {
    document.getElementById("Not").innerHTML = 0/0;
}

//True Not a Number Test

function true_String () {
    document.getElementById("True").innerHTML = isNaN("String");
}

//False Not a Number Test
function false_String () {
    document.getElementById("False").innerHTML = isNaN(87);
    }
    
//Inifinity and Negative Infinity Display
function dis_Infinity() {
    document.getElementById("Infinite").innerHTML = (2e310)
}

function negdis_Infinity() {
    document.getElementById("NegInfinite").innerHTML = (-2e310)
}
    
//Boolean
document.write(3<5);
document.write(3>5);

//Console Log
console.log(87*87);
console.log(87<87);

//Double Equal
document.write(12==12);
document.write(12==87);

//Triple Equal True Data Type and Value
X = 87;
Y = 87;
document.write(X===Y)

//Triple Equal Match Different Data Type and Value
X = 87;
Y = "Pierre";
document.write(X===Y)

//Triple Equal Different Data Type and  Same Value
X = 87;
Y = "87";
document.write(X===Y)

//Triple Equal True Same Data Type and Different Value
X = 87;
Y = 78;
document.write(X===Y)

//Boolean And/Or Statements
//True And
document.write(8>7 && 9>8);
//False And
document.write(8>7 && 9<8);
//True Or
document.write(8>7 || 9<8);
//False Or
document.write(8<7 || 9<8);

//Not Operator
function not_Function1 () {
    document.getElementById("NO1").innerHTML = ! (8>7);
}

function not_Function2 () {
    document.getElementById("NO2").innerHTML = ! (8<7);
}
