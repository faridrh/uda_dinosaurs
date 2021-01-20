// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}
// Create Dino Objects
const fs = require('./dino.json')
let dinos = [];
fs.Dinos.forEach((dino, index) => {
    dinos[index] = dino;
    Object.setPrototypeOf(dinos[index], Dino);
})
/* Dino1 = fs.Dinos[0]
Dino2= fs.Dinos[1];
Dino3= fs.Dinos[2];
Dino4= fs.Dinos[3];
Dino5= fs.Dinos[4]; 
Dino6= fs.Dinos[5];
Dino7= fs.Dinos[6];
Dino8= fs.Dinos[7]; */

//Set prototype to Dino
/* Object.setPrototypeOf(Dino1,Dino)
Object.setPrototypeOf(Dino2,Dino)
Object.setPrototypeOf(Dino3,Dino)
Object.setPrototypeOf(Dino4,Dino)
Object.setPrototypeOf(Dino5,Dino)
Object.setPrototypeOf(Dino6,Dino)
Object.setPrototypeOf(Dino7,Dino)
Object.setPrototypeOf(Dino8,Dino) */

// Create Human Object
function Human(name1, weight, height, diet) {
    this.name1 = name1;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
}

Human1 = Object.create(Human);

// Use IIFE to get human data from form and generate tiles
document.getElementById('btn').addEventListener('click', function() {
    (function() {
        let name = document.getElementById('name').value;
        let weight = document.getElementById('weight').value
        let feet = document.getElementById('feet').value
        let inches = document.getElementById('inches').value
        let diet = document.getElementById('diet').value
        height = Number(feet) * 12 + Number(inches);
        Human1.name1 = name;
        Human1.weight = Number(weight);
        Human1.height = height;
        Human1.diet = diet;
    })();
    generateTile();
});
// Create Dino Compare Method comp1
// NOTE: Weight in JSON file is in lbs, height in inches. 

Dino.comp1 = function() {
    let compFact = ''; //compare fact
    const weight1 = this.weight;
    const weight2 = Human1.weight;
    if (weight1 > weight2) {
        compFact = this.species + ' is heavier than ' + Human1.name1;
    } else {
        compFact = this.species + ' is not heavier than ' + Human1.name1;
    }
    return compFact;
}


// Create Dino Compare Method 2 comp2
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.comp2 = function() {
    let compFact = ''; //compare fact
    const height1 = this.height;
    const height2 = Human1.height;
    if (height1 > height2) {
        compFact = this.species + ' is taller than ' + Human1.name1;
    } else {
        compFact = this.species + ' is shorter than ' + Human1.name1
    }
    return compFact;
}

// Create Dino Compare Method 3 comp3
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.comp3 = function() {
    let compFact = ''; //compare fact
    const diet1 = this.diet;
    const diet2 = Human1.diet;
    if (diet1.toUpperCase() == diet2.toUpperCase()) {
        compFact = this.species + ' has a same diet with ' + Human1.name1;
    } else {
        compFact = this.species + ' has a different diet with ' + Human1.name1;
    };
    return compFact;
}

// Generate Tiles for each Dino in Array
function generateTile() {
    let tile = [];

    //Generates random integer numbers function, to get random num
    function getRandomInt(min, max, num) {
        let arr = [];
        while (arr.length < num) {
            let r = Math.floor(Math.random() * max) + min;
            if (arr.indexOf(r) === -1) {
                arr.push(r);
            }
        }
        return arr;
    }

    // due to Piegeon always gets the same fact, the length of array 1 less as pigeon last element in json file
    r = getRandomInt(0, dinos.length - 1, 3)

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
    dinos[r[0]].fact = dinos[r[0]].comp1();
    dinos[r[1]].fact = dinos[r[1]].comp2();
    dinos[r[2]].fact = dinos[r[2]].comp3();
    dinos = shuffle(dinos) // to get random tiles 
    for (i = 0; i < dinos.length; i++) {
        tile[i] = "<img src=" + "\"images/" + dinos[i].species + ".png\"" + " alt=" + dinos[i].species + "\"" + ">" + "</img>" + "<p>" + dinos[i].fact + "</p>" + "<h3>" + dinos[i].species + "</h3>";
    }
    // Add tiles to DOM
    for (let index = 0; index < tile.length; index++) {
        document.getElementById("Dino" + (index + 1).toString()).innerHTML = tile[index]
    }

    document.getElementById("Human").innerHTML = "<img src=" + "\"images/human.png\"" + " alt=" + "\"Human\"" + ">" + "</img>" + "<h3>" + Human1.name1 + "</h3>";
    // Remove form from screen
    document.getElementById("dino-compare").style.display = 'none';
}