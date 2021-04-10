function init()
{
	spots = [{name: "Oratoire Saint-Joseph", type: "Church", address: "3800 Chemin Queen-Mary", site: "https://www.saint-joseph.org/"},
	{name: "C&ocirc;te-des-Neiges / N.D.G. Borough Hall", type: "Government", address: "5160 Boulevard D&eacute;carie", site: "https://montreal.ca/en/cote-des-neiges-notre-dame-de-grace"},
	{name: "&Eacute;cole Iona", type: "School", address: "5000 Avenue Iona", site: "https://iona.cssdm.gouv.qc.ca/"},
	{name: "Deli Snowdon", type: "Restaurant", address: "5265 Boulevard D&eacute;carie", site: "http://www.snowdondeli.com/en/"}];
					
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