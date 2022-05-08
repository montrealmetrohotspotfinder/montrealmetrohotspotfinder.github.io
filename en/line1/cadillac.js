function init()
{
	spots = [{name: "Centre de Soins Prolong&eacute;s Grace Dart via Bus 32", type: "Residence", address: "5155 Rue Sainte-Catherine Est", site: "https://ciusss-ouestmtl.gouv.qc.ca/en/contact-location/long-term-care-centres-chsld/grace-dart-extended-care-centre/"},
	{name: "Plaza Antique", type: "Reception Hall", address: "6086 Rue Sherbrooke Est", site: "https://plazapmg.com/en/plaza-antique/"},
	{name: "H&ocirc;tel Chablis Cadillac", type: "Hotel", address: "5800 Rue Sherbrooke Est", site: "https://www.chabliscadillac.com/?lang=en"},
	{name: "Parc de l&#39;Ancienne-P&eacute;pini&egrave;re", type: "Park", address: "5220 Rue du Quesne", site: "https://montreal.ca/en/places/parc-de-lancienne-pepiniere"},
	{name: "Parc Jean-Amyot", type: "Park", address: "6110 Rue de Marseille", site: "https://montreal.ca/en/places/parc-jean-amyot"},
	{name: "&Eacute;cole Rosalie-Jett&eacute;", type: "School", address: "5100 Rue Bossuet", site: "https://rosalie-jette.csdm.ca/"},
	{name: "&Eacute;cole Notre-Dame-des-Victoires", type: "School", address: "2720 Rue Bossuet", site: "https://notre-dame-des-victoires.csdm.ca/"},
	{name: "Sanctuaire Marie-Reine-des-Coeurs", type: "Church", address: "5875 Rue Sherbrooke Est", site: "https://smrdc.org/"},
	{name: "Parc Bossuet", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-bossuet"},
	{name: "Association Pulmonaire du Qu&eacute;bec", type: "Agency", address: "6070 Rue Sherbrooke Est", site: "https://poumonquebec.ca/en/"},
	{name: "Service des Loisirs Saint-Fabien", type: "Cultural Centre", address: "5005 Rue du Quesne", site: "https://loisirsst-fabien.wixsite.com/accueil"}];
	
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
