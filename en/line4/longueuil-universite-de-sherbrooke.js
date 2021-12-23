function init()
{
	spots = [{name: "Terminus Longueuil", type: "Bus Terminal", address: "120 Place Charles-Lemoyne", site: "https://exo.quebec/en/trip-planner/intermodal-installations/longueuil-terminal"},
	{name: "Universit&eacute; de Sherbrooke, Longueuil campus", type: "University", address: "150 Place Charles-Lemoyne", site: "http://www.usherbrooke.ca/longueuil/"},
	{name: "Universit&eacute; de Montr&eacute;al, Longueuil campus", type: "University", address: "101 Place Charles-Lemoyne", site: "https://www.umontreal.ca/nos-campus/longueuil/"},
	{name: "H&ocirc;tel Sandman Longueuil", type: "Hotel", address: "999 Rue de S&eacute;rigny", site: "https://www.sandmanhotels.com/locations/quebec/montreal-longueuil/hotels/montreal-longueuil-mol"},
	{name: "H&ocirc;tel Le Dauphin Montr&eacute;al-Longueuil", type: "Hotel", address: "1055 Rue Saint-Laurent Ouest", site: "https://www.hotelsdauphin.ca/en/hotels/montreal-longueuil/"},
	{name: "Place Longueuil", type: "Mall", address: "825 Rue Saint-Laurent Ouest", site: "https://www.placelongueuil.com/"},
	{name: "A&eacute;roport de Saint-Hubert via RTL", type: "Airport", address: "5700 Route de l&#39;A&eacute;roport", site: "http://www.dashl.ca/en"},
	{name: "CDI College, Longueuil campus", type: "College", address: "1111 Rue Saint-Charles Ouest", site: "https://www.cdicollege.ca/quebec/campuses/longueuil/"},
	{name: "Commission de Protection du Territoire Agricole du Qu&eacute;bec", type: "Agency", address: "25 Boulevard La Fayette", site: "http://www.cptaq.gouv.qc.ca/"},
	{name: "Axc&egrave;s Saint-Charles", type: "Residence", address: "1155 Rue Saint-Charles Ouest", site: "https://habitationstrigone.com/en/dwellings/axces-saint-charles/"},
	{name: "L&#39;Estuaire III", type: "Residence", address: "70 Rue de la Barre", site: "http://estuaire3.ca/"},
	{name: "Le D&#39;Assigny", type: "Residence", address: "110 Rue de la Barre", site: "https://groupemercille.com/residential/3-12#le-dassigny"},
	{name: "Revenu Qu&eacute;bec, Longueuil offices", type: "Agency", address: "825 Rue Saint-Laurent Ouest", site: "https://www.revenuquebec.ca/en/"},
	{name: "Tribunal Administratif du Logement du Qu&eacute;bec, Longueuil offices", type: "Agency", address: "201 Place Charles-Lemoyne", site: "https://www.tal.gouv.qc.ca/en"},
	{name: "Les Habitats Lafayette", type: "Residence", address: "100 Boulevard La Fayette", site: "http://www.residences6etoiles.com/en/lafayette.html"},
	{name: "SSQ Insurance, Longueuil offices", type: "Office", address: "1225 Rue Saint-Charles Ouest", site: "https://ssq.ca/en"},
	{name: "Canadian Space Agency", type: "Agency", address: "6767 Route de l&#39;A&eacute;roport", site: "https://www.asc-csa.gc.ca/eng/default.asp"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Longueuil campus", type: "University", address: "150 Place Charles-Lemoyne", site: "https://etudier.uqam.ca/campus/longueuil"}];
		
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
