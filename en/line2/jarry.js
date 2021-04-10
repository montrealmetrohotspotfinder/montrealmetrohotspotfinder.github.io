function init()
{
	spots = [{name: "Parc Jarry", type: "Park", address: "285 Rue Gary-Carter", site: "https://montreal.ca/en/places/parc-jarry"},
	{name: "Stade IGA", type: "Sports", address: "285 Rue Gary-Carter", site: "http://stadeiga.com/en/"},
	{name: "Parc Saint-Vincent-Ferrier", type: "Park", address: "8172 Rue Drolet", site: "https://montreal.ca/en/places/parc-saint-vincent-ferrier"},
	{name: "Parc G&eacute;rard-Lalonde", type: "Park", address: "375 Rue Jarry Est", site: "#"}];
		
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