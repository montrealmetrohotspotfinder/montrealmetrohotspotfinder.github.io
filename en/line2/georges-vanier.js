function init()
{
	spots = [{name: "Parc Oscar-Peterson", type: "Park", address: "810 Rue Chatham", site: "https://montreal.ca/en/places/parc-oscar-peterson"},
	{name: "Paroisse Saint Anthony of Padua", type: "Church", address: "1950 Rue Saint-Antoine Ouest", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-anthony-padua"},
	{name: "Parc de l&#39;Association-Eur&ecirc;ka", type: "Park", address: "576 Rue Chatham", site: "https://montreal.ca/en/places/parc-de-lassociation-eureka"},
	{name: "Parc Herbert-Brown-Ames", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-herbert-brown-ames"},
	{name: "&Eacute;cole de la Petite-Bourgogne", type: "School", address: "555 Rue des Seigneurs", site: "https://petite-bourgogne.cssdm.gouv.qc.ca/"},
	{name: "Centre Sportif de la Petite-Bourgogne", type: "Cultural Centre", address: "1825 Rue Notre-Dame Ouest", site: "http://www.centresportifdelapetitebourgogne.ca/en/"},
	{name: "Parc des Meubliers", type: "Park", address: "1935 Rue Notre-Dame Ouest", site: "https://montreal.ca/en/places/parc-des-meubliers"},
	{name: "Parc Herb-Trawick", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-herb-trawick"},
	{name: "Habitations de l&#39;&Eacute;rabli&egrave;re", type: "Residence", address: "1745 Rue Notre-Dame Ouest", site: "https://www.omhm.qc.ca/en/tenant-services/habitations-de-lerabliere"},
	{name: "Le SE7T", type: "Residence", address: "400 Avenue Richmond", site: "https://se7t.ca/en/"}];
	
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