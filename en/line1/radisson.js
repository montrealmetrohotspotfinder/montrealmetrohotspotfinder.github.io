function init()
{
	spots = [{name: "Place Versailles", type: "Mall", address: "7275 Rue Sherbrooke Est", site: "https://www.placeversailles.com/en"},
	{name: "Auberge Royal Versailles", type: "Hotel", address: "7200 Rue Sherbrooke Est", site: "https://www.royalversailles.com/en/"},
	{name: "Mercier&#8211;Hochelaga-Maisonneuve Borough Hall", type: "Government", address: "6854 Rue Sherbrooke Est", site: "https://montreal.ca/en/places/mercier-hochelaga-maisonneuve-borough-hall"},
	{name: "Le Repos Saint-Fran&ccedil;ois-d&#39;Assise", type: "Cemetery", address: "6893 Rue Sherbrooke Est", site: "http://www.rsfa.ca/"},
	{name: "Terminus Radisson", type: "Bus Terminal", address: "7155 Rue Sherbrooke Est", site: "https://exo.quebec/en/trip-planner/intermodal-installations/radisson-terminal"},
	{name: "Galeries d&#39;Anjou via Bus 44", type: "Mall", address: "7999 Boulevard des Galeries-d&#39;Anjou", site: "https://www.cfshops.com/galeries-d-anjou.html"},
	{name: "Les Halles d&#39;Anjou via Bus 44", type: "Mall", address: "7500 Boulevard des Galeries-d&#39;Anjou", site: "https://www.hallesdanjou.com/en/home.html"},
	{name: "Coll&egrave;ge d&#39;Anjou via Bus 44", type: "School", address: "11000 Rue Renaude-Lapointe", site: "https://collegedanjou.qc.ca/"},
	{name: "Parc du Vaisseau-d&#39;Or", type: "Park", address: "3021 Rue du Trianon", site: "https://montreal.ca/en/places/parc-du-vaisseau-dor"},
	{name: "Parc Radisson", type: "Park", address: "5321 Rue Radisson", site: "https://montreal.ca/en/places/parc-radisson"},
	{name: "C&eacute;gep Marie-Victorin via Bus 444", type: "College", address: "7000 Rue Marie-Victorin", site: "https://www.collegemv.qc.ca/"},
	{name: "Parc des Roseraies via Bus 44", type: "Park", address: "7070 Avenue de la Nantaise", site: "https://montreal.ca/en/places/parc-des-roseraies"},
	{name: "Les Terrasses Versailles via Bus 44", type: "Residence", address: "6923 Boulevard des Galeries-d&#39;Anjou", site: "https://www.residencesexcellence.com/residences/terrasses-versailles/accueil"},
	{name: "&Eacute;cole des Roseraies via Bus 44", type: "School", address: "6440 Boulevard des Galeries-d&#39;Anjou", site: "https://desros.jimdofree.com/"},
	{name: "Institut Universitaire en Sant&eacute; Mentale de Montr&eacute;al", type: "Hospital", address: "7401 Rue Hochelaga", site: "https://ciusss-estmtl.gouv.qc.ca/soins-et-services/cliniques-specialisees-par-installation/institut-universitaire-en-sante-mentale"}];
	
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
