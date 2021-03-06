function init()
{
	spots = [{name: "Fonds de Solidarit&eacute; FTQ", type: "Agency", address: "545 Boulevard Cr&eacute;mazie Est", site: "https://www.fondsftq.com/en"},
	{name: "Coll&egrave;ge Ahuntsic", type: "College", address: "9155 Rue Saint-Hubert", site: "https://www.collegeahuntsic.qc.ca/"},
	{name: "Coll&egrave;ge Andr&eacute;-Grasset", type: "College", address: "1001 Boulevard Cr&eacute;mazie Est", site: "https://www.grasset.qc.ca/"},
	{name: "Complexe Sportif Claude-Robillard", type: "Sports", address: "1000 Avenue &Eacute;mile-Journault", site: "https://montreal.ca/en/places/complexe-sportif-claude-robillard"},
	{name: "Centre de Recherche Industrielle du Qu&eacute;bec", type: "Agency", address: "1201 Boulevard Cr&eacute;mazie Est", site: "https://www.criq.qc.ca/en/"},
	{name: "&Eacute;cole Saint-G&eacute;rard", type: "School", address: "505 Rue de Li&egrave;ge Est", site: "https://st-gerard.csdm.ca/"},
	{name: "R&eacute;gie du B&acirc;timent du Qu&eacute;bec", type: "Agency", address: "255 Boulevard Cr&eacute;mazie Est", site: "https://www.rbq.gouv.qc.ca/en.html"},
	{name: "Parc Saint-Alphonse", type: "Park", address: "8888 Avenue de Chateaubriand", site: "https://montreal.ca/en/places/parc-saint-alphonse"},
	{name: "Ar&eacute;na Michel-Normandin", type: "Sports", address: "850 Avenue &Eacute;mile-Journault", site: "https://montreal.ca/en/places/arena-michel-normandin"},
	{name: "Institut SA", type: "College", address: "690 Boulevard Cr&eacute;mazie Est", site: "https://sainstitute.ca/"},
	{name: "Commission de la Construction du Qu&eacute;bec", type: "Agency", address: "8485 Avenue Christophe-Colomb", site: "https://www.ccq.org/en"},
	{name: "Comit&eacute; de Gestion de la Taxe Scolaire de l&#39;&Icirc;le de Montr&eacute;al", type: "Agency", address: "500 Boulevard Cr&eacute;mazie Est", site: "https://cgtsim.qc.ca/en/"},
	{name: "Minist&egrave;re de l&#39;Agriculture, des P&ecirc;cheries et de l&#39;Alimentation, Montreal offices", type: "Agency", address: "201 Boulevard Cr&eacute;mazie Est", site: "https://www.mapaq.gouv.qc.ca/fr/Pages/Accueil.aspx"},
	{name: "Doctors of the World Canada", type: "Agency", address: "560 Boulevard Cr&eacute;mazie Est", site: "https://www.doctorsoftheworld.ca/"},
	{name: "Parc Blanche-Lamontagne", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-blanche-lamontagne"},
	{name: "Institut National de la Sant&eacute; Publique du Qu&eacute;bec, Montreal offices", type: "Agency", address: "190 Boulevard Cr&eacute;mazie Est", site: "https://www.inspq.qc.ca/en"}];
	
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
