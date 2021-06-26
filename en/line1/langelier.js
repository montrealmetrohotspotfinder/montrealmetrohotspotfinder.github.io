function init()
{
	spots = [{name: "Centre Domaine", type: "Mall", address: "3235 Avenue de Granby", site: "https://centredomaine.com/"},
	{name: "Salon de Quilles Centre Commercial Le Domaine", type: "Sports", address: "3275 Avenue de Granby", site: "https://www.quillesdomainemontreal.com/"},
	{name: "Le Repos Saint-Fran&ccedil;ois-d&#39;Assise", type: "Cemetery", address: "6893 Rue Sherbrooke Est", site: "http://www.rsfa.ca/"},
	{name: "Mercier&#8211;Hochelaga-Maisonneuve Borough Hall", type: "Government", address: "6854 Rue Sherbrooke Est", site: "https://montreal.ca/en/places/mercier-hochelaga-maisonneuve-borough-hall"},
	{name: "Biblioth&egrave;que Langelier", type: "Library", address: "6473 Rue Sherbrooke Est", site: "http://ville.montreal.qc.ca/culture/en/langelier-public-library"},
	{name: "Carrefour Langelier via Bus 33", type: "Mall", address: "7373 Boulevard Langelier", site: "https://www.carrefourlangelier.com/en/home.html"},
	{name: "Ar&eacute;na Saint-Donat", type: "Sports", address: "6750 Rue de Marseille", site: "https://montreal.ca/en/places/arena-saint-donat"},
	{name: "Parc Saint-Donat", type: "Park", address: "6800 Rue de Marseille", site: "https://montreal.ca/en/places/parc-saint-donat"},
	{name: "Parc de Lotbini&egrave;re", type: "Park", address: "1 Rue du Parc-de Lotbini&egrave;re", site: "https://montreal.ca/en/places/parc-de-lotbiniere"},
	{name: "Parc Mignault", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-mignault"},
	{name: "Centre R&eacute;cr&eacute;atif et Culturel Saint-Donat", type: "Cultural Centre", address: "6547 Rue de Marseille", site: "https://crcstdonat.org/"},
	{name: "&Eacute;cole Saint-Donat", type: "School", address: "3155 Rue Desautels", site: "https://st-donat.cssdm.gouv.qc.ca/"},
	{name: "&Eacute;glise Saint-Donat de Montr&eacute;al", type: "Church", address: "6805 Rue de Marseille", site: "https://www.eglisesaintdonatdemontreal.com/"},
	{name: "&Eacute;cole Louis-Dupire", type: "School", address: "6400 Avenue Pierre-de-Coubertin", site: "https://louis-dupire.cssdm.gouv.qc.ca/"},
	{name: "Les Habitations Le Domaine", type: "Residence", address: "2990 Avenue de Granby", site: "https://www.ledomaine.ca/"},
	{name: "&Eacute;cole Saint-Fabien", type: "School", address: "6500 Avenue de Renty", site: "https://st-fabien.cssdm.gouv.qc.ca/"},
	{name: "Paroisse Saint-Fabien", type: "Church", address: "6455 Avenue de Renty", site: "http://www.saintfabien.org/Page00.html"},
	{name: "Parc F&eacute;lix-Leclerc", type: "Park", address: "6700 Rue Fran&ccedil;ois-Boivin", site: "https://montreal.ca/en/places/parc-felix-leclerc"},
	{name: "Edward Murphy School", type: "School", address: "6800 Avenue Pierre-de-Coubertin", site: "http://edwardmurphy.emsb.qc.ca/"}];
	
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
