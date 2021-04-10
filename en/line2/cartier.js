function init()
{
	spots = [{name: "Pont Viau", type: "Bridge", address: "", site: "#"},
	{name: "Terminus Cartier", type: "Bus Terminal", address: "5 Boulevard Cartier Ouest", site: "https://exo.quebec/en/trip-planner/intermodal-installations/cartier-terminal"},
	{name: "Ar&eacute;na Cartier", type: "Sports", address: "100 Mont&eacute;e Major", site: "https://www.laval.ca/lieux/Pages/Fr/arena-cartier.aspx"},
	{name: "Parc Cartier", type: "Park", address: "45 Boulevard Cartier Ouest", site: "https://www.laval.ca/lieux/Pages/Fr/parc-cartier.aspx"},
	{name: "Cour Municipale de la Ville de Laval", type: "Courthouse", address: "55 Boulevard des Laurentides", site: "https://www.laval.ca/lieux/Pages/Fr/cour-municipale.aspx"},
	{name: "Parc &Eacute;mile", type: "Park", address: "55 Boulevard Cartier Ouest", site: "#"}];
	
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