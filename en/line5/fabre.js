function init()
{
	spots = [{name: "&Eacute;glise Notre-Dame-de-la-Consolata", type: "Church", address: "1700 Rue Jean-Talon Est", site: "https://www.paroisseconsolatamtl.ca/"},
	{name: "H&ocirc;pital Jean-Talon", type: "Hospital", address: "1385 Rue Jean-Talon Est", site: "https://www.ciusssnordmtl.ca/installations/hopitaux/hopital-jean-talon/"},
	{name: "Parc de Turin", type: "Park", address: "7205 Rue Chambord", site: "https://montreal.ca/en/places/parc-de-turin"},
	{name: "&Eacute;cole Saint-Gabriel-Lalemant", type: "School", address: "7350 Rue Garnier", site: "https://st-gabriel-lalemant.csdm.ca/"},
	{name: "&Eacute;cole Pierre Elliott Trudeau", type: "School", address: "6855 Rue Cartier", site: "https://www.emsb.qc.ca/trudeau"}];
	
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