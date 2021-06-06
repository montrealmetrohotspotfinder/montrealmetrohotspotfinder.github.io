function init()
{
	hnames = [ "Place Frontenac", "Maison de la Culture et Biblioth&egrave;que Frontenac", "Bar Metro Pub", "Parc M&eacute;d&eacute;ric-Martin", "Centre Jean-Claude-Mal&eacute;part", "Parc Walter-Stewart", "Parc Jos-Montferrand", "Centre G&eacute;d&eacute;on-Ouimet",
	"Mosqu&eacute;e Tawuba", "&Eacute;cole Jean-Baptiste-Meilleur", "&Eacute;cole Pierre-Dupuy", "&Eacute;cole des M&eacute;tiers des Faubourgs-de-Montr&eacute;al", "Parc Baldwin",
	"&Eacute;cole Saint-Louis-de-Gonzague", "Centre d&#39;H&eacute;bergement Armand-Lavergne", "Centre d&#39;H&eacute;bergement Paul-Bruch&eacute;si", "&Eacute;glise Presbyt&eacute;rienne Sarang Montr&eacute;al", "&Eacute;nergir", "Place Joseph-Venne",
	"Parc Coupal", "Parc Magnan" ];
	
	htypes = [ "Centre Commercial", "Th&eacute;&acirc;tre", "Restaurant", "Parc", "Centre Culturel", "Parc", "Parc", "&Eacute;cole", "Mosqu&eacute;e", "&Eacute;cole", "&Eacute;cole", "&Eacute;cole de M&eacute;tiers", "Parc", "&Eacute;cole", "R&eacute;sidence", "R&eacute;sidence", "&Eacute;glise", "Bureau", "Parc", "Parc", "Parc" ];
	
	haddresses = [ "2600 Rue Ontario Est", "2550 Rue Ontario Est", "2553 Rue Ontario Est", "2329 Avenue Gascon", "2633 Rue Ontario Est", "2455 Rue Larivi&egrave;re", "2560 Boulevard de Maisonneuve Est", "1960 Rue Poupart",
	"2315 Rue Ontario Est", "2237 Rue Fullum", "2000 Rue Parthenais", "2000 Rue Parthenais", "4355 Rue Fullum", "2430 Terrasse Mercure", "3500 Rue Chapleau", "2225 Rue Rachel Est", "2315 Rue Rachel Est", "1717 Rue du Havre", "",
	"2340 Rue Coupal", "2337 Rue Magnan" ];
	
	hsites = [ "#", "https://frontenac.tuxedobillet.com/", "#", "https://montreal.ca/lieux/parc-mederic-martin", "https://cjcm.ca/", "https://montreal.ca/lieux/parc-walter-stewart", "https://montreal.ca/lieux/parc-jos-montferrand", "https://centre-gedeon-ouimet.csdm.ca/",
	"#", "https://jean-baptiste-meilleur.csdm.ca/", "https://pierre-dupuy.csdm.ca/", "https://ecole-metiers-faubourgs.csdm.ca/", "https://montreal.ca/lieux/parc-baldwin", "https://st-louis-de-gonzague.cssdm.gouv.qc.ca/", "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-armand-lavergne", 
	"https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-dhebergement-paul-bruchesi", "http://www.sarangchurch.ca/", "https://www.energir.com/", "https://montreal.ca/lieux/place-joseph-venne", "https://montreal.ca/lieux/parc-coupal", "https://montreal.ca/lieux/parc-magnan" ];
	
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
