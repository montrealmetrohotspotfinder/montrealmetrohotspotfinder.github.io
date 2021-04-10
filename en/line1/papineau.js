function init()
{
	spots = [{name: "The Village", type: "District", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/village-montreal"},
	{name: "Conf&eacute;d&eacute;ration des Syndicats Nationaux", type: "Agency", address: "1400 Boulevard Ren&eacute;-L&eacute;vesque Est", site: "https://www.csn.qc.ca/"},
	{name: "Parc des Faubourgs", type: "Park", address: "1872 Rue Dorion", site: "https://montreal.ca/en/places/parc-des-faubourgs"},
	{name: "Prison du Pied-du-Courant", type: "Museum", address: "903 Avenue de Lorimier", site: "http://museesmontreal.org/en/museums/la-prison-des-patriotes-exhibition-centre"},
	{name: "Parc des V&eacute;t&eacute;rans", type: "Park", address: "1655 Avenue Papineau", site: "https://montreal.ca/en/places/parc-des-veterans"},
	{name: "Place Emmett-Johns (formerly Parc Maisonneuve-Cartier)", type: "Park", address: "1449 Rue Dorion", site: "https://montreal.ca/en/places/parc-maisonneuve-cartier"},
	{name: "Appartements Urbains FARO", type: "Residence", address: "1825 Rue Sainte-Rose", site: "http://www.appartementsfaro.ca/en/home.html"},
	{name: "&Eacute;ditions MD", type: "Office", address: "1815 Avenue de Lorimier", site: "https://editionsmd.com/"}];
	
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