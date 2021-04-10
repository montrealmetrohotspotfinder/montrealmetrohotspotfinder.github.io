function init()
{
	spots = [{name: "La Ronde", type: "Theme Park", address: "22 Chemin Macdonald", site: "http://www.laronde.com/"},
	{name: "Parc Jean-Drapeau", type: "Island", address: "1 Circuit Gilles-Villeneuve", site: "http://www.parcjeandrapeau.com/en"},
	{name: "Casino de Montr&eacute;al", type: "Casino", address: "1 Avenue du Casino", site: "https://casinos.lotoquebec.com/en/montreal/home"},
	{name: "Circuit Gilles-Villeneuve", type: "Sports", address: "Parc Jean-Drapeau", site: "https://www.parcjeandrapeau.com/en/circuit-gilles-villeneuve-montreal/"},
	{name: "Biosph&egrave;re", type: "Museum", address: "160 Chemin du Tour de l&#39;Isle", site: "https://www.canada.ca/en/environment-climate-change/services/biosphere.html"},
	{name: "Plage Jean-Dor&eacute;", type: "Beach", address: "151 Circuit Gilles-Villeneuve", site: "https://www.parcjeandrapeau.com/en/jean-dore-beach-sand-swimming-sun-montreal/"},
	{name: "&Icirc;le Notre-Dame", type: "Island", address: "", site: "#"}];
	
	if(spots.length == 1){
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><b>"+spots.length+ " hotspot is near this station.</b></span><br/><br/>";
	}
	else {
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><b>"+spots.length+ " hotspots are near this station.</b></span><br/><br/>";
	}
	
	for (var i=0; i<spots.length; i++)
	{
		if (spots[i].site == "#")
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + spots[i].name 
			+ "</td><td>" + spots[i].type 
			+ "</td><td>" + spots[i].address 
			+ "</td><td>" + "No website available</td></tr></li>";
		}
		else
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + spots[i].name 
			+ "</td><td>" + spots[i].type 
			+ "</td><td>" + spots[i].address 
			+ "</td><td>" + "<a href=\"" + spots[i].site + "\">Website</a></td></tr></li>";
		} 	
	}
}

window.onload = init;
var spots;