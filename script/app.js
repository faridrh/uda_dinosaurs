
    // Create Dino Constructor
function Dino (species, weight, height, diet, where, when,fact){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact; 
}
Dino_instance = Object.create(Dino);

    // Create Dino Objects
let fs = require ('./dino.json')
Dino1 = fs.Dinos[0]
Dino2= fs.Dinos[1];
Dino3= fs.Dinos[2];
Dino4= fs.Dinos[3];
Dino5= fs.Dinos[4]; 
Dino6= fs.Dinos[5];
Dino7= fs.Dinos[6];
Dino8= fs.Dinos[7];

//Set prototype to Dino
Object.setPrototypeOf(Dino1,Dino)
Object.setPrototypeOf(Dino2,Dino)
Object.setPrototypeOf(Dino3,Dino)
Object.setPrototypeOf(Dino4,Dino)
Object.setPrototypeOf(Dino5,Dino)
Object.setPrototypeOf(Dino6,Dino)
Object.setPrototypeOf(Dino7,Dino)
Object.setPrototypeOf(Dino8,Dino)


//Dino2.__proto__ = Dino ;

function func1(){
    return console.log(fs.Dinos[0]);
}

document.getElementById('btn').addEventListener('click',func1)
    // Create Human Object
function Human (){
    this.name1 = name1;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
}
Human1=Object.create(Human);
   
// Use IIFE to get human data from form
document.getElementById('btn').addEventListener('click', function(){
   let name = document.getElementById('name').value;
   let weight = document.getElementById('weight').value
   let feet = document.getElementById('feet').value
   let inches = document.getElementById('inches').value
   let diet = document.getElementById('diet').value
   height = Number(feet)*12+Number(inches);
   Human1.name1 =name;
   Human1.weight = Number (weight) ;
   Human1.height = height;
   Human1.diet = diet;
});
//console.log(Human1.height)

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
Dino.comp1= function (weight1, weight2){
    weight1 = this.weight;
    weight2 = Human1.weight;
    if (weight1 > weight2) {
        console.log(this.species + ' is heavier than '+ Human1.name1)
    } 
    else {
        console.log(this.species + ' is not heavier '+  Human1.name1)
    };
}

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.comp2 = function (height1, height2){
        height1 = this.height;
        height2 = Human1.height;
        if (height1 > height2) {
            console.log(this.species + ' is taller than '+  Human1.name1)
        } 
        else {
            console.log(this.species + ' is shorter than '+  Human1.name1)
        };
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.comp3 = function (diet1, diet2){
        diet1 = this.diet;
        diet2 = Human1.diet;
        if (diet1.toUpperCase() == diet2.toUpperCase()) {
            console.log(this.species + ' has a same diet with '+  Human1.name1)
        } 
        else {
            console.log(this.species + ' has a different diet from '+ Human1.name1)
        };
    }

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
