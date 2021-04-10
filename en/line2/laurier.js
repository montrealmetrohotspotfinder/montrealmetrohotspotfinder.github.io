function init()
{
	spots = [{name: "Spectrum Productions", type: "Studio", address: "5445 Avenue de Gasp&eacute;", site: "http://www.productionsspectrum.com/"},
	{name: "Parc Sir-Wilfrid-Laurier", type: "Park", address: "1115 Avenue Laurier Est", site: "https://montreal.ca/en/places/parc-sir-wilfrid-laurier"},
	{name: "&Eacute;cole Nationale de Th&eacute;&acirc;tre", type: "School", address: "5030 Rue Saint-Denis", site: "https://ent-nts.ca/en"},
	{name: "&Eacute;cole Sup&eacute;rieure de Ballet du Qu&eacute;bec", type: "School", address: "4816 Rue Rivard", site: "https://www.esbq.ca/en/"},
	{name: "&Eacute;glise Catholique Saint-Denis", type: "Church", address: "454 Avenue Laurier Est", site: "https://sites.google.com/view/eglisesaintdenismontreal/accueil"}];
	
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