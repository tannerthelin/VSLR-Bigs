function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1dE8P7X_U6EQ6tY2X7mqky9VRlztwZWqGZCnpPyQ4rzI/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);
var counter = 1;

// Change this variable to switch the office!
var currentOffice = "Scores";
document.getElementById("page-title").innerHTML = currentOffice;
document.title = "Bigs -" + currentOffice;

// The loop for all the dealers
for (var i = 0; i < 60; i++) {

	$("#table-body").append(
		'<tr class="border_bottom">' +
		'<td class="number-column">' + counter + '</td>' +
		'<td class="name-column">' + data[i].dealer_name + '</td>' +
		//'<td class="comp-column needed">' + data[i].bigs_score + '</td>' +
		'<td class="league-column last">' + data[i].score + '</td>' +
		'</tr>'
		);
	counter = counter + 1;
	
}

}