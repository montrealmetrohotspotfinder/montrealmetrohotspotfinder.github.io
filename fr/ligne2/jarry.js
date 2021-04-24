function init()
{
	hnames = [ "Parc Jarry", "Stade IGA", "Parc Saint-Vincent-Ferrier", "Parc G&eacute;rard-Lalonde", "Paroisse Saint-Vincent-Ferrier", "&Eacute;cole H&eacute;l&egrave;ne-Boull&eacute;" ];
	
	htypes = [ "Parc", "Sports", "Parc", "Parc", "&Eacute;glise", "&Eacute;cole" ];
	
	haddresses = [ "285 Rue Gary-Carter", "285 Rue Gary-Carter", "8172 Rue Drolet", "375 Rue Jarry Est", "301 Rue Jarry Est", "8050 Avenue de Gasp&eacute;" ];
	
	hsites = [ "https://montreal.ca/lieux/parc-jarry", "http://stadeiga.com/", "https://montreal.ca/lieux/parc-saint-vincent-ferrier", "#", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-vincent-ferrier", "https://helene-boulle.cssdm.gouv.qc.ca/" ];
	
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
