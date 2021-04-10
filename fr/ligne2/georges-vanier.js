function init()
{
	hnames = [ "Parc Oscar-Peterson", "Paroisse Saint Anthony of Padua", "Parc de l&#39;Association-Eur&ecirc;ka", "Parc Herbert-Brown-Ames", "&Eacute;cole de la Petite-Bourgogne", 
	"Centre Sportif de la Petite-Bourgogne", "Parc des Meubliers", "Parc Herb-Trawick", "Habitations de l&#39;&Eacute;rabli&egrave;re", "Le SE7T" ];
	
	htypes = [ "Parc", "&Eacute;glise", "Parc", "Parc", "&Eacute;cole", "Centre Culturel", "Parc", "Parc", "R&eacute;sidence", "R&eacute;sidence" ];
	
	haddresses = [ "810 Rue Chatham", "1950 Rue Saint-Antoine Ouest", "576 Rue Chatham", "", "555 Rue des Seigneurs", "1825 Rue Notre-Dame Ouest", "1935 Rue Notre-Dame Ouest", "", "1745 Rue Notre-Dame Ouest", "400 Avenue Richmond" ];
	
	hsites = [ "https://montreal.ca/lieux/parc-oscar-peterson", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-anthony-padua",
	"https://montreal.ca/lieux/parc-de-lassociation-eureka",
	"https://montreal.ca/lieux/parc-herbert-brown-ames",
	"https://petite-bourgogne.cssdm.gouv.qc.ca/",
	"http://www.centresportifdelapetitebourgogne.ca/",
	"https://montreal.ca/lieux/parc-des-meubliers",
	"https://montreal.ca/lieux/parc-herb-trawick",
	"https://www.omhm.qc.ca/fr/services-aux-locataires/habitations-de-lerabliere/",
	"https://se7t.ca/fr/" ];
	
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