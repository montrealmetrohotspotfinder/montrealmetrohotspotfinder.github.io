function init()
{
	spots = [{name: "&Icirc;le-des-Soeurs via Bus 21", type: "Island", address: "", site: "#"},
	{name: "Parc Poirier", type: "Park", address: "3177 Boulevard LaSalle", site: "https://montreal.ca/en/places/parc-poirier-verdun"},
	{name: "&Eacute;cole Notre-Dame-de-la-Paix", type: "School", address: "454 Avenue Caisse", site: "https://nddlp.ecoleverdun.com/"},
	{name: "R&eacute;sidence Priv&eacute;e Notre-Dame-de-la-Paix", type: "Residence", address: "3501 Rue &Eacute;thel", site: "https://bonjourresidences.com/residence/montreal-residence-privee-notre-dame-de-la-paix/"},
	{name: "Centre de Formation Professionnelle de Verdun", type: "Trade School", address: "3010 Boulevard Ga&eacute;tan-Laberge", site: "https://verdun.centrecsmb.com/"},
	{name: "&Eacute;cole Secondaire Monseigneur-Richard", type: "School", address: "3000 Boulevard Ga&eacute;tan-Laberge", site: "https://monseigneur-richard.ecoleverdun.com/"},
	{name: "Parc Sutherland-Sackville-Bain", type: "Park", address: "11 Rue Rh&eacute;aume", site: "https://montreal.ca/en/places/parc-sutherland-sackville-bain"}];
	
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