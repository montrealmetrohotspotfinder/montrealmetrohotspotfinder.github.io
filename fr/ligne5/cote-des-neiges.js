function init()
{
	hnames = [ "Cimeti&egrave;re Notre-Dame-des-Neiges", "Oratoire Saint-Joseph", "H&ocirc;pital G&eacute;n&eacute;ral Juif", 
	"CHU Sainte-Justine", "Maison de la Culture C&ocirc;te-des-Neiges", "Centre Communautaire de Loisir de la C&ocirc;te-des-Neiges", "Parc Jean-Brillant",
	"&Eacute;cole de Th&eacute;ologie &Eacute;vang&eacute;lique du Qu&eacute;bec", "Centre Hospitalier de St. Mary", "&Eacute;cole Notre-Dame-des-Neiges" ];
	
	htypes = [ "Cimeti&egrave;re", "&Eacute;glise", "H&ocirc;pital", "H&ocirc;pital", "Th&eacute;&acirc;tre", "Centre Culturel", "Parc", "&Eacute;cole", "H&ocirc;pital", "&Eacute;cole" ];
	
	haddresses = [ "4601 Chemin de la C&ocirc;te-des-Neiges", "3800 Chemin Queen-Mary", "3755 Chemin de la C&ocirc;te-Sainte-Catherine", "3175 Chemin de la C&ocirc;te-Sainte-Catherine",
	"5290 Chemin de la C&ocirc;te-des-Neiges", "5347 Chemin de la C&ocirc;te-des-Neiges", "5252 Avenue Decelles", "4824 Chemin de la C&ocirc;te-des-Neiges", "3830 Avenue Lacombe",
	"5309 Chemin de la C&ocirc;te-des-Neiges" ];
	
	hsites = [ "https://www.cimetierenotredamedesneiges.ca/fr", "https://www.saint-joseph.org/fr", "https://www.hgj.ca/", 
	"https://www.chusj.org/fr/accueil", "http://ville.montreal.qc.ca/culture/maison-de-la-culture-de-cote-des-neiges", "https://celocdn.org/", 
	"https://montreal.ca/lieux/parc-jean-brillant-cote-des-neiges-notre-dame-de-grace", "https://www.eteq.ca/d8/", "http://www.smhc.qc.ca/fr/homepage",
	"https://notre-dame-des-neiges.cssdm.gouv.qc.ca/" ];
	
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
