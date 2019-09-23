function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1JnnBDZa5o5PCgMtKkUL7QKul5EARmYeLVmtV_mp7tBs/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);
var counter = 1;

// Change this variable to switch the office!
var currentOffice = "Superbowl Tickets";
document.getElementById("page-title").innerHTML = currentOffice;
document.title = "Bigs -" + currentOffice;

// The loop for the first guy
for (var i = 0; i < 1; i++) {

	$("#table-body").append(
		'<tr class="border_bottom">' +
		'<td class="number-column">' + counter + '</td>' +
		'<td class="name-column">' + data[i].name + '</td>' +
		'<td class="comp-column needed">' + data[i].bigs_score + '</td>' +
		'<td class="league-column last">' + data[i].league_score + '</td>' +
		'</tr>'
		);
	counter = counter + 1;
	
}

// The loop for the rest of the guys
for (var i = 1; i < 50; i++) {

	$("#table-body").append(
		'<tr class="border_bottom">' +
		'<td class="number-column">' + counter + '</td>' +
		'<td class="name-column dark-row">' + data[i].name + '</td>' +
		'<td class="comp-column dark-row needed">' + data[i].bigs_score + '</td>' +
		'<td class="league-column dark-row last">' + data[i].league_score + '</td>' +
		'</tr>'
		);
	counter = counter + 1;
	
}

}