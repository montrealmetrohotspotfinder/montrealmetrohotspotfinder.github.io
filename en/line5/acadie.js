function init()
{
	spots = [{name: "Altasciences", type: "Pharmacy", address: "1100 Avenue Beaumont", site: "https://www.altasciences.com/"},
	{name: "March&eacute; Central via Bus 179", type: "Mall", address: "9187 Boulevard de l&#39;Acadie", site: "https://www.marchecentral.com/en"},
	{name: "Parc Hamilton", type: "Park", address: "", site: "#"},
	{name: "Universit&eacute; de Montr&eacute;al, MIL campus", type: "University", address: "1375 Avenue Th&eacute;r&egrave;se-Lavoie-Roux", site: "https://campusmil.umontreal.ca/"}];
	
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
