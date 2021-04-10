function init()
{
	spots = [{name: "Maison Saint-Gabriel", type: "Museum", address: "2146 Place Dublin", site: "https://www.maisonsaintgabriel.ca/en"},
	{name: "Parc du Canal de Lachine", type: "Park", address: "", site: "https://www.pc.gc.ca/en/lhn-nhs/qc/canallachine"},
	{name: "Parc Saint-Gabriel", type: "Park", address: "2355 Rue Mullins", site: "https://montreal.ca/en/places/parc-saint-gabriel"},
	{name: "Parc d&#39;Argenson", type: "Park", address: "2900 Rue Centre", site: "https://montreal.ca/en/places/parc-dargenson"},
	{name: "Parc Atwater / Saint-Charles", type: "Park", address: "2880 Rue Saint-Charles", site: "https://montreal.ca/en/places/parc-atwater-saint-charles"},
	{name: "Ar&eacute;na Saint-Charles", type: "Sports", address: "1055 Rue d&#39;Hibernia", site: "https://montreal.ca/en/places/arena-saint-charles"}];
	
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