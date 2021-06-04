function init()
{
	hnames = [ "Parc de la V&eacute;rendrye", "&Eacute;glise Notre-Dame-Porte-de-l&#39;Aurore", "&Eacute;glise Coeur-Immacul&eacute;-de-Marie", "&Eacute;cole Coeur-Immacul&eacute;-de-Marie" ];
	
	htypes = [ "Parc", "&Eacute;glise", "&Eacute;glise", "&Eacute;cole" ];
	
	haddresses = [ "5900 Rue Drake", "1465 Rue de S&egrave;ve", "6300 Rue Laurendeau", "1845 Boulevard Desmarchais" ];
	
	hsites = [ "https://montreal.ca/lieux/parc-de-la-verendrye", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/dame-porte-laurore-lituaniens", "https://www.diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/coeur-immacule-marie", "https://coeur-immacule-de-marie.cssdm.gouv.qc.ca/" ];
	
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
