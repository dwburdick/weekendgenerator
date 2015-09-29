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
var travel = {};

function generateWeekend(){

	if (concerts.length > 0 & restaurants.elements.length > 0 & hikes.length > 0) {

		var restCount = Math.floor(Math.random() * (restaurants.elements.length));
		var rest = restaurants.elements.splice(restCount, 1);
		var restName = rest[0]['Restaurant'];
		var restUrl = rest[0]['Reviewlink'];
		var restAddress = rest[0]['Address'];

		var travCount = Math.floor(Math.random() * (travel.elements.length));
		var trav = travel.elements.splice(travCount, 1);
		var travName = trav[0]['Destination'];
		var travUrl = trav[0]['Destinationlink'];
		var travCity = rest[0]['City'];

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

		document.getElementById('weekend').innerHTML = "Grab a bite at " + '<a href="' + restUrl + '" target="top">' + restName + "</a> (" + restAddress + "), catch " + concert + " at " + venue + " or get out of town and check out " + '<a href="' + travUrl + '" target="top">' + travName + "</a> (" + travCity + ").";
	}

	else {
		document.getElementById('weekend').innerHTML = "All out of suggestions!";
	}
}

// initialize tabletop

window.onload = function() { init() };

var public_spreadsheet_url_1 = '136Pb0j5CIwmhTuGm4DA6Vi46Zftx5zdYC2boE-_gecY', public_spreadsheet_url_2 = '11CwoUxXpkNhD6bhJuV26VKctGTUY_PNFpwejyiY3JKk';

var y,z;

function init() {
	y = Tabletop({
		key: public_spreadsheet_url_1,
		callback: showInfo,
		simpleSheet: true
	});
	z = Tabletop({
		key: public_spreadsheet_url_2,
		callback: showInfo,
		simpleSheet: true
	});

	var spin = document.getElementById("go");
		spin.onclick = function() {
			generateWeekend();
			return false;
		};
	}

function showInfo(data, tabletop) {
	
	restaurants = y.models.Sheet1;
	travel = z.models.Sheet1;
}