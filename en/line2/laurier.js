function init()
{
	spots = [{name: "Spectrum Productions", type: "Studio", address: "5445 Avenue de Gasp&eacute;", site: "http://www.productionsspectrum.com/"},
	{name: "Parc Sir-Wilfrid-Laurier", type: "Park", address: "1115 Avenue Laurier Est", site: "https://montreal.ca/en/places/parc-sir-wilfrid-laurier"},
	{name: "&Eacute;cole Nationale de Th&eacute;&acirc;tre", type: "School", address: "5030 Rue Saint-Denis", site: "https://ent-nts.ca/en"},
	{name: "&Eacute;cole Sup&eacute;rieure de Ballet du Qu&eacute;bec", type: "School", address: "4816 Rue Rivard", site: "https://www.esbq.ca/en/"},
	{name: "&Eacute;glise Catholique Saint-Denis", type: "Church", address: "454 Avenue Laurier Est", site: "https://sites.google.com/view/eglisesaintdenismontreal/accueil"},
	{name: "&Eacute;cole Laurier", type: "School", address: "505 Avenue Laurier Est", site: "https://laurier.cssdm.gouv.qc.ca/"},
	{name: "Centre Champagnat", type: "School", address: "5017 Rue Saint-Hubert", site: "https://centre-champagnat.cssdm.gouv.qc.ca/"},
	{name: "Parc Berri-Saint-Joseph", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-berri-saint-joseph"},
	{name: "Parc Lahaie", type: "Park", address: "4921 Boulevard Saint-Laurent", site: "https://montreal.ca/en/places/parc-lahaie"},
	{name: "Parc Saint-Michel", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-saint-michel"},
	{name: "&Eacute;cole Saint-Enfant-J&eacute;sus", type: "School", address: "75 Rue Villeneuve Est", site: "https://st-enfant-jesus.cssdm.gouv.qc.ca/"},
	{name: "Faberg&eacute;", type: "Restaurant", address: "25 Avenue Fairmount Ouest", site: "https://www.faberge514.com/eng/home"}];
	
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
