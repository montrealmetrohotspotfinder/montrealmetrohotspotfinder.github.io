function init()
{
	spots = [{name: "Pont Viau", type: "Bridge", address: "", site: "#"},
	{name: "Terminus Henri-Bourassa", type: "Bus Terminal", address: "590 Boulevard Henri-Bourassa Est", site: "https://exo.quebec/en/trip-planner/intermodal-installations/henri-bourassa-nord-terminal"},
	{name: "Ar&eacute;na Ahuntsic", type: "Sports", address: "10560 Rue Saint-Hubert", site: "https://montreal.ca/en/places/arena-ahuntsic"},
	{name: "Biblioth&egrave;que d&#39;Ahuntsic", type: "Library", address: "10300 Rue Lajeunesse", site: "https://montreal.ca/en/places/bibliotheque-dahuntsic"},
	{name: "Parc Nature de l&#39;&Icirc;le de la Visitation via Bus 48, 49 & 69", type: "Park", address: "11062 Avenue Wilfrid-Saint-Louis", site: "https://parcs-nature.com/public/en/ile-de-la-visitation"},
	{name: "Parc Ahuntsic", type: "Park", address: "10555 Rue Lajeunesse", site: "https://montreal.ca/en/places/parc-ahuntsic"},
	{name: "Stade Gary-Carter", type: "Sports", address: "10555 Rue Lajeunesse", site: "#"},
	{name: "Coll&egrave;ge de Bois-de-Boulogne via Bus 164 & 171", type: "College", address: "10555 Avenue de Bois-de-Boulogne", site: "https://www.bdeb.qc.ca/"},
	{name: "Maison de la Culture Ahuntsic-Cartierville", type: "Theatre", address: "10300 Rue Lajeunesse", site: "http://ville.montreal.qc.ca/culture/en/maison-de-la-culture-ahuntsic-cartierville"},
	{name: "Bagel Henri-Bourassa", type: "Restaurant", address: "443 Boulevard Henri-Bourassa Est", site: "#"},
	{name: "Centre Communautaire Ahuntsic", type: "Cultural Centre", address: "10780 Rue Laverdure", site: "https://www.solidariteahuntsic.org/"},
	{name: "Parc Jeanne-Sauv&eacute;", type: "Park", address: "451 Boulevard Gouin Est", site: "https://montreal.ca/en/places/parc-jeanne-sauve"},
	{name: "Parc du Pont Ahuntsic", type: "Park", address: "", site: "#"}];
	
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