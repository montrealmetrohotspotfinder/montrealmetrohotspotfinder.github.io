function init()
{
	hnames = [ "Fonds de Solidarit&eacute; FTQ", "Coll&egrave;ge Ahuntsic", "Coll&egrave;ge Andr&eacute;-Grasset", "Complexe Sportif Claude-Robillard", "Centre de Recherche Industrielle du Qu&eacute;bec", "&Eacute;cole Saint-G&eacute;rard", "R&eacute;gie du B&acirc;timent du Qu&eacute;bec",
	"Parc Saint-Alphonse", "Ar&eacute;na Michel-Normandin", "Institut SA", "Commission de la Construction du Qu&eacute;bec", "Comit&eacute; de Gestion de la Taxe Scolaire de l&#39;&Icirc;le de Montr&eacute;al", "Minist&egrave;re de l&#39;Agriculture, des P&ecirc;cheries et de l&#39;Alimentation, bureaux montr&eacute;alais", "M&eacute;decins du Monde Canada",
	"Parc Blanche-Lamontagne", "Institut National de la Sant&eacute; Publique du Qu&eacute;bec, bureaux montr&eacute;alais" ];
	
	htypes = [ "Agence", "Coll&egrave;ge", "Coll&egrave;ge", "Sports", "Agence", "&Eacute;cole", "Agence", "Parc", "Sports", "Coll&egrave;ge", "Agence", "Agence", "Agence", "Agence", "Parc", "Agence" ];
	
	haddresses = [ "545 Boulevard Cr&eacute;mazie Est", "9155 Rue Saint-Hubert", "1001 Boulevard Cr&eacute;mazie Est", "1000 Avenue &Eacute;mile-Journault", "1201 Boulevard Cr&eacute;mazie Est", "505 Rue de Li&egrave;ge Est", "255 Boulevard Cr&eacute;mazie Est",
	"8888 Avenue de Chateaubriand", "850 Avenue &Eacute;mile-Journault", "690 Boulevard Cr&eacute;mazie Est", "8485 Avenue Christophe-Colomb", "500 Boulevard Cr&eacute;mazie Est", "201 Boulevard Cr&eacute;mazie Est", "560 Boulevard Cr&eacute;mazie Est",
	"", "190 Boulevard Cr&eacute;mazie Est" ];
	
	hsites = [ "https://www.fondsftq.com/fr-ca/accueil.aspx", "https://www.collegeahuntsic.qc.ca/", "https://www.grasset.qc.ca/", "https://montreal.ca/lieux/complexe-sportif-claude-robillard", "https://www.criq.qc.ca/fr/", "https://st-gerard.csdm.ca/", "https://www.rbq.gouv.qc.ca/",
	"https://montreal.ca/lieux/parc-saint-alphonse", "https://montreal.ca/lieux/arena-michel-normandin", "https://sainstitute.ca/fr/accueil/", "https://www.ccq.org/", "https://cgtsim.qc.ca/", "https://www.mapaq.gouv.qc.ca/fr/Pages/Accueil.aspx", "https://www.medecinsdumonde.ca/",
	"https://montreal.ca/lieux/parc-blanche-lamontagne", "https://www.inspq.qc.ca/" ];
	
	if(hnames.length == 1){
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><em lang=\"fr\"><b>"+hnames.length+ " point d&#39;int&eacute;r&ecirc;t est &agrave; proximit&eacute; de cette station.</b></em></span><br/><br/>";
	}
	else {
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><em lang=\"fr\"><b>"+hnames.length+ " points d&#39;int&eacute;r&ecirc;t sont &agrave; proximit&eacute; de cette station.</b></em></span><br/><br/>";
	}
	
	for (var i=0; i<hnames.length; i++)
	{
		if (hsites[i] == "#")
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + hnames[i] 
			+ "</td><td>" + htypes[i] 
			+ "</td><td>" + haddresses[i] 
			+ "</td><td>" + "Aucun site Web disponible</td></tr></li>";
		}
		else
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + hnames[i] 
			+ "</td><td>" + htypes[i] 
			+ "</td><td>" + haddresses[i] 
			+ "</td><td>" + "<a href=\"" + hsites[i] + "\">Site Web</a></td></tr></li>";
		} 	
	}
}

window.onload = init;
var hnames, htypes, haddresses, hsites;
