function init()
{
	spots = [{name: "March&eacute; Atwater", type: "Market", address: "138 Avenue Atwater", site: "https://www.marchespublics-mtl.com/en/marches/atwater-market/"},
	{name: "Parc Vinet", type: "Park", address: "550 Rue Vinet", site: "https://montreal.ca/en/places/parc-vinet"},
	{name: "Th&eacute;&acirc;tre Corona", type: "Theatre", address: "2490 Rue Notre-Dame Ouest", site: "https://www.theatrecorona.ca/en/"},
	{name: "Parc Victor-Rousselot", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-victor-rousselot"},
	{name: "&Eacute;cole Victor-Rousselot", type: "School", address: "3525 Rue Sainte-&Eacute;milie", site: "https://victor-rousselot.cssdm.gouv.qc.ca/"},
	{name: "Lemay, Montreal offices", type: "Office", address: "3500 Rue Saint-Jacques", site: "https://lemay.com/"},
	{name: "&Eacute;glise Saint-Ir&eacute;n&eacute;e-de-Lyon", type: "Church", address: "3030 Rue Delisle", site: "http://st-irenee.org/accueil"},
	{name: "Habitations Workman-Delisle", type: "Residence", address: "2705 Rue Workman", site: "https://www.omhm.qc.ca/en/tenant-services/habitations-workman-delisle-5/"},
	{name: "Joe Beef", type: "Restaurant", address: "2491 Rue Notre-Dame Ouest", site: "https://joebeef.squarespace.com/"}];
					
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
	
	/*document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + "A&eacute;roport Montr&eacute;al-Trudeau and <a href=\"berri-uqam.html\">Berri-UQAM</a> <br/>station via Shuttle Bus 747" +
	"</td><td>" + "Airport<br/>Station" + "</td><td>" + "975 Boulevard Rom&eacute;o-Vachon Nord<br/>505 Rue Sainte-Catherine Est" + "</td><td>" + "<a href=\"https://www.admtl.com/en\">Website</a><br/><a href=\"http://www.stm.info/en/info/networks/metro/berri-uqam\">Website</a></td></tr></li>";*/
}

window.onload = init;
var spots;
