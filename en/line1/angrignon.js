function init()
{
	spots = [{name: "Terminus Angrignon", type: "Bus Terminal", address: "3500 Boulevard des Trinitaires", site: "https://exo.quebec/en/trip-planner/intermodal-installations/angrignon-terminal"},
	{name: "Carrefour Angrignon", type: "Mall", address: "7077 Boulevard Newman", site: "http://www.carrefourangrignon.com/en/"},
	{name: "Parc Angrignon", type: "Park", address: "3400 Boulevard des Trinitaires", site: "https://montreal.ca/en/places/parc-angrignon"},
	{name: "Place Newman", type: "Mall", address: "2101 Avenue Dollard", site: "http://www.croftonmoore.com/property-details.php?pid=48"},
	{name: "Les Tours Angrignon", type: "Residence", address: "1500 Boulevard Angrignon", site: "https://www.selectionretraite.com/en/residence/lasalle/selection-tours-angrignon"},
	{name: "Les Tours Serenity", type: "Residence", address: "1700 Boulevard Angrignon", site: "https://serenitytowers.ca/"},
	{name: "C&eacute;gep Andr&eacute;-Laurendeau via Bus 113", type: "College", address: "1111 Rue Lapierre", site: "https://www.claurendeau.qc.ca/"},
	{name: "Habitations Angrignon I et II", type: "Residence", address: "3055 Boulevard des Trinitaires", site: "https://www.omhm.qc.ca/en/tenant-services/habitations-angrignon-i-et-ii/"},
	{name: "Le Conrad", type: "Residence", address: "1601 Boulevard Angrignon", site: "https://www.leconrad.com/en/"},
	{name: "Habitations Les Trinitaires", type: "Residence", address: "1771 Boulevard Angrignon", site: "https://habitationslestrinitaires.weebly.com/"}];
	
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
