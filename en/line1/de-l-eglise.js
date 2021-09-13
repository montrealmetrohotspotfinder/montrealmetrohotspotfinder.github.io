function init()
{
	spots = [{name: "Promenade Wellington", type: "Shopping", address: "266 Rue Hickson", site: "http://www.promenadewellington.com/en"},
	{name: "Auditorium de Verdun", type: "Sports", address: "4110 Boulevard LaSalle", site: "https://montreal.ca/en/places/auditorium-de-verdun"},
	{name: "Plage de Verdun", type: "Beach", address: "4110 Boulevard LaSalle", site: "https://montreal.ca/en/places/plage-urbaine-de-verdun"},
	{name: "Parc Arthur-Therrien", type: "Park", address: "3750 Boulevard Ga&eacute;tan-Laberge", site: "https://montreal.ca/en/places/parc-arthur-therrien"},
	{name: "Stade Ronald-Pich&eacute;", type: "Sports", address: "3750 Boulevard Ga&eacute;tan-Laberge", site: "#"},
	{name: "H&ocirc;pital de Verdun", type: "Hospital", address: "4000 Boulevard LaSalle", site: "https://www.ciusss-centresudmtl.gouv.qc.ca/etablissement/hopital-de-verdun"},
	{name: "Parc J.-Albert-Gari&eacute;py", type: "Park", address: "10 All&eacute;e des Brises-du-Fleuve", site: "https://montreal.ca/en/places/parc-j-albert-gariepy"},
	{name: "&Eacute;glise Notre-Dame-des-Sept-Douleurs de Montr&eacute;al", type: "Church", address: "4155 Rue Wellington", site: "http://nddt.org/"},
	{name: "Church of the Epiphany", type: "Church", address: "4322 Rue Wellington", site: "https://epiphanyverdun.com/"},
	{name: "&Eacute;cole Notre-Dame-des-Sept-Douleurs", type: "School", address: "320 Rue de l&#39;&Eacute;glise", site: "https://nddsd.ecoleverdun.com/"},
	{name: "Onward Gospel Church", type: "Church", address: "165 Rue Galt", site: "http://www.onwardgospelchurch.com/"},
	{name: "Parc Joannette", type: "Park", address: "292 Rue Hickson", site: "https://montreal.ca/en/places/parc-joannette"},
	{name: "Parc Monseigneur-J.-A.-Richard", type: "Park", address: "5150 Boulevard LaSalle", site: "https://montreal.ca/en/places/parc-monseigneur-j-richard"},
	{name: "Parc Monseigneur-Langlois", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-monseigneur-langlois"},
	{name: "Restaurant Crescendo", type: "Restaurant", address: "5150 Boulevard LaSalle", site: "http://www.restaurantcrescendo.com/"}];
	
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
