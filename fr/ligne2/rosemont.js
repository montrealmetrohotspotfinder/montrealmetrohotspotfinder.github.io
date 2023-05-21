function init()
{
	hnames = [ "Biblioth&egrave;que Marc-Favreau", "Parc des Carri&egrave;res", "Parc Luc-Durand", "Habitations Saint-Vallier", "Universit&eacute; T&Eacute;LUQ, bureaux montr&eacute;alais", "Place Raymond-Plante", "Le Saint-&Eacute;douard",
	"Parc du P&egrave;re-Marquette", "Centre P&egrave;re-Marquette", "Ar&eacute;na P&egrave;re-Marquette", "&Eacute;cole P&egrave;re-Marquette",
	"&Eacute;cole des M&eacute;tiers de l'&Eacute;quipement Motoris&eacute; de Montr&eacute;al"];
	
	htypes = [ "Biblioth&egrave;que", "Parc", "Parc", "R&eacute;sidence", "Bureau", "Parc", "Restaurant", "Parc", "Centre Culturel", "Sports", "&Eacute;cole", "&Eacute;cole de M&eacute;tiers" ];
	
	haddresses = [ "500 Boulevard Rosemont", "", "600 Rue des Ateliers", "401 Rue des Carri&egrave;res", "5800 Rue Saint-Denis", "780 Boulevard Rosemont", "808 Boulevard Rosemont", "1602 Rue de Bellechasse", "1600 Rue de Drucourt", "1605 Rue de Bellechasse", "6030 Rue Marquette",
	"5455 Rue Saint-Denis" ];
	
	hsites = [ "https://montreal.ca/lieux/bibliotheque-marc-favreau", "https://montreal.ca/lieux/parc-des-carrieres", "https://montreal.ca/lieux/parc-luc-durand", "https://www.omhm.qc.ca/fr/repertoire-des-habitations/habitations-saint-vallier",
	"https://www.teluq.ca/", "https://montreal.ca/lieux/place-raymond-plante", "https://lesaintedouard.com/", "https://montreal.ca/lieux/parc-du-pere-marquette", "http://centreperemarquette.ca/", "https://montreal.ca/lieux/arena-pere-marquette", "https://pere-marquette.cssdm.gouv.qc.ca/",
	"https://ecole-metiers-motorise.cssdm.gouv.qc.ca" ];
	
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
