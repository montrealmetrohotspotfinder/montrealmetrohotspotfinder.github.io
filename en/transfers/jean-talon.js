function init()
{
	spots = [{name: "Tour Jean-Talon", type: "Office", address: "600 Rue Jean-Talon Est", site: "https://montrealundergroundcity.com/tour/tour-jean-talon/"},
	{name: "March&eacute; Jean-Talon", type: "Market", address: "7070 Avenue Henri-Julien", site: "https://www.marchespublics-mtl.com/en/marches/jean-talon-market/"},
	{name: "Plaza Saint-Hubert", type: "Shopping", address: "6841 Rue Saint-Hubert", site: "https://www.plazasthubert.com/en/"},
	{name: "R&eacute;sidence Alfredo-Gagliardi", type: "Residence", address: "7170 Rue Berri", site: "https://www.residencesenharmonie.qc.ca/en/residences/alfredo-gagliardi-residence"},
	{name: "Casa D&#39;Italia", type: "Cultural Centre", address: "505 Rue Jean-Talon Est", site: "https://www.casaditalia.org/"},
	{name: "St. George Antiochian Orthodox Church", type: "Church", address: "575 Rue Jean-Talon Est", site: "https://saintgeorgemontreal.org/"},
	{name: "Parc Le Pr&eacute;vost", type: "Park", address: "7275 Avenue Christophe-Colomb", site: "https://montreal.ca/en/places/parc-le-prevost"},
	{name: "Patro Villeray", type: "Cultural Centre", address: "7355 Avenue Christophe-Colomb", site: "https://patrovilleray.ca/"},
	{name: "&Eacute;cole Saint-Ars&egrave;ne", type: "School", address: "6972 Avenue Christophe-Colomb", site: "https://st-arsene.cssdm.gouv.qc.ca/"},
	{name: "&Eacute;glise Saint-Ars&egrave;ne", type: "Church", address: "1015 Rue B&eacute;langer", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/saint-arsene"},
	{name: "&Eacute;glise Notre-Dame-de-la-D&eacute;fense", type: "Church", address: "6800 Avenue Henri-Julien", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/notre-dame-de-la-defense-italiens"},
	{name: "Parc Dante", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-dante"},
	{name: "Maison de la Culture Claude-L&eacute;veill&eacute;e", type: "Cultural Centre", address: "911 Rue Jean-Talon Est", site: "https://montreal.ca/en/places/maison-de-la-culture-claude-leveillee"}];
					
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
