function init()
{
	hnames = [ "Mus&eacute;e de l&#39;Holocauste", "Centre Segal", "Centre Cummings", "Talmud Torahs Unis de Montr&eacute;al", "Centre Communautaire Juif", "Spanish & Portuguese Synagogue of Montreal", 
	"&Eacute;cole Internationale Marie de France", "Coll&egrave;ge International Marie de France", "Parc Mackenzie-King", "Institut Universitaire de G&eacute;riatrie de Montr&eacute;al, Pavillon Alfred-Desrochers" ];
	
	htypes = [ "Mus&eacute;e", "Th&eacute;&acirc;tre", "R&eacute;sidence", "&Eacute;cole", "Centre Culturel", "Synagogue", "&Eacute;cole", "&Eacute;cole", "Parc", "R&eacute;sidence" ];
	
	haddresses = [ "5151 Chemin de la C&ocirc;te-Sainte-Catherine", "5170 Chemin de la C&ocirc;te-Sainte-Catherine", "5700 Avenue de Westbury", "4840 Avenue Saint-Kevin", "5400 Avenue de Westbury", 
	"4894 Avenue Saint-Kevin", "4700 Rue Fulton", "4635 Chemin Queen-Mary", "4907 Avenue Saint-Kevin", "5325 Avenue Victoria" ];
	
	hsites = [ "https://museeholocauste.ca/fr", "https://www.segalcentre.org/fr/home", "https://cummingscentre.org/fr/", "https://azrieli-tth.ca/fr/talmud-torah/bienvenue/", "https://www.ymywha.com/fr", 
	"https://www.thespanish.org/accueil", "https://www.cimf.ca/", "https://www.cimf.ca/", "https://montreal.ca/lieux/parc-mackenzie-king", 
	"https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-alfred-desrochers" ];
	
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