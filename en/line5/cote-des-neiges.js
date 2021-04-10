function init()
{
	spots = [{name: "Cimeti&egrave;re Notre-Dame-des-Neiges", type: "Cemetery", address: "4601 Chemin de la C&ocirc;te-des-Neiges", site: "https://www.cimetierenotredamedesneiges.ca/en"},
	{name: "Oratoire Saint-Joseph", type: "Church", address: "3800 Chemin Queen-Mary", site: "https://www.saint-joseph.org/en/"},
	{name: "Jewish General Hospital", type: "Hospital", address: "3755 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.jgh.ca/"},
	{name: "CHU Sainte-Justine", type: "Hospital", address: "3175 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.chusj.org/Home"},
	{name: "Maison de la Culture C&ocirc;te-des-Neiges", type: "Theatre", address: "5290 Chemin de la C&ocirc;te-des-Neiges", site: "http://ville.montreal.qc.ca/culture/en/maison-de-la-culture-de-cote-des-neiges"},
	{name: "Centre Communautaire de Loisir de la C&ocirc;te-des-Neiges", type: "Cultural Centre", address: "5347 Chemin de la C&ocirc;te-des-Neiges", site: "https://celocdn.org/"},
	{name: "Parc Jean-Brillant", type: "Park", address: "5252 Avenue Decelles", site: "https://montreal.ca/en/places/parc-jean-brillant-cote-des-neiges-notre-dame-de-grace"},
	{name: "&Eacute;cole de Th&eacute;ologie &Eacute;vang&eacute;lique du Qu&eacute;bec", type: "School", address: "4824 Chemin de la C&ocirc;te-des-Neiges", site: "https://www.eteq.ca/d8/en"},
	{name: "Centre Hospitalier de St. Mary", type: "Hospital", address: "3830 Avenue Lacombe", site: "http://www.smhc.qc.ca/en/"}];
	
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