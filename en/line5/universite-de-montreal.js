function init()
{
	spots = [{name: "Universit&eacute; de Montr&eacute;al", type: "University", address: "2900 Boulevard &Eacute;douard-Montpetit", site: "https://www.umontreal.ca/en/"},
	{name: "Coll&egrave;ge Jean-de-Br&eacute;beuf", type: "College", address: "3200 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.brebeuf.qc.ca/"},
	{name: "CHU Sainte-Justine", type: "Hospital", address: "3175 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.chusj.org/Home"},
	{name: "HEC Montr&eacute;al", type: "School", address: "3000 Chemin de la C&ocirc;te-Sainte-Catherine", site: "https://www.hec.ca/en/"}];
	
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