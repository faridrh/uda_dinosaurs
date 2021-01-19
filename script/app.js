
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

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
Dino.comp1= function (){
    weight1 = this.weight;
    weight2 = Human1.weight;
    if (weight1 > weight2) {
        compfact = this.species + ' is heavier than '+ Human1.name1;
    } 
    else {
        compfact = this.species + ' is not heavier than '+  Human1.name1 ;
    }
    return compfact;
}

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.comp2 = function (){
        height1 = this.height;
        height2 = Human1.height;
        if (height1 > height2) {
            compfact = this.species + ' is taller than '+  Human1.name1;
        } 
        else {
            compfact = this.species + ' is shorter than '+  Human1.name1
        }
        return compfact;
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.comp3 = function (){
        diet1 = this.diet;
        diet2 = Human1.diet;
        if (diet1.toUpperCase() == diet2.toUpperCase()) {
            compfact = this.species + ' has a same diet with '+  Human1.name1;
        }
        else {
            compfact = this.species + ' has a different diet with '+  Human1.name1;
        };
        return compfact;
    }

    // Generate Tiles for each Dino in Array
    function generateTile (){
    let tile=[];
  s= [Dino1, Dino2, Dino3, Dino4, Dino5, Dino6, Dino7,Dino8]

  //Generates random integer numbers function, to get random num
  function getRandomInt(min, max,num) {
    let arr=[];
    while  (arr.length<num){
        var r = Math.floor(Math.random()*max)+min;
        if(arr.indexOf(r) === -1) {
            arr.push(r);
        }}
    return arr ;
    }
      
    // due to Piegeon always gets the same fact, the length of array 1 less as pigeon last element in json file
     r= getRandomInt(0, s.length-1,3)

  function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

// here we are replacing facts from json from the compare function
s[r[0]].fact=s[r[0]].comp1();
s[r[1]].fact=s[r[1]].comp2();
s[r[2]].fact=s[r[2]].comp3();
s= shuffle(s) // to get random tiles 
for (i=0; i<s.length; i++){
   tile[i]= "<img src="+ "\"images/"+s[i].species+ ".png\"" + " alt="+ s[i].species+ "\"" +">"+ "</img>"+ "<p>"+ s[i].fact +"</p>" +"<h3>"+ s[i].species +"</h3>";
}
        // Add tiles to DOM
for (let index = 0; index <tile.length; index++) {
    document.getElementById("Dino" +(index+1).toString()).innerHTML=tile[index]   
        }
    
  document.getElementById("Human").innerHTML = "<img src="+ "\"images/human.png\"" + " alt="+ "\"Human\"" +">"+ "</img>" + "<h3>"+ Human1.name1 +"</h3>" ;
  // Remove form from screen
  document.getElementById("dino-compare").hidden = true;
    }
    
// On button click, prepare and display infographic
document.getElementById("btn").addEventListener("click",generateTile)
