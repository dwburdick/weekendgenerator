// define the arrays
// these dummy arrays will be replaced by arrays of objects imported using tabletop.js

var concerts = [
    ["U2","The Ogden Theatre","http://heyreverb.com"],
    ["The Flaming Lips","The Boulder Bandshell","http://heyreverb.com"],
	["Pixies","The Fox Theatre","http://heyreverb.com"],
	["Monster Magnet","Pepsi Center","http://heyreverb.com"]
];
var restaurants = [
	["Acorn","Contemporary American","http://dpo.st/foodmap"],
	["Mustard\'s Last Stand","Hot dogs","http://dpo.st/foodmap"],
	["Sexy Pizza","Pizza","http://dpo.st/foodmap"],
	["Argyll Whiskey Beer", "Contemporary American", "http://dpo.st/foodmap"]
];
var hikes = [
	["Bear Lake","4 miles","moderate"],
	["Mt. Elbert","9 miles","moderate/strenuous"],
	["Frazer Meadow","4 miles","easy"],
	["Second Flatiron","5 miles","moderate"]
];

function generateWeekend(){

	if (concerts.length > 0 & restaurants.length > 0 & hikes.length > 0) {

// generate three random numbers based on the length of the arrays

		var a = Math.floor(Math.random() * (concerts.length));
		var b = Math.floor(Math.random() * (restaurants.length));
		var c = Math.floor(Math.random() * (hikes.length));

// load suggestions

		var concert = concerts[a][0];
		var venue = concerts[a][1];
		var restaurant = restaurants[a][0];
		var hike = hikes[a][0];

// remove suggestions from arrays so they don't repeat

		concerts.splice(a, 1);
		restaurants.splice(b, 1);
		hikes.splice(c, 1);

// write a sentence with suggestions for this weekend
// when we make the real sentence, the links should open in new tabs

		document.getElementById('weekend').innerHTML = hike + " and " + restaurant + " and " + concert + " at " + venue;
	}

	else {
		document.getElementById('weekend').innerHTML = "All out of suggestions!";
	}
}
