function init()
{
	hnames = [ "Terminus C&ocirc;te-Vertu", "Les Galeries Norgate", "Place Vertu", "Sph&egrave;retech Saint-Laurent", "C&eacute;gep Vanier", "C&eacute;gep de Saint-Laurent", "Parc Decelles", "D&eacute;carie Hot Dogs", 
	"Centre des Loisirs de Saint-Laurent", "GSK", "&Eacute;cole Peter Hall", "&Eacute;glise Saint-Laurent", "Biserica Sf&acirc;nta Cuvioas&abreve; Parascheva", "Ar&eacute;na Ronald-Caron",
	"Parc B&eacute;langer" ];
	
	htypes = [ "Terminus d&#39;Autobus", "Magasinage", "Centre Commercial", "Magasinage", "Coll&egrave;ge", "Coll&egrave;ge", "Parc", "Restaurant", "Th&eacute;&acirc;tre", "Pharmaceutique",
	"&Eacute;cole", "&Eacute;glise", "&Eacute;glise", "Sports", "Parc" ];
	
	haddresses = [ "1505 Boulevard de la C&ocirc;te-Vertu Ouest", "1179 Boulevard D&eacute;carie", "3131 Boulevard de la C&ocirc;te-Vertu Ouest", "3500 Boulevard de la C&ocirc;te-Vertu Ouest", 
	"821 Avenue Sainte-Croix", "625 Avenue Sainte-Croix", "845 Rue Roy", "953 Boulevard D&eacute;carie", "1375 Rue Grenet", "1765 Boulevard de la C&ocirc;te-Vertu Ouest", "840 Boulevard de la C&ocirc;te-Vertu Ouest",
	"805 Avenue Sainte-Croix", "807 Avenue Sainte-Croix", "625 Avenue Sainte-Croix", "" ];
	
	hsites = [ "https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-cote-vertu", "#", "https://www.placevertu.com", "#", "https://www.vaniercollege.qc.ca/", 
	"https://www.cegepsl.qc.ca/", "https://montreal.ca/lieux/parc-decelles", "#", "https://montreal.ca/lieux/centre-des-loisirs-de-saint-laurent", "https://ca.gsk.com/fr-ca/",
	"https://peterhall.qc.ca/", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-laurent", "http://www.cuvioasa-parascheva-montreal.com/",
	"https://athletics.dawsoncollege.qc.ca/hockey/venue/ronald-caron-arena/", "https://montreal.ca/lieux/parc-belanger" ];
	
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