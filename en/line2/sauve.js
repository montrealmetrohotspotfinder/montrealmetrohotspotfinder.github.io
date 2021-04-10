function init()
{
	spots = [{name: "Parc Henri-Julien", type: "Park", address: "9300 Rue Saint-Denis", site: "https://montreal.ca/en/places/parc-henri-julien"},
	{name: "Parc d&#39;Auteuil", type: "Park", address: "350 Rue Sauv&eacute; Est", site: "https://montreal.ca/en/places/parc-dauteuil"},
	{name: "R&ecirc;vanous", type: "Residence", address: "9870 Rue Laverdure", site: "https://www.revanous.org/"},
	{name: "&Eacute;cole Christ-Roi", type: "School", address: "525 Rue de Louvain Est", site: "https://christ-roi.csdm.ca/"},
	{name: "&Eacute;cole Marie-Anne", type: "School", address: "100 Rue Sauv&eacute; Est", site: "https://marie-anne.csdm.ca/"}];
	
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