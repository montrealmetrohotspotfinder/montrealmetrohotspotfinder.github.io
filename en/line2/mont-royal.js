function init()
{
	spots = [{name: "Parc Mont-Royal", type: "Park", address: "1260 Chemin Remembrance", site: "https://montreal.ca/en/places/parc-du-mont-royal"},
	{name: "L&#39;Avenue du Mont-Royal", type: "District", address: "1012 Avenue du Mont-Royal Est", site: "https://www.mont-royal.net/"},
	{name: "Th&eacute;&acirc;tre du Rideau Vert", type: "Theatre", address: "4664 Rue Saint-Denis", site: "https://www.rideauvert.qc.ca/"},
	{name: "Biblioth&egrave;que du Plateau-Mont-Royal", type: "Library", address: "465 Avenue du Mont-Royal Est", site: "https://montreal.ca/en/places/bibliotheque-du-plateau-mont-royal"},
	{name: "Sanctuaire du Saint-Sacrement", type: "Church", address: "500 Avenue du Mont-Royal Est", site: "http://www.fraternites-jerusalem.ca/"},
	{name: "Parc Albert-Saint-Martin", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-albert-saint-martin"}];
	
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