function init()
{
	spots = [{name: "P&acirc;tisserie La Conca D&#39;Oro", type: "Shopping", address: "2550 Rue Jean-Talon Est", site: "https://www.laconcadoro.net/"},
	{name: "Parc Gabriel-Sagard", type: "Park", address: "7069 Rue Sagard", site: "https://montreal.ca/en/places/parc-gabriel-sagard"},
	{name: "&Eacute;cole Saint-Barth&eacute;lemy", type: "School", address: "7081 Avenue des &Eacute;rables", site: "https://st-barthelemy.csdm.ca/"},
	{name: "&Eacute;glise Biblique Pierre Angulaire", type: "Church", address: "2200 Rue Jean-Talon Est", site: "#"},
	{name: "Parc Molson", type: "Park", address: "2473 Rue Beaubien Est", site: "https://montreal.ca/en/places/parc-molson"},
	{name: "Paroisse Saint-Mathieu", type: "Church", address: "2600 Rue Jean-Talon Est", site: "https://www.diocesemontreal.org/en/lets-connect/churches-parishes/saint-mathieu"},
	{name: "Paroisse Saint-Barth&eacute;lemy", type: "Church", address: "7137 Avenue des &Eacute;rables", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-barthelemy"},
	{name: "Club L", type: "Restaurant", address: "2570 Rue Jean-Talon Est", site: "https://www.leclubl.com"}];
	
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
