function init()
{
	hnames = [ "Cimeti&egrave;re Notre-Dame-des-Neiges", "Oratoire Saint-Joseph", "H&ocirc;pital G&eacute;n&eacute;ral Juif", 
	"CHU Sainte-Justine", "Maison de la Culture C&ocirc;te-des-Neiges", "Centre Communautaire de Loisir de la C&ocirc;te-des-Neiges", "Parc Jean-Brillant",
	"&Eacute;cole de Th&eacute;ologie &Eacute;vang&eacute;lique du Qu&eacute;bec", "Centre Hospitalier de St. Mary", "&Eacute;cole Notre-Dame-des-Neiges",
	"March&eacute; Jean-Brillant", "&Eacute;glise Notre-Dame-des-Neiges", "Parc Troie", "Place du 6-D&eacute;cembre-1989", "CLSC C&ocirc;te-des-Neiges",
	"&Eacute;cole Saint-Pascal-Baylon", "Parc Martin-Luther-King", "Coll&egrave;ge Jean-de-Br&eacute;beuf", "H&ocirc;tel Terrasse Royale" ];
	
	htypes = [ "Cimeti&egrave;re", "&Eacute;glise", "H&ocirc;pital", "H&ocirc;pital", "Th&eacute;&acirc;tre", "Centre Culturel", "Parc", "&Eacute;cole", "H&ocirc;pital", "&Eacute;cole", "March&eacute;", "&Eacute;glise", "Parc", "Parc", "Agence",
	"&Eacute;cole", "Parc", "Coll&egrave;ge", "H&ocirc;tel" ];
	
	haddresses = [ "4601 Chemin de la C&ocirc;te-des-Neiges", "3800 Chemin Queen-Mary", "3755 Chemin de la C&ocirc;te-Sainte-Catherine", "3175 Chemin de la C&ocirc;te-Sainte-Catherine",
	"5290 Chemin de la C&ocirc;te-des-Neiges", "5347 Chemin de la C&ocirc;te-des-Neiges", "5252 Avenue Decelles", "4824 Chemin de la C&ocirc;te-des-Neiges", "3830 Avenue Lacombe",
	"5309 Chemin de la C&ocirc;te-des-Neiges", "", "5366 Chemin de la C&ocirc;te-des-Neiges", "", "", "5700 Chemin de la C&ocirc;te-des-Neiges",
	"6320 Chemin de la C&ocirc;te-des-Neiges", "3453 Avenue de Kent", "3200 Chemin de la C&ocirc;te-Sainte-Catherine", "5225 Chemin de la C&ocirc;te-des-Neiges" ];
	
	hsites = [ "https://www.cimetierenotredamedesneiges.ca/fr", "https://www.saint-joseph.org/fr", "https://www.hgj.ca/", 
	"https://www.chusj.org/fr/accueil", "http://ville.montreal.qc.ca/culture/maison-de-la-culture-de-cote-des-neiges", "https://celocdn.org/", 
	"https://montreal.ca/lieux/parc-jean-brillant-cote-des-neiges-notre-dame-de-grace", "https://www.eteq.ca/d8/", "http://www.smhc.qc.ca/fr/homepage",
	"https://notre-dame-des-neiges.cssdm.gouv.qc.ca/", "https://sdc-cotedesneiges.ca/etablissements/marche-jean-brillant-market/", "https://www.diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/dame-neiges",
	"https://montreal.ca/lieux/parc-troie", "https://montreal.ca/lieux/place-du-6-decembre-1989", "https://www.ciussscentreouest.ca/etablissements-et-ressources/clsc/clsc-de-cote-des-neiges/",
	"https://st-pascal-baylon.cssdm.gouv.qc.ca/", "https://montreal.ca/lieux/parc-martin-luther-king", "https://www.brebeuf.qc.ca/", "https://fr.terrasse-royale.com/" ];
	
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
