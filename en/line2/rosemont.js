function init()
{
	spots = [{name: "Biblioth&egrave;que Marc-Favreau", type: "Library", address: "500 Boulevard Rosemont", site: "https://montreal.ca/en/places/bibliotheque-marc-favreau"},
	{name: "Parc des Carri&egrave;res", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-des-carrieres"},
	{name: "Parc Luc-Durand", type: "Park", address: "600 Rue des Ateliers", site: "https://montreal.ca/en/places/parc-luc-durand"},
	{name: "Habitations Saint-Vallier", type: "Residence", address: "401 Rue des Carri&egrave;res", site: "https://www.omhm.qc.ca/en/housing-directory/habitations-saint-vallier"},
	{name: "Universit&eacute; T&Eacute;LUQ, Montreal offices", type: "Office", address: "5800 Rue Saint-Denis", site: "https://www.teluq.ca/site/en/"},
	{name: "Place Raymond-Plante", type: "Park", address: "780 Boulevard Rosemont", site: "https://montreal.ca/en/places/place-raymond-plante"},
	{name: "Le Saint-&Eacute;douard", type: "Restaurant", address: "808 Boulevard Rosemont", site: "https://lesaintedouard.com/"},
	{name: "Parc du P&egrave;re-Marquette", type: "Park", address: "1602 Rue de Bellechasse", site: "https://montreal.ca/en/places/parc-du-pere-marquette"},
	{name: "Centre P&egrave;re-Marquette", type: "Cultural Centre", address: "1600 Rue de Drucourt", site: "http://centreperemarquette.ca/"},
	{name: "Ar&eacute;na P&egrave;re-Marquette", type: "Sports", address: "1605 Rue de Bellechasse", site: "https://montreal.ca/en/places/arena-pere-marquette"},
	{name: "&Eacute;cole P&egrave;re-Marquette", type: "School", address: "6030 Rue Marquette", site: "https://pere-marquette.cssdm.gouv.qc.ca/"},
	{name: "&Eacute;cole des M&eacute;tiers de l'&Eacute;quipement Motoris&eacute; de Montr&eacute;al", type: "Trade School", address: "5455 Rue Saint-Denis", site: "https://ecole-metiers-motorise.cssdm.gouv.qc.ca"}];
	
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
