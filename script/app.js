
    // Create Dino Constructor
function Dino (){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

    // Create Dino Objects
Dino1= Object.create(Dino);
Dino2= Object.create(Dino);
let fs = require ('./dino.json')
Dino1= fs.Dinos[0];
Dino2= fs.Dinos[1];
Dino3= fs.Dinos[2];
Dino4= fs.Dinos[3];
Dino5= fs.Dinos[4];
Dino6= fs.Dinos[5];
Dino7= fs.Dinos[6];
Dino7= fs.Dinos[7];
function func1(){
    s=document.getElementById('weight').value;
    return console.log(s);
}

//document.getElementById('btn').addEventListener('click',func1)
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

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
