function init()
{
	spots = [{name: "Gare Centrale", type: "Train Station", address: "895 Rue de la Gaucheti&egrave;re Ouest", site: "https://garecentrale.ca/en/"},
	{name: "Terminus Centre-Ville", type: "Bus Terminal", address: "1000 Rue de la Gaucheti&egrave;re Ouest", site: "https://exo.quebec/en/trip-planner/intermodal-installations/terminus-centre-ville"},
	{name: "Les Halles de la Gare", type: "Mall", address: "895 Rue de la Gaucheti&egrave;re Ouest", site: "https://garecentrale.ca/en/halles-de-la-gare"},
	{name: "Place Bonaventure", type: "Convention Centre", address: "800 Rue de la Gaucheti&egrave;re Ouest", site: "http://placebonaventure.com/en/"},
	{name: "STM Headquarters", type: "Office", address: "800 Rue de la Gaucheti&egrave;re Ouest", site: "http://www.stm.info/en"},
	{name: "Bell Centre", type: "Sports", address: "1909 Avenue des Canadiens-de-Montr&eacute;al", site: "https://www.centrebell.ca/en"},
	{name: "1000 De La Gaucheti&egrave;re", type: "Office", address: "1000 Rue de la Gaucheti&egrave;re Ouest", site: "https://www.le1000.com/en"},
	{name: "Place Ville Marie via Underground City", type: "Mall", address: "1 Place Ville Marie", site: "http://www.placevillemarie.com/en"},
	{name: "H&ocirc;tel Fairmont Reine Elizabeth via Underground City", type: "Hotel", address: "900 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.fairmont.com/queen-elizabeth-montreal/"},
	{name: "Marriott Ch&acirc;teau Champlain", type: "Hotel", address: "1050 Rue de la Gaucheti&egrave;re Ouest", site: "https://www.marriott.com/hotels/travel/yulcc-montreal-marriott-chateau-champlain/"},
	{name: "ICAO Building via Underground City", type: "Office", address: "999 Boulevard Robert-Bourassa", site: "https://www.icao.int/Pages/default.aspx"},
	{name: "Cath&eacute;drale Marie Reine du Monde", type: "Church", address: "1085 Rue de la Cath&eacute;drale", site: "http://www.cathedralecatholiquedemontreal.org/"},
	{name: "Square Dorchester", type: "Town Square", address: "2903 Rue Peel", site: "https://montreal.ca/en/places/square-dorchester"},
	{name: "&Eacute;difice Sun Life", type: "Office", address: "1155 Rue Metcalfe", site: "https://www.sunlifebuilding.ca/"},
	{name: "Time Supper Club", type: "Reception Hall", address: "997 Rue Saint-Jacques", site: "https://timesupperclub.com/"},
	{name: "Immigration, Refugees and Citizenship Canada", type: "Government", address: "1010 Rue Saint-Antoine Ouest", site: "https://www.canada.ca/en/services/immigration-citizenship.html"},
	{name: "H&ocirc;tel Bonaventure", type: "Hotel", address: "900 Rue de la Gaucheti&egrave;re Ouest", site: "https://hotelbonaventure.com/en/"},
	{name: "Place du Canada", type: "Town Square", address: "1010 Rue de la Gaucheti&egrave;re Ouest", site: "https://montreal.ca/en/places/place-du-canada"}];
	
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