//Writing a string
document.write("Hello, World!");

//Assigning a string to a variable
var A = "This is a string";
document.write(A)

//Assigning a variable to an alert
var B = "Howdy Howdy Howdy";
window.alert(B);

//Using backslashes to add quotations
document.write("\"When you brake the plate, you don't fix it, you just get another plate.\", David Haller ")

//Concatenating strings in JavaScript
document.write("\"Human beings are the only animal that forms ideas about their world." 
+ "We perceive it not through our bodies but through our minds. "
+ "We must agree on what is real. "
+ "Because of this, we are the only animal on Earth that goes mad.\" ")

//Concatenating variables

var ice = "Blue Dragon", fire = "Red Dragon";

document.write(ice+fire)

//Assigning multiple variables at once, using the items I see
var Desk = "Brown", Pierre = "Brown and White",
    Frog = "Green", Ice_Giant = "Blue";

document.write(Pierre);

//Chaning the font color on an assigned variable
var frieza = "You seem awfully confident in yourself";
var frieza = frieza.fontcolor("purple")
document.write(frieza);

//Writing an expression
document.write(68*9)

//Assigning the time and date function for an HTML event
function displayDate() {
    document.getElementById("time").innerHTML = Date();
  }


