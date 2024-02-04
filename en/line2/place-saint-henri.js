function init()
{
	spots = [{name: "Parc Sir-Georges-&Eacute;tienne-Cartier", type: "Park", address: "127 Rue du Square-Sir-George-&Eacute;tienne-Cartier", site: "https://montreal.ca/en/places/square-sir-george-etienne-cartier"},
	{name: "Parc Louis-Cyr", type: "Park", address: "167 Rue Saint-Ferdinand", site: "https://montreal.ca/en/places/parc-louis-cyr"},
	{name: "Institut Technique Aviron", type: "Trade School", address: "5460 Avenue Royalmount", site: "http://www.avirontech.com/"},
	{name: "Parc Saint-Henri", type: "Park", address: "753 Rue Agn&egrave;s", site: "https://montreal.ca/en/places/parc-saint-henri"},
	{name: "Piscine Saint-Henri", type: "Pool", address: "4055 Rue Saint-Jacques", site: "https://montreal.ca/en/places/piscine-saint-henri"},
	{name: "CLSC Saint-Henri", type: "Agency", address: "3833 Rue Notre-Dame Ouest", site: "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/clsc-de-saint-henri"},
	{name: "&Eacute;cole des M&eacute;tiers du Sud-Ouest-de-Montr&eacute;al", type: "Trade School", address: "717 Rue Saint-Ferdinand", site: "https://ecole-metiers-sud-ouest.csdm.ca/"},
	{name: "Parc &Eacute;mile-Berliner", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-emile-berliner"},
	{name: "&Eacute;cole Ludger-Duvernay", type: "School", address: "770 Rue du Couvent", site: "https://ludger-duvernay.cssdm.gouv.qc.ca/"},
	{name: "Arthurs Nosh Bar", type: "Restaurant", address: "4621 Rue Notre-Dame Ouest", site: "http://arthursmtl.com/"},
	{name: "&Eacute;glise Saint-Zotique", type: "Church", address: "4561 Rue Notre-Dame Ouest", site: "https://eglise-saint-zotique.business.site/"},
	{name: "Tacos Frida", type: "Restaurant", address: "4350 Rue Notre-Dame Ouest", site: "https://www.tacosfridamtl.ca/?lang=en"},
	{name: "Biblioth&egrave;que Saint-Henri", type: "Library", address: "4707 Rue Notre-Dame Ouest", site: "https://montreal.ca/en/places/bibliotheque-saint-henri"},
	{name: "Eva&#39;s", type: "Restaurant", address: "3981 Rue Notre-Dame Ouest", site: "#"},
	{name: "Gite L&#39;Impr&eacute;vu", type: "Hotel", address: "3932 Rue Saint-Jacques", site: "https://www.imprevu.org/index_en.html"},
	{name: "Parc de la Ferme-Brodie", type: "Park", address: "3977 Rue Saint-Jacques", site: "https://montreal.ca/en/places/parc-de-la-ferme-brodie"},
	{name: "Parc des Selliers", type: "Park", address: "712 Rue Lacasse", site: "https://montreal.ca/en/places/parc-des-selliers"},
	{name: "Parc Lacasse", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-lacasse"},
	{name: "Parc des Couturi&egrave;res", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-des-couturieres"},
	{name: "Parc du Premier-Chemin-de-Fer", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-du-premier-chemin-de-fer"}];
	
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
