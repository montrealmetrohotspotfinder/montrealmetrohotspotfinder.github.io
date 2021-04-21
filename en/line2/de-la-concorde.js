function init()
{
	spots = [{name: "Maison des Arts de Laval", type: "Theatre", address: "1395 Boulevard de la Concorde Ouest", site: "https://www.laval.ca/maisondesarts/Pages/Fr/accueil.aspx"},
	{name: "Coll&egrave;ge Montmorency", type: "College", address: "475 Boulevard de l&#39;Avenir", site: "https://www.cmontmorency.qc.ca/"},
	{name: "Salle Andr&eacute;-Mathieu", type: "Theatre", address: "475 Boulevard de l&#39;Avenir", site: "https://www.co-motion.ca/nos-salles-de-spectacles/salle-andre-mathieu/#"}];
	
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
