var model = {
	init: function() {
		restaurantsData = Tabletop({
			key: model.restaurantSheet,
			callback: showInfo,
			simpleSheet: true
		});
		travelData = Tabletop({
			key: model.travelSheet,
			callback: showInfo,
			simpleSheet: true
		});

		function showInfo(data, tabletop) {
			restaurants = restaurantsData.models.Sheet1;
			travel = travelData.models.Sheet1;
			controller.generateWeekend();
		}

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
	generateWeekend: function() {
		if (typeof restaurants === 'undefined' || typeof travel === 'undefined') return false;
		if (restaurants.elements.length > 0 & travel.elements.length > 0) {

			restCount = Math.floor(Math.random() * (restaurants.elements.length));
			rest = restaurants.elements.splice(restCount, 1);
			restName = rest[0]['Restaurant'];
			restUrl = rest[0]['Reviewlink'];
			restAddress = rest[0]['Address'];

			travCount = Math.floor(Math.random() * (travel.elements.length));
			trav = travel.elements.splice(travCount, 1);
			travName = trav[0]['Destination'];
			travUrl = trav[0]['Reviewlink'];
			travCity = trav[0]['City'];

	// write a sentence with suggestions for this weekend

			view.render();
		}

		else {
			view.allOut();
		}
	}
}

var view = {
	render: function() {
		document.getElementById('weekend').innerHTML = "Grab a bite at " + '<a href="' + restUrl + '?src=ideagen" target="top">' + restName + "</a> (" + restAddress + "), or get out of town for " + '<a href="' + travUrl + '?src=ideagen" target="top">' + travName + "</a> (" + travCity + ").";
	},
	allOut: function() {
		document.getElementById('weekend').innerHTML = "All out of suggestions! <a href='#' onClick='document.location.reload();'>Reload the page to generate more</a>";
	}
}

// initialize tabletop

window.onload = function() { model.init() };

