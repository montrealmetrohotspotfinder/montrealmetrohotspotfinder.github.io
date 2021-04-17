function init()
{
	spots = [{name: "Village Champlain", type: "Mall", address: "7788 Rue Sherbrooke Est", site: "#"},
	{name: "Place Versailles", type: "Mall", address: "7275 Rue Sherbrooke Est", site: "https://www.placeversailles.com/en"},
	{name: "Terminus Honor&eacute;-Beaugrand", type: "Bus Terminal", address: "4755 Rue Honor&eacute;-Beaugrand", site: "https://exo.quebec/en/transit-planner/honore-beaugrand-station"},
	{name: "Parc Li&eacute;bert", type: "Park", address: "2848 Rue Li&eacute;bert", site: "https://montreal.ca/en/places/parc-liebert"},
	{name: "&Eacute;cole Sainte-Louise-de-Marillac", type: "School", address: "8100 Rue de Marseille", site: "https://ste-louise-de-marillac.csdm.ca/"},
	{name: "Parc Michel-Bourdon", type: "Park", address: "4507 Rue Joseph-A.-Rodier", site: "https://montreal.ca/en/places/parc-michel-bourdon"},
	{name: "Manoir Claudette Barr&eacute;", type: "Residence", address: "7979 Rue Sherbrooke Est", site: "https://www.manoirclaudettebarre.ca/"},
	{name: "Parc Dup&eacute;r&eacute;", type: "Park", address: "4404 Rue Saint-Donat", site: "https://montreal.ca/en/places/parc-dupere"},
	{name: "Centre d&#39;H&eacute;bergement Jean-Hubert-Biermans", type: "Residence", address: "7905 Rue Sherbrooke Est", site: "https://ciusss-estmtl.gouv.qc.ca/etablissement/chsld-jean-hubert-biermans"},
	{name: "Centre d&#39;H&eacute;bergement Pierre-Joseph-Triest", type: "Residence", address: "4900 Boulevard Lapointe", site: "https://ciusss-estmtl.gouv.qc.ca/etablissement/chsld-pierre-joseph-triest"}];
	
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
