function init()
{
	spots = [{name: "Vanier College", type: "College", address: "821 Avenue Sainte-Croix", site: "https://www.vaniercollege.qc.ca/"},
	{name: "C&eacute;gep de Saint-Laurent", type: "College", address: "625 Avenue Sainte-Croix", site: "https://www.cegepsl.qc.ca/"},
	{name: "Parc Decelles", type: "Park", address: "845 Rue Roy", site: "https://montreal.ca/en/places/parc-decelles"},
	{name: "Ar&eacute;na Ronald-Caron", type: "Sports", address: "625 Avenue Sainte-Croix", site: "https://athletics.dawsoncollege.qc.ca/hockey/venue/ronald-caron-arena/"},
	{name: "Parc Gohier", type: "Park", address: "730 Rue Buchanan", site: "https://montreal.ca/en/places/parc-gohier"},
	{name: "Saint-Laurent Borough Hall", type: "Government", address: "777 Boulevard Marcel-Laurin", site: "https://montreal.ca/en/places/saint-laurent-borough-hall"},
	{name: "&Eacute;cole Primaire Laurentide", type: "School", address: "465 Rue Cardinal", site: "https://laurentide.ecolesaintlaurent.ca/"},
	{name: "Biblioth&egrave;que du Vieux-Saint-Laurent", type: "Library", address: "1380 Rue de l&#39;&Eacute;glise", site: "https://montreal.ca/en/places/bibliotheque-du-vieux-saint-laurent"},
	{name: "Parc Grou", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-grou"},
	{name: "&Eacute;glise Saint-Laurent", type: "Church", address: "805 Avenue Sainte-Croix", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-laurent"},
	{name: "Biserica Sf&acirc;nta Cuvioas&abreve; Parascheva", type: "Church", address: "807 Avenue Sainte-Croix", site: "http://www.cuvioasa-parascheva-montreal.com/"}];
	
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