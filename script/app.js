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

// NOTE: Weight in JSON file is in lbs, height in inches. 

// Dino compare Method 1 comp1
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

// Create Human constructor 
function Human(name1, weight, height, diet) {
    this.name1 = name1;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
}
// Create Human Instance
let Human1 = Object.create(Human);



// define Go Back function
document.getElementById('goBack').addEventListener('click', resetForm)

function resetForm() {
    document.getElementById('grid').style.display = 'none'; // hide grids
    document.getElementById('goBack').style.display = 'none'; // hide goBack
    document.getElementById('dino-compare').style.display = 'block'; // show form
    document.getElementById('dino-compare').reset(); //reset form
}
// Use IIFE to get human data from form and generate tiles when clicking "Compare me" button
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


// Generate Tiles for each Dino in Array
function generateTile() {

    // preparation of screen
    document.getElementById("dino-compare").style.display = 'none'; // Remove form from screen
    document.getElementById('goBack').style.display = 'inline-block'; // show goback button after form 
    document.getElementById('grid').style.display = 'flex'; // show grid

    let tile = []; // tile array which for 9 grid elements
    let dinos = []; // dinos array which for getting dinos objects from file


    //Create Dinos from json

    let fs = require('./dino.json')
    fs.Dinos.forEach((dino, index) => {
        dinos[index] = Object.assign({}, dino) // get dinos objects from file
        Object.setPrototypeOf(dinos[index], Dino);
    })


    let r = getRandomInt(0, dinos.length, 3) // get 3 random numbers and save to r
    // if the species not Pigeon, then replace facts with compare methods
    r.forEach((item, index) => {
        if (dinos[item].species != 'Pigeon') {
            if (index === 0) {
                dinos[item].fact = dinos[item].comp1();
            }
            if (index === 1) {
                dinos[item].fact = dinos[item].comp2();

            }
            if (index === 2) {
                dinos[item].fact = dinos[item].comp3();

            }
        }
    })

    shuffle(dinos) //  get random tiles by shuffling dinons array

    // creating tiles
    for (i = 0; i < dinos.length; i++) {
        tile[i] = "<img src=" + "\"images/" + dinos[i].species + ".png\"" + " alt=" + dinos[i].species + "\"" + ">" + "</img>" + "<p>" + dinos[i].fact + "</p>" + "<h3>" + dinos[i].species + "</h3>";
    }
    // Add tiles to DOM
    for (let index = 0; index < tile.length; index++) {
        document.getElementById("Dino" + (index + 1).toString()).innerHTML = tile[index]
    }
    // add human tile
    document.getElementById("Human").innerHTML = "<img src=" + "\"images/human.png\"" + " alt=" + "\"Human\"" + ">" + "</img>" + "<h3>" + Human1.name1 + "</h3>";




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


}