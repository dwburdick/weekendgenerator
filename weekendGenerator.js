// define the arrays
// these dummy arrays will be replaced by arrays of objects imported using tabletop.js

var concerts = [
    ["U2","The Ogden Theatre","http://heyreverb.com"],
    ["The Flaming Lips","The Boulder Bandshell","http://heyreverb.com"],
	["Pixies","The Fox Theatre","http://heyreverb.com"],
	["Monster Magnet","Pepsi Center","http://heyreverb.com"]
];
var hikes = [
	["Bear Lake","4 miles","moderate"],
	["Mt. Elbert","9 miles","moderate/strenuous"],
	["Frazer Meadow","4 miles","easy"],
	["Second Flatiron","5 miles","moderate"]
];
var restaurants = {};

function generateWeekend(){

	var restCount = Math.floor(Math.random() * (restaurants.length));
	var rest = restaurants.splice(restCount, 1);
	var restName = rest[0]['Restaurant'];
	var restUrl = rest[0]['Reviewlink'];
	var restAddress = rest[0]['Address'];

	if (concerts.length > 0 & restaurants.length > 0 & hikes.length > 0) {

// generate three random numbers based on the length of the arrays

		var a = Math.floor(Math.random() * (concerts.length));
		var c = Math.floor(Math.random() * (hikes.length));

// load suggestions

		var concert = concerts[a][0];
		var venue = concerts[a][1];
		var hike = hikes[a][0];

// remove suggestions from arrays so they don't repeat

		concerts.splice(a, 1);
		hikes.splice(c, 1);

// write a sentence with suggestions for this weekend
// when we make the real sentence, the links should open in new tabs

		document.getElementById('weekend').innerHTML = hike + " and " + '<a href="' + restUrl + '" target="top">' + restName + "</a> (" + restAddress + ")" + " and " + concert + " at " + venue;
	}

	else {
		document.getElementById('weekend').innerHTML = "All out of suggestions!";
	}
}

// initialize tabletop

window.onload = function() { init() };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=136Pb0j5CIwmhTuGm4DA6Vi46Zftx5zdYC2boE-_gecY&output=html';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
	callback: showInfo,
	simpleSheet: true } )
}

function showInfo(data, tabletop) {
	restaurants = data;
}
