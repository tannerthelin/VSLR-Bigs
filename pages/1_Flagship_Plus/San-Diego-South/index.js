function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1wbONXqwGphaZEjbOfMMDC67XDyYuwtHrk2XI2-DD5Yg/edit?usp=sharing',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);
var counter = 1;

for (var i = 0; i < data.length; i++) {
	
	// Change this variable to switch the office!
	var currentOffice = "CA-14 San Diego South Solar";

	document.getElementById("page-title").innerHTML = currentOffice;
	document.title = "Bigs -" + currentOffice;


	if (data[i].office == currentOffice) {
	$("#table-body").append(
		'<tr class="border_bottom">' +
		'<td class="number-column">' + counter + '</td>' +
		'<td class="name-column">' + data[i].name + '</td>' +
		//'<td class="office-column">' + data[i].office + '</td>' +
		'<td class="comp-column needed">' + data[i].bigs_score + '</td>' +
		'<td class="league-column last">' + data[i].league_score + '</td>' +
		'</tr>'
		);
	counter = counter + 1;
	}
	
}

}