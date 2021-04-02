//Defining a dictionary

function my_Dictionary () {
    var Animal = {
        Species:"Snake",
        Color:"Grey",
        Age: "Rohelio",
        Age: 4,
        Sound: "Hiss"
    }; 

    //delete the color key
    delete Animal.Color;
    
    //link the JavaScript code to the paragraph elements in index.html
    
    document.getElementById("Dictionary1").innerHTML = Animal.Species; 
    document.getElementById("Dictionary2").innerHTML = Animal.Color;
}