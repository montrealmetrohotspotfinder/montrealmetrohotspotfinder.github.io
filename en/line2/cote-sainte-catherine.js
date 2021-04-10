function init()
{
	spots = [{name: "Mus&eacute;e de l&#39;Holocauste", type: "Museum", address: "5151 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://museeholocauste.ca/en/"},
	{name: "Centre Segal", type: "Theatre", address: "5170 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.segalcentre.org/"},
	{name: "Centre Cummings", type: "Residence", address: "5700 Avenue de Westbury", site: "https://cummingscentre.org/"},
	{name: "Talmud Torahs Unis de Montr&eacute;al", type: "School", address: "4840 Avenue Saint-Kevin", site: "https://azrieli-tth.ca/talmud-torah/welcome/"},
	{name: "Centre Communautaire Juif", type: "Cultural Centre", address: "5400 Avenue de Westbury", site: "https://www.ymywha.com/"},
	{name: "Spanish & Portuguese Synagogue of Montreal", type: "Synagogue", address: "4894 Avenue Saint-Kevin", site: "https://www.thespanish.org/"},
	{name: "&Eacute;cole Internationale Marie de France", type: "School", address: "4700 Rue Fulton", site: "https://www.cimf.ca/"},
	{name: "Coll&egrave;ge International Marie de France", type: "School", address: "4635 Chemin Queen-Mary", site: "https://www.cimf.ca/"},
	{name: "Parc Mackenzie-King", type: "Park", address: "4907 Avenue Saint-Kevin", site: "https://montreal.ca/en/places/parc-mackenzie-king"},
	{name: "Institut Universitaire de G&eacute;riatrie de Montr&eacute;al, Alfred-Desrochers Pavilion", type: "Residence", address: "5325 Avenue Victoria", site: "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-alfred-desrochers"}];
	
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