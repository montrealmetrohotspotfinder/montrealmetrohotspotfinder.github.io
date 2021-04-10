function init()
{
	hnames = [ "Centre Communautaire Marcel-Giroux", "Mairie de Verdun", "Parc Willibrord", "&Eacute;cole L&eacute;vis-Sauv&eacute;", "&Eacute;cole Chanoine-Joseph-Th&eacute;or&ecirc;t",
	"Parc du Souvenir", "&Eacute;glise de Notre-Dame-de-Lourdes", "&Eacute;cole Notre-Dame-de-Lourdes", "Grace Church" ];
	
	htypes = [ "Centre Culturel", "Gouvernement", "Parc", "&Eacute;cole", "&Eacute;cole", "Parc", "&Eacute;glise", "&Eacute;cole", "&Eacute;glise" ];
	
	haddresses = [ "4501 Avenue Bannantyne", "4555 Rue de Verdun", "1018 Rue Willibrord", "655 Rue Willibrord", "990 5e Avenue",
	"4525 Rue de Verdun", "4949 Rue de Verdun", "504 5e Avenue", "501 5e Avenue" ];
	
	hsites = [ "https://montreal.ca/lieux/centre-communautaire-marcel-giroux", "https://montreal.ca/lieux/mairie-darrondissement-de-verdun", 
	"https://montreal.ca/lieux/parc-willibrord", "https://levissauve.ecoleverdun.com/", "https://cjt.ecoleverdun.com/", "https://montreal.ca/lieux/parc-du-souvenir",
	"https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/dame-lourdes", "https://ndl.ecoleverdun.com/", "http://www.gracechurchverdun.com/" ];
	
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