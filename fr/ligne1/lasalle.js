function init()
{
	hnames = [ "&Icirc;le-des-Soeurs via Bus 21", "Parc Poirier", "&Eacute;cole Notre-Dame-de-la-Paix", "R&eacute;sidence Priv&eacute;e Notre-Dame-de-la-Paix", "Centre de Formation Professionnelle de Verdun", "&Eacute;cole Secondaire Monseigneur-Richard",
	"Parc Sutherland-Sackville-Bain" ];
	
	htypes = [ "&Icirc;le", "Parc", "&Eacute;cole", "R&eacute;sidence", "&Eacute;cole de M&eacute;tiers", "&Eacute;cole", "Parc" ];
	
	haddresses = [ "", "3177 Boulevard LaSalle", "454 Avenue Caisse", "3501 Rue &Eacute;thel", "3010 Boulevard Ga&eacute;tan-Laberge", "3000 Boulevard Ga&eacute;tan-Laberge",
	"11 Rue Rh&eacute;aume" ];
	
	hsites = [ "#", "https://montreal.ca/lieux/parc-poirier-verdun", "https://nddlp.ecoleverdun.com/", "https://bonjourresidences.com/residence/montreal-residence-privee-notre-dame-de-la-paix/",
	"https://verdun.centrecsmb.com/", "https://monseigneur-richard.ecoleverdun.com/", "https://montreal.ca/lieux/parc-sutherland-sackville-bain" ];
	
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