function init()
{
	spots = [{name: "Place Frontenac", type: "Mall", address: "2600 Rue Ontario Est", site: "#"},
	{name: "Maison de la Culture et Biblioth&egrave;que Frontenac", type: "Theatre", address: "2550 Rue Ontario Est", site: "https://frontenac.tuxedobillet.com/"},
	{name: "Bar Metro Pub", type: "Restaurant", address: "2553 Rue Ontario Est", site: "#"},
	{name: "Parc M&eacute;d&eacute;ric-Martin", type: "Park", address: "2329 Avenue Gascon", site: "https://montreal.ca/en/places/parc-mederic-martin"},
	{name: "Centre Jean-Claude-Mal&eacute;part", type: "Cultural Centre", address: "2633 Rue Ontario Est", site: "https://cjcm.ca/"},
	{name: "Parc Walter-Stewart", type: "Park", address: "2455 Rue Larivi&egrave;re", site: "https://montreal.ca/en/places/parc-walter-stewart"},
	{name: "Parc Jos-Montferrand", type: "Park", address: "2560 Boulevard de Maisonneuve Est", site: "https://montreal.ca/en/places/parc-jos-montferrand"},
	{name: "Centre G&eacute;d&eacute;on-Ouimet", type: "School", address: "1960 Rue Poupart", site: "https://centre-gedeon-ouimet.csdm.ca/"},
	{name: "Mosqu&eacute;e Tawuba", type: "Mosque", address: "2315 Rue Ontario Est", site: "#"},
	{name: "&Eacute;cole Jean-Baptiste-Meilleur", type: "School", address: "2237 Rue Fullum", site: "https://jean-baptiste-meilleur.csdm.ca/"},
	{name: "&Eacute;cole Pierre-Dupuy", type: "School", address: "2000 Rue Parthenais", site: "https://pierre-dupuy.csdm.ca/"},
	{name: "&Eacute;cole des M&eacute;tiers des Faubourgs-de-Montr&eacute;al", type: "Trade School", address: "2000 Rue Parthenais", site: "https://ecole-metiers-faubourgs.csdm.ca/"},
	{name: "Parc Baldwin", type: "Park", address: "4355 Rue Fullum", site: "https://montreal.ca/en/places/parc-baldwin"},
	{name: "&Eacute;cole Saint-Louis-de-Gonzague", type: "School", address: "2430 Terrasse Mercure", site: "https://st-louis-de-gonzague.cssdm.gouv.qc.ca/"},
	{name: "Centre d&#39;H&eacute;bergement Armand-Lavergne", type: "Residence", address: "3500 Rue Chapleau", site: "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-armand-lavergne"},
	{name: "Centre d&#39;H&eacute;bergement Paul-Bruch&eacute;si", type: "Residence", address: "2225 Rue Rachel Est", site: "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-paul-bruchesi"},
	{name: "&Eacute;glise Presbyt&eacute;rienne Sarang Montr&eacute;al", type: "Church", address: "2315 Rue Rachel Est", site: "http://www.sarangchurch.ca/"},
	{name: "&Eacute;nergir", type: "Office", address: "1717 Rue du Havre", site: "https://www.energir.com/en/"},
	{name: "Place Joseph-Venne", type: "Park", address: "", site: "https://montreal.ca/en/places/place-joseph-venne"},
	{name: "Parc Coupal", type: "Park", address: "2340 Rue Coupal", site: "https://montreal.ca/en/places/parc-coupal"},
	{name: "Parc Magnan", type: "Park", address: "2337 Rue Magnan", site: "https://montreal.ca/en/places/parc-magnan"}];
	
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
