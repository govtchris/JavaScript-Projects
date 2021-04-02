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
function true_String () {
    document.getElementById("False").innerHTML = isNaN(87);
    }
    
//Inifinity and Negative Infinity Display
function dis_Infinity() {
    document.getElementById("Infinite").innerHTML = (2e310)
}

function negdis_Infinity() {
    document.getElementById("NegInfinite").innerHTML = (-2e310)
}
    