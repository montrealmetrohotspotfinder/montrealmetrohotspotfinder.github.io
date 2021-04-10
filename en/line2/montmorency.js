function init()
{
	spots = [{name: "Place Bell", type: "Sports", address: "1950 Rue Claude-Gagn&eacute;", site: "https://www.placebell.ca/en"},
	{name: "Universit&eacute; de Montr&eacute;al, Laval campus", type: "University", address: "1700 Rue Jacques-T&eacute;treault", site: "https://www.umontreal.ca/en/our-campuses/laval-campus/"},
	{name: "Terminus Montmorency", type: "Bus Terminal", address: "555 Rue Lucien-Paiement", site: "https://exo.quebec/en/trip-planner/intermodal-installations/montmorency-terminal"},
	{name: "Coll&egrave;ge Montmorency", type: "College", address: "475 Boulevard de l&#39;Avenir", site: "https://www.cmontmorency.qc.ca/"},
	{name: "Centre Laval via STL", type: "Mall", address: "1600 Boulevard le Corbusier", site: "https://duolaval.com/en"},
	{name: "Carrefour Laval via STL", type: "Mall", address: "3003 Boulevard le Carrefour", site: "https://www.cfshops.com/carrefour-laval.html"},
	{name: "Salle Andr&eacute;-Mathieu", type: "Theatre", address: "475 Boulevard de l&#39;Avenir", site: "https://www.co-motion.ca/nos-salles-de-spectacles/salle-andre-mathieu/#"},
	{name: "Maison des Arts de Laval", type: "Theatre", address: "1395 Boulevard de la Concorde Ouest", site: "https://www.laval.ca/maisondesarts/Pages/Fr/accueil.aspx"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Laval campus", type: "University", address: "475 Boulevard de l&#39;Avenir", site: "https://etudier.uqam.ca/campus/laval"},
	{name: "Coll&egrave;ge Letendre", type: "School", address: "1000 Boulevard de l&#39;Avenir", site: "https://www.collegeletendre.qc.ca/"}];
	
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