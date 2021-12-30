function init()
{
	spots = [{name: "Little Maghreb", type: "District", address: "", site: "#"},
	{name: "Parc Fran&ccedil;ois-Perrault", type: "Park", address: "7525 Rue Fran&ccedil;ois-Perrault", site: "https://montreal.ca/en/places/parc-francois-perrault"},
	{name: "Biblioth&egrave;que de Saint-Michel", type: "Library", address: "7601 Rue Fran&ccedil;ois-Perrault", site: "https://montreal.ca/en/places/bibliotheque-de-saint-michel"},
	{name: "John F. Kennedy High School", type: "School", address: "3030 Rue Villeray", site: "http://jfkhighschoolemsb.com/"},
	{name: "Parc Sandro-Pertini", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-sandro-pertini"},
	{name: "&Eacute;cole Saint-Mathieu", type: "School", address: "7230 8e Avenue", site: "https://st-mathieu.csdm.ca/"},
	{name: "&Eacute;cole Joseph-Fran&ccedil;ois-Perrault", type: "School", address: "7450 Rue Fran&ccedil;ois-Perrault", site: "https://joseph-francois-perrault.csdm.ca/"},
	{name: "Parc Shaughnessy", type: "Park", address: "7634 17e Avenue", site: "https://montreal.ca/en/places/parc-shaughnessy"},
	{name: "Parc Joseph-Robin", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-joseph-robin"},
	{name: "Parc Michel-Ange", type: "Park", address: "3615 Rue Michel-Ange", site: "#"},
	{name: "Parc du Ruisseau-du-Pont-&agrave;-l&#39;Avoine (formerly Parc du Bon-Air)", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-du-ruisseau-du-pont-lavoine"},
	{name: "Le Boulevard via Bus 141", type: "Mall", address: "4270 Rue Jean-Talon Est", site: "https://www.centreboulevard.com/en/"},
	{name: "R&eacute;sidence Le St-Michel", type: "Residence", address: "7070 Boulevard Saint-Michel", site: "https://www.residencelesaintmichel.ca/en"},
	{name: "&Eacute;glise de Dieu de la Proph&eacute;tie", type: "Church", address: "7277 Boulevard Saint-Michel", site: "https://egliselaprophetie.com/"},
	{name: "Best Western H&ocirc;tel Montr&eacute;al M&eacute;tropolitain", type: "Hotel", address: "3400 Boulevard Cr&eacute;mazie Est", site: "https://www.bestwestern.com/en_US/book/hotels-in-montreal/hotel-montreal-metropolitain-bw-premier-collection/propertyCode.67031.html"}];
	
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
