function init()
{
	spots = [{name: "Concordia University, Sir George Williams campus", type: "University", address: "1455 Boulevard de Maisonneuve Ouest", site: "http://www.concordia.ca/"},
	{name: "John Molson School of Business", type: "University", address: "1450 Rue Guy", site: "http://www.concordia.ca/jmsb.html"},
	{name: "LaSalle College", type: "College", address: "2000 Rue Sainte-Catherine Ouest", site: "https://www.lasallecollege.com/"},
	{name: "Mus&eacute;e des Beaux-Arts de Montr&eacute;al", type: "Museum", address: "1380 Rue Sherbrooke Ouest", site: "https://www.mbam.qc.ca/en"},
	{name: "Golden Square Mile", type: "District", address: "", site: "https://www.mtl.org/en/experience/golden-square-mile"},
	{name: "Faubourg Sainte-Catherine", type: "Mall", address: "1616 Rue Sainte-Catherine Ouest", site: "#"},
	{name: "Kampai Garden", type: "Restaurant", address: "1616 Rue Sainte-Catherine Ouest", site: "https://www.kampaigarden.com/"},
	{name: "Montreal General Hospital", type: "Hospital", address: "1650 Avenue Cedar", site: "http://muhc.ca/"},
	{name: "Le Chatel", type: "Residence", address: "1625 Boulevard de Maisonneuve Ouest", site: "https://lechatel.net/"},
	{name: "Leonard Cohen Mural", type: "Historical Site", address: "1420 Rue Crescent", site: "https://mumtl.org/en/projects/tower-of-song-el-mac-gene-pendon-2017/"},
	{name: "Research Institute of the McGill University Health Centre", type: "University", address: "2155 Rue Guy", site: "https://rimuhc.ca/"},
	{name: "Place du Fort", type: "Residence", address: "1411 Rue du Fort", site: "https://placedufort.com/"},
	{name: "Concordia University, Webster Library", type: "Library", address: "1455 Boulevard de Maisonneuve Ouest", site: "https://library.concordia.ca/"},
	{name: "Le 1444 Mackay", type: "Residence", address: "1444 Rue Mackay", site: "https://www.hazelviewproperties.com/residential/le-1444-mackay"},
	{name: "Sir Winston Churchill Pub", type: "Restaurant", address: "1455 Rue Crescent", site: "https://www.swcpc.com/SirWinston/"},
	{name: "&Eacute;cole des M&eacute;tiers de la Restauration et du Tourisme de Montr&eacute;al", type: "Trade School", address: "1822 Boulevard de Maisonneuve Ouest", site: "https://ecole-metiers-restauration-tourisme.cssdm.gouv.qc.ca/ecole/"},
	{name: "Place Norman-Bethune", type: "Town Square", address: "", site: "https://montreal.ca/en/places/place-norman-bethune"},
	{name: "Canadian Centre for Architecture", type: "Museum", address: "1920 Rue Baile", site: "https://www.cca.qc.ca/en/"},
	{name: "Le 2250 Appartements", type: "Residence", address: "2250 Rue Guy", site: "https://www.caprent.com/apartments-for-rent/montreal-qc/the-2250-guy/"},
	{name: "Le M&eacute;ridien Versailles", type: "Hotel", address: "1808 Rue Sherbrooke Ouest", site: "https://www.marriott.com/hotels/travel/yulmv-le-m%C3%A9ridien-versailles"},
	{name: "Ch&acirc;teau Versailles", type: "Hotel", address: "1659 Rue Sherbrooke Ouest", site: "https://www.chateauversaillesmontreal.com/"},
	{name: "H&ocirc;tel Pierce", type: "Hotel", address: "1650 Boulevard de Maisonneuve Ouest", site: "https://www.simplissimmo.ca/en/categories/pierce-hotel-by-simplissimmo"},
	{name: "H&ocirc;tel Espresso Montr&eacute;al Centre-Ville", type: "Hotel", address: "1005 Rue Guy", site: "https://www.hotelespresso.ca/"},
	{name: "Matrix College of Management, Technology and Healthcare", type: "College", address: "1980 Rue Sherbrooke Ouest", site: "http://www.matrixcollege.ca/home?"},
	{name: "1900 Lincoln", type: "Residence", address: "1900 Avenue Lincoln", site: "https://www.montrealapartmentdowntown.com/indexEn.html"},
	{name: "Ch&acirc;teau Lincoln", type: "Residence", address: "1950 Avenue Lincoln", site: "https://www.chateau-lincoln.com/en/"}];
	
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
