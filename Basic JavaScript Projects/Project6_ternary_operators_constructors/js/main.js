//Ternary Function Example
function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Voting Ternary Function
function voting_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough"
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!"
}

//Keywords and Constructors
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "Black and White");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard")
function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    "manufactured in " + Erik.Vehicle_Year;
}

//My Keywords and Constructors
function Card(Name, Color, Type, Cost) {
    this.Card_Name = Name;
    this.Card_Color = Color;
    this.Card_Type = Type;
    this.Card_Cost = Cost;
}

    var DD = new Card ("Dream Devourer", "Black", "Creature", "1B");
    var BB = new Card ("Brass's Bounty", "Red", "Sorcery", "6R");
    var KHA = new Card ("Kunoros", "Black and White", "Legendary Creature", "1WB" );
function deskCard(){
    document.getElementById("New_and_This").innerHTML = 
    DD.Card_Name + " is a " + DD.Card_Color + " " + DD.Card_Type + " that costs " + DD.Card_Cost +".";
}

//Nested Function Assignment 
function nestedFunction() {
    document.getElementById("Nested").innerHTML = Count ();
    function Count () {
        var starting_Point = 9;
        function Plus_one() {starting_Point += 87;}
        Plus_one();
        return starting_Point;
    }
}