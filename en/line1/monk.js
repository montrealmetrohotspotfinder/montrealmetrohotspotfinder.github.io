function init()
{
	spots = [{name: "Institut Douglas", type: "Hospital", address: "6875 Boulevard LaSalle", site: "http://www.douglas.qc.ca/?locale=en"},
	{name: "Centre Hospitalier Ville-&Eacute;mard", type: "Hospital", address: "6935 Rue Hamilton", site: "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/clsc-de-ville-emard"},
	{name: "&Eacute;cole Honor&eacute;-Mercier", type: "School", address: "1935 Boulevard Desmarchais", site: "https://honore-mercier.csdm.ca/"},
	{name: "&Eacute;cole Dollard-des-Ormeaux", type: "School", address: "6639 Rue d&#39;Aragon", site: "http://dollard-des-ormeaux.csdm.ca/"},
	{name: "&Eacute;cole Saint-Jean-de-Matha", type: "School", address: "6970 Rue Dumas", site: "https://st-jean-de-matha.csdm.ca/"},
	{name: "Parc Clifford", type: "Park", address: "1820 Avenue Clifford", site: "https://montreal.ca/en/places/parc-clifford"},
	{name: "Parc D&#39;Arcy-McGee", type: "Park", address: "1500 Avenue Egan", site: "https://montreal.ca/en/places/parc-darcy-mcgee"},
	{name: "Parc Cur&eacute;-Albert-Arnold", type: "Park", address: "6855 Rue Hamilton", site: "https://montreal.ca/en/places/parc-cure-albert-arnold"},
	{name: "Paroisse Saint-Jean-de-Matha", type: "Church", address: "2700 Rue Allard", site: "https://www.diocesemontreal.org/en/lets-connect/churches-parishes/saint-jean-de-matha"},
	{name: "Parc Saint-Jean-Bosco", type: "Park", address: "", site: "#"},
	{name: "Paroisse Saint-Jean-Bosco", type: "Church", address: "2510 Rue Springland", site: "https://www.diocesemontreal.org/en/lets-connect/churches-parishes/saint-jean-bosco"},
	{name: "Parc Garneau", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-garneau"},
	{name: "Parc &Eacute;douard-Fabre", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-edouard-fabre"},
	{name: "Parc Saint-Jean-de-Matha", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-saint-jean-de-matha"},
	{name: "Mosqu&eacute;e El-Balkan", type: "Mosque", address: "2836 Rue Allard", site: "https://balkanmc.wordpress.com/"}];
	
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
