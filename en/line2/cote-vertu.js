function init()
{
	spots = [{name: "Terminus C&ocirc;te-Vertu", type: "Bus Terminal", address: "1505 Boulevard de la C&ocirc;te-Vertu Ouest", site: "https://exo.quebec/en/trip-planner/intermodal-installations/cote-vertu-terminal"},
	{name: "Les Galeries Norgate", type: "Shopping", address: "1179 Boulevard D&eacute;carie", site: "#"},
	{name: "Place Vertu", type: "Mall", address: "3131 Boulevard de la C&ocirc;te-Vertu Ouest", site: "https://www.placevertu.com/en/"},
	{name: "Sph&egrave;retech Saint-Laurent", type: "Shopping", address: "3500 Boulevard de la C&ocirc;te-Vertu Ouest", site: "#"},
	{name: "Vanier College", type: "College", address: "821 Avenue Sainte-Croix", site: "https://www.vaniercollege.qc.ca/"},
	{name: "C&eacute;gep de Saint-Laurent", type: "College", address: "625 Avenue Sainte-Croix", site: "https://www.cegepsl.qc.ca/"},
	{name: "Parc Decelles", type: "Park", address: "845 Rue Roy", site: "https://montreal.ca/en/places/parc-decelles"},
	{name: "D&eacute;carie Hot Dogs", type: "Restaurant", address: "953 Boulevard D&eacute;carie", site: "#"},
	{name: "Centre des Loisirs de Saint-Laurent", type: "Theatre", address: "1375 Rue Grenet", site: "https://montreal.ca/en/places/centre-des-loisirs-de-saint-laurent"},
	{name: "GSK", type: "Pharmaceutical", address: "1765 Boulevard de la C&ocirc;te-Vertu Ouest", site: "https://ca.gsk.com/en-ca/"},
	{name: "&Eacute;cole Peter Hall", type: "School", address: "840 Boulevard de la C&ocirc;te-Vertu Ouest", site: "http://peterhall.qc.ca/en/"},
	{name: "&Eacute;glise Saint-Laurent", type: "Church", address: "805 Avenue Sainte-Croix", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-laurent"},
	{name: "Biserica Sf&acirc;nta Cuvioas&abreve; Parascheva", type: "Church", address: "807 Avenue Sainte-Croix", site: "http://www.cuvioasa-parascheva-montreal.com/"},
	{name: "Ar&eacute;na Ronald-Caron", type: "Sports", address: "625 Avenue Sainte-Croix", site: "https://athletics.dawsoncollege.qc.ca/hockey/venue/ronald-caron-arena/"},
	{name: "Parc B&eacute;langer", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-belanger"}];
	
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