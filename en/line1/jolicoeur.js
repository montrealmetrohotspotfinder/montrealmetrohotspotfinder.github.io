function init()
{
	spots = [{name: "Parc de la V&eacute;rendrye", type: "Park", address: "5900 Rue Drake", site: "https://montreal.ca/en/places/parc-de-la-verendrye"},
		{name: "&Eacute;glise Notre-Dame-Porte-de-l&#39;Aurore", type: "Church", address: "1465 Rue de S&egrave;ve", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/notre-dame-porte-de-laurore-lituaniens"},
		{name: "&Eacute;glise Coeur-Immacul&eacute;-de-Marie", type: "Church", address: "6300 Rue Laurendeau", site: "https://www.diocesemontreal.org/en/faith-community/church/coeur-immacule-de-marie"},
		{name: "&Eacute;cole Coeur-Immacul&eacute;-de-Marie", type: "School", address: "1845 Boulevard Desmarchais", site: "https://coeur-immacule-de-marie.cssdm.gouv.qc.ca/"}];
	
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
