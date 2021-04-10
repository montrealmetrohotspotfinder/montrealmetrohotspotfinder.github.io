function init()
{
	spots = [{name: "Centre Communautaire Marcel-Giroux", type: "Cultural Centre", address: "4501 Avenue Bannantyne", site: "https://montreal.ca/en/places/centre-communautaire-marcel-giroux"},
	{name: "Verdun Borough Hall", type: "Government", address: "4555 Rue de Verdun", site: "https://montreal.ca/en/places/mairie-darrondissement-de-verdun"},
	{name: "Parc Willibrord", type: "Park", address: "1018 Rue Willibrord", site: "https://montreal.ca/en/places/parc-willibrord"},
	{name: "&Eacute;cole L&eacute;vis-Sauv&eacute;", type: "School", address: "655 Rue Willibrord", site: "https://levissauve.ecoleverdun.com/"},
	{name: "&Eacute;cole Chanoine-Joseph-Th&eacute;or&ecirc;t", type: "School", address: "990 5e Avenue", site: "https://cjt.ecoleverdun.com/"},
	{name: "Parc du Souvenir", type: "Park", address: "4525 Rue de Verdun", site: "https://montreal.ca/en/places/parc-du-souvenir"},
	{name: "&Eacute;glise de Notre-Dame-de-Lourdes", type: "Church", address: "4949 Rue de Verdun", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/notre-dame-de-lourdes"},
	{name: "&Eacute;cole Notre-Dame-de-Lourdes", type: "School", address: "504 5e Avenue", site: "https://ndl.ecoleverdun.com/"},
	{name: "Grace Church", type: "Church", address: "501 5e Avenue", site: "http://www.gracechurchverdun.com/"}];
	
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