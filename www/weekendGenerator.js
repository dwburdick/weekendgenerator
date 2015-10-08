var restaurants = {};
var travel = {};

function generateWeekend(){

	if (typeof restaurants === 'undefined' || typeof travel === 'undefined') return false;
	if (restaurants.elements.length > 0 & travel.elements.length > 0) {

		var restCount = Math.floor(Math.random() * (restaurants.elements.length));
		var rest = restaurants.elements.splice(restCount, 1);
		var restName = rest[0]['Restaurant'].trim();
		var restUrl = rest[0]['Reviewlink'].trim();
		var restAddress = rest[0]['Address'].trim();

		var travCount = Math.floor(Math.random() * (travel.elements.length));
		var trav = travel.elements.splice(travCount, 1);
		var travName = trav[0]['Destination'].trim();
		var travUrl = trav[0]['Reviewlink'].trim();
		var travCity = trav[0]['City'].trim();

// write a sentence with suggestions for this weekend

		document.getElementById('weekend').innerHTML = "<li>Grab a bite at " + '<a href="' + restUrl + '?src=ideagen" target="top">' + restName + "</a> (" + restAddress + ")</li><li>Get out of town for " + '<a href="' + travUrl + '?src=ideagen" target="top">' + travName + "</a> (" + travCity + ")</li>";
	}

	else {
		 document.getElementById('weekend').innerHTML = '<li class="oops">All out of suggestions! <a href="' + document.location.href + '" onClick="document.location.reload();">Reload the page to generate more</a></li>';
	}
}

function rotateNewsArrow() {
    $({deg: 0}).animate({deg: 180}, {
        duration: 200,
        step: function(now) {
            $('#goimg').css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
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

	$('#go').on('click touchend', function() {
	    rotateNewsArrow();
	    generateWeekend();
		return false;
	});
}

function showInfo(data, tabletop) {
	restaurants = y.models.Sheet1;
	travel = z.models.Sheet1;
	generateWeekend();
}