function init()
{
	spots = [{name: "Plaza Saint-Hubert", type: "Shopping", address: "6841 Rue Saint-Hubert", site: "https://www.plazasthubert.com/en/"},
	{name: "&Eacute;glise Notre-Dame-de-la-D&eacute;fense", type: "Church", address: "6800 Avenue Henri-Julien", site: "https://diocesemontreal.org/en/lets-connect/churches-parishes/notre-dame-de-la-defense-italiens"},
	{name: "&Eacute;glise Saint-&Eacute;douard", type: "Church", address: "6500 Rue de Saint-Vallier", site: "#"},
	{name: "&Eacute;cole La Mennais", type: "School", address: "6521 Rue Saint-Denis", site: "https://la-mennais.csdm.ca/"},
	{name: "Chambre de la Jeunesse", type: "Courthouse", address: "410 Rue de Bellechasse", site: "https://www.justice.gouv.qc.ca/en/judicial-system/courts-and-tribunals-of-quebec/court-of-quebec/youth-division"},
	{name: "Th&eacute;&acirc;tre Plaza", type: "Theatre", address: "6505 Rue Saint-Hubert", site: "https://www.theatreplaza.ca/"},
	{name: "Beaubien Bagel", type: "Restaurant", address: "828 Rue Beaubien Est", site: "#"}];
	
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
