function init()
{
	spots = [{name: "Promenade Wellington", type: "Shopping", address: "266 Rue Hickson", site: "http://www.promenadewellington.com/en"},
	{name: "Auditorium de Verdun", type: "Sports", address: "4110 Boulevard LaSalle", site: "https://montreal.ca/en/places/auditorium-de-verdun"},
	{name: "Plage de Verdun", type: "Beach", address: "4110 Boulevard LaSalle", site: "https://montreal.ca/en/places/plage-urbaine-de-verdun"},
	{name: "Parc Arthur-Therrien", type: "Park", address: "3750 Boulevard Ga&eacute;tan-Laberge", site: "https://montreal.ca/en/places/parc-arthur-therrien"},
	{name: "Stade Ronald-Pich&eacute;", type: "Sports", address: "3750 Boulevard Ga&eacute;tan-Laberge", site: "#"},
	{name: "H&ocirc;pital de Verdun", type: "Hospital", address: "4000 Boulevard LaSalle", site: "https://www.ciusss-centresudmtl.gouv.qc.ca/etablissement/hopital-de-verdun"},
	{name: "Parc J.-Albert-Gari&eacute;py", type: "Park", address: "10 All&eacute;e des Brises-du-Fleuve", site: "https://montreal.ca/en/places/parc-j-albert-gariepy"},
	{name: "&Eacute;glise Notre-Dame-des-Sept-Douleurs de Montr&eacute;al", type: "Church", address: "4155 Rue Wellington", site: "http://nddt.org/"}];
	
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