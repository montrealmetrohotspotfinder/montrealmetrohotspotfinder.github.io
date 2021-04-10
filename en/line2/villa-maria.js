function init()
{
	spots = [{name: "&Eacute;cole Villa-Maria", type: "School", address: "4245 Boulevard D&eacute;carie", site: "https://www.villamaria.qc.ca/en"},
	{name: "C&eacute;gep Marianopolis", type: "College", address: "4873 Avenue Westmount", site: "https://www.marianopolis.edu/"},
	{name: "Acad&eacute;mie Marymount", type: "School", address: "5100 Chemin de la C&ocirc;te Saint-Luc", site: "http://marymount.emsb.qc.ca/"},
	{name: "Village Monkland", type: "District", address: "", site: "#"}];
	
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