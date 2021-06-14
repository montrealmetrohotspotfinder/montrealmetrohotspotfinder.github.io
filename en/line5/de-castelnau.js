function init()
{
	spots = [{name: "Little Italy", type: "District", address: "", site: "https://www.mtl.org/en/experience/welcome-little-italy"},
	{name: "March&eacute; Jean-Talon", type: "Market", address: "7070 Avenue Henri-Julien", site: "https://www.marchespublics-mtl.com/en/marches/jean-talon-market/"},
	{name: "Parc Jarry", type: "Park", address: "285 Rue Gary-Carter", site: "https://montreal.ca/en/places/parc-jarry"},
	{name: "Stade IGA", type: "Sports", address: "285 Rue Gary-Carter", site: "http://stadeiga.com/en/"},
	{name: "&Eacute;cole Sainte-C&eacute;cile", type: "School", address: "7230 Avenue de Gasp&eacute;", site: "https://ste-cecile.csdm.ca/"},
	{name: "Saint Nicholas Antiochian Orthodox Church", type: "Church", address: "80 Rue de Castelnau Est", site: "http://stnicholasmtl.com/"},
	{name: "&Eacute;glise Sainte-C&eacute;cile", type: "Church", address: "7390 Avenue Henri-Julien", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/sainte-cecile"},
	{name: "Parc Victorien-Pesant", type: "Park", address: "7345 Avenue de Gasp&eacute;", site: "https://montreal.ca/en/places/parc-victorien-pesant"},
	{name: "Parc de la Petite-Italie", type: "Park", address: "6634 Rue Clark", site: "https://montreal.ca/en/places/parc-de-la-petite-italie"},
	{name: "Parc Guglielmo-Marconi", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-guglielmo-marconi"},
	{name: "Fruiterie Milano", type: "Shopping", address: "6862 Boulevard Saint-Laurent", site: "https://milanofruiterie.ca/"},
	{name: "Place Shamrock", type: "Park", address: "70 Avenue Shamrock", site: "https://montreal.ca/en/places/place-shamrock"}];
	
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
