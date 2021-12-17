var catNames = ['Vanya', 'Sanya', 'Vasya', 'Gosha'];
var catColor = ['red', 'yellow', 'black', 'white'];
var catLen = ['15', '16', '17', '18', '19', '20'];

var arrayCats = [];

for (var i = 0; i< random(1,12); i++) {
	var cat = {
		name: catNames[random(0, catNames.length -1)],
		color: catColor[random(0,catColor.length -1)],
		len: catLen[random(0,catLen.length -1)],
	};
	arrayCats.push(cat);
}

for (var i = 0; i < arrayCats.length; i++) {
	console.log(arrayCats[i]);
}

function random(min,max) {
	return Math.floor(Math.random() * (max-min + 1)) + min;
}