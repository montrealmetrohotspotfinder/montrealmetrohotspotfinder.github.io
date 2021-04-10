function init()
{
	spots = [{name: "Coll&egrave;ge de Maisonneuve", type: "College", address: "3800 Rue Sherbrooke Est", site: "https://www.cmaisonneuve.qc.ca/"},
	{name: "CLSC de Maisonneuve", type: "Agency", address: "4201 Rue Ontario Est", site: "https://ciusss-estmtl.gouv.qc.ca/etablissement/clsc-de-hochelaga-maisonneuve"},
	{name: "Parc Lalancette", type: "Park", address: "2315 Rue Nicolet", site: "https://montreal.ca/en/places/parc-lalancette"},
	{name: "&Eacute;cole Saint-&Eacute;mile", type: "School", address: "3450 Rue Davidson", site: "https://st-emile.csdm.ca/"},
	{name: "Parc Saint-&Eacute;mile", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-saint-emile"},
	{name: "&Eacute;cole Sainte-Jeanne-d&#39;Arc", type: "School", address: "3700 Rue Sherbrooke Est", site: "https://ste-jeanne-darc.cssdm.gouv.qc.ca/"},
	{name: "Parc Victor-Bourgeau", type: "Park", address: "67 Place Victor-Bourgeau", site: "https://montreal.ca/en/places/parc-victor-bourgeau"},
	{name: "Manoir Louisiane", type: "Residence", address: "3600 Rue Sherbrooke Est", site: "https://manoir-louisiane.business.site/"},
	{name: "Paroisse Sainte-Jeanne-d&#39;Arc", type: "Church", address: "2295 Rue de Chambly", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/sainte-jeanne-darc"}];
	
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