function init()
{
	spots = [{name: "Mus&eacute;e Juste Pour Rire", type: "Museum", address: "2095 Boulevard Saint-Laurent", site: "http://www.hahaha.com/"},
	{name: "Club Soda", type: "Theatre", address: "1225 Boulevard Saint-Laurent", site: "https://clubsoda.ca/en/index.php"},
	{name: "Best Western Plus H&ocirc;tel Montr&eacute;al", type: "Hotel", address: "161 Rue Sainte-Catherine Est", site: "https://www.bestwestern.com/en_US/book/hotel-rooms.67029.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67029"},
	{name: "Monument-National", type: "Theatre", address: "1182 Boulevard Saint-Laurent", site: "https://ent-nts.ca/en/monument-national"},
	{name: "Laurent & Clark", type: "Residence", address: "1593 Rue Clark", site: "http://laurent-clark.com/en"},
	{name: "Appartements Le Myriade", type: "Residence", address: "1445 Rue Clark", site: "https://www.mondev.ca/apartments-for-rent-montreal/ville-marie/myriade"},
	{name: "MTelus", type: "Theatre", address: "59 Rue Sainte-Catherine Est", site: "https://mtelus.com/en"},
	{name: "Place de la Paix", type: "Park", address: "", site: "http://peacepark.com/"}];
	
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