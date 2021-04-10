function init()
{
	spots = [{name: "Ar&eacute;na Francis-Bouillon", type: "Sports", address: "3175 Rue de Rouen", site: "https://montreal.ca/en/places/arena-francis-bouillon"},
	{name: "Parc Raymond-Pr&eacute;fontaine", type: "Park", address: "3100 Rue Hochelaga", site: "https://montreal.ca/en/places/parc-raymond-prefontaine"},
	{name: "Institut Teccart", type: "College", address: "3030 Rue Hochelaga", site: "https://www.teccart.qc.ca/index_en.php"},
	{name: "Coll&egrave;ge Ville-Marie", type: "School", address: "2850 Rue Sherbrooke Est", site: "https://www.cvmarie.qc.ca/"},
	{name: "L&#39;&Eacute;glise &agrave; Montr&eacute;al", type: "Church", address: "3201 Rue Hochelaga", site: "http://churchinmontreal.ca/"},
	{name: "&Eacute;cole Notre-Dame-de-l&#39;Assomption", type: "School", address: "2430 Rue Darling", site: "https://notre-dame-de-lassomption.cssdm.gouv.qc.ca/"}];
	
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