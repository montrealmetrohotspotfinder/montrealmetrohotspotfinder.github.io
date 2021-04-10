function init()
{
	hnames = [ "Biblioth&egrave;que Marc-Favreau", "Parc des Carri&egrave;res", "Parc Luc-Durand", "Habitations Saint-Vallier" ];
	
	htypes = [ "Biblioth&egrave;que", "Parc", "Parc", "R&eacute;sidence" ];
	
	haddresses = [ "500 Boulevard Rosemont", "", "600 Rue des Ateliers", "401 Rue des Carri&egrave;res" ];
	
	hsites = [ "https://montreal.ca/lieux/bibliotheque-marc-favreau", "https://montreal.ca/lieux/parc-des-carrieres", "https://montreal.ca/lieux/parc-luc-durand", "https://www.omhm.qc.ca/fr/repertoire-des-habitations/habitations-saint-vallier" ];
	
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