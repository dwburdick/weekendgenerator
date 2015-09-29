// define the arrays

var restaurants = {};
var beer = {};

// initialize tabletop

window.onload = function() { init() };

var public_spreadsheet_url = '1tEFldr4m4kG2MOEkrL_EQXIEmKeeAmrp1QlBNzwtcSw';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
	callback: showInfo,
	wanted: ["Dining", "Beer"],
	simpleSheet: false } )

var spin = document.getElementById("go");
	spin.onclick = function() {
		generateWeekend();
		return false;
	};

}

function showInfo(data, tabletop) {
	dining = tabletop.sheets("Dining");
	restaurants = dining.elements;
	beer = tabletop.sheets("Beer");
	breweries = beer.elements;
}



function generateWeekend(){

	var restCount = Math.floor(Math.random() * (restaurants.length));
	var rest = restaurants.splice(restCount, 1);
	var restName = rest[0]['name'];
	var restUrl = rest[0]['url'];
	var restAddress = rest[0]['address'];

	if (restaurants.length > 0) {


// write a sentence with suggestions for this weekend
// when we make the real sentence, the links should open in new tabs

		document.getElementById('weekend').innerHTML = "Grab a bite at " + '<a href="' + restUrl + '" target="top">' + restName + "</a> (" + restAddress + ").";
	}

	else {
		document.getElementById('weekend').innerHTML = "All out of suggestions!";
	}
}

