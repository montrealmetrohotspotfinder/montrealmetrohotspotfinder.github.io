function init()
{
	hnames = [ "C&eacute;gep Vanier", "C&eacute;gep de Saint-Laurent", "Parc Decelles", "Ar&eacute;na Ronald-Caron", "Parc Gohier", "Mairie de Saint-Laurent", "&Eacute;cole Primaire Laurentide",
	"Biblioth&egrave;que du Vieux-Saint-Laurent", "Parc Grou", "&Eacute;glise Saint-Laurent", "Biserica Sf&acirc;nta Cuvioas&abreve; Parascheva" ];
	
	htypes = [ "Coll&egrave;ge", "Coll&egrave;ge", "Parc", "Sports", "Parc", "Gouvernement", "&Eacute;cole", "Biblioth&egrave;que", "Parc", "&Eacute;glise", "&Eacute;glise" ];
	
	haddresses = [ "821 Avenue Sainte-Croix", "625 Avenue Sainte-Croix", "845 Rue Roy", "625 Avenue Sainte-Croix", "730 Rue Buchanan", "777 Boulevard Marcel-Laurin", "465 Rue Cardinal",
	"1380 Rue de l&#39;&Eacute;glise", "", "805 Avenue Sainte-Croix", "807 Avenue Sainte-Croix" ];
	
	hsites = [ "https://www.vaniercollege.qc.ca/", "https://www.cegepsl.qc.ca/", "https://montreal.ca/lieux/parc-decelles", "https://athletics.dawsoncollege.qc.ca/hockey/venue/ronald-caron-arena/",
	"https://montreal.ca/lieux/parc-gohier", "https://montreal.ca/lieux/mairie-darrondissement-de-saint-laurent", "https://laurentide.ecolesaintlaurent.ca/", "https://montreal.ca/lieux/bibliotheque-du-vieux-saint-laurent",
	"https://montreal.ca/lieux/parc-grou", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-laurent", "http://www.cuvioasa-parascheva-montreal.com/" ];
	
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