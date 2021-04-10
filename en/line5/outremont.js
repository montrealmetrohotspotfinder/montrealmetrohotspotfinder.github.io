function init()
{
	spots = [{name: "Th&eacute;&acirc;tre Outremont", type: "Theatre", address: "1248 Avenue Bernard Ouest", site: "http://www.theatreoutremont.ca/en/accueil/"},
	{name: "Parc Pratt", type: "Park", address: "795 Avenue Dunlop", site: "https://montreal.ca/en/places/parc-pratt"},
	{name: "Parc Raoul-Dandurand", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-raoul-dandurand"},
	{name: "Parc John-F.-Kennedy", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-john-f-kennedy"},
	{name: "Coll&egrave;ge Stanislas", type: "School", address: "780 Boulevard Dollard", site: "http://www.stanislas.qc.ca/montreal/"},
	{name: "Ar&eacute;na d&#39;Outremont", type: "Sports", address: "999 Avenue McEachran", site: "https://montreal.ca/en/places/arena-doutremont"},
	{name: "&Eacute;cole Internationale Guy-Drummond", type: "School", address: "1475 Avenue Lajoie", site: "https://guydrummond.ecoleoutremont.com/"},
	{name: "&Eacute;cole Primaire Lajoie", type: "School", address: "1276 Avenue Lajoie", site: "https://lajoie.ecoleoutremont.com/"}];
	
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