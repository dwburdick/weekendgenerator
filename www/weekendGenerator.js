var restaurants = {};
var travel = {};

var model = {
	init: function() {
		y = Tabletop({
			key: model.restaurantSheet,
			callback: showInfo,
			simpleSheet: true
		});
		z = Tabletop({
			key: model.travelSheet,
			callback: showInfo,
			simpleSheet: true
		});

		var spin = document.getElementById("go");
			spin.onclick = function() {
				generateWeekend();
				return false;
			};
	},
	restaurantSheet: '136Pb0j5CIwmhTuGm4DA6Vi46Zftx5zdYC2boE-_gecY', 
	travelSheet: '11CwoUxXpkNhD6bhJuV26VKctGTUY_PNFpwejyiY3JKk'
}

var controller = {

}

var view = {

}

function generateWeekend(){

	if (typeof restaurants === 'undefined' || typeof travel === 'undefined') return false;
	if (restaurants.elements.length > 0 & travel.elements.length > 0) {

		var restCount = Math.floor(Math.random() * (restaurants.elements.length));
		var rest = restaurants.elements.splice(restCount, 1);
		var restName = rest[0]['Restaurant'];
		var restUrl = rest[0]['Reviewlink'];
		var restAddress = rest[0]['Address'];

		var travCount = Math.floor(Math.random() * (travel.elements.length));
		var trav = travel.elements.splice(travCount, 1);
		var travName = trav[0]['Destination'];
		var travUrl = trav[0]['Reviewlink'];
		var travCity = trav[0]['City'];

// write a sentence with suggestions for this weekend

		document.getElementById('weekend').innerHTML = "Grab a bite at " + '<a href="' + restUrl + '?src=ideagen" target="top">' + restName + "</a> (" + restAddress + "), or get out of town for " + '<a href="' + travUrl + '?src=ideagen" target="top">' + travName + "</a> (" + travCity + ").";
	}

	else {
		 document.getElementById('weekend').innerHTML = "All out of suggestions! <a href='#' onClick='document.location.reload();'>Reload the page to generate more</a>";
	}
}

// initialize tabletop

window.onload = function() { model.init() };



var y,z;


function showInfo(data, tabletop) {
	
	restaurants = y.models.Sheet1;
	travel = z.models.Sheet1;
	generateWeekend();
}