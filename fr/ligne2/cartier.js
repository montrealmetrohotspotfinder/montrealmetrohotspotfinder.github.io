function init()
{
	hnames = [ "Pont Viau", "Terminus Cartier", "Ar&eacute;na Cartier", "Parc Cartier", "Cour Municipale de la Ville de Laval", "Parc &Eacute;mile" ];
	
	htypes = [ "Pont", "Terminus d&#39;Autobus", "Sports", "Parc", "Tribunal", "Parc" ];
	
	haddresses = [ "", "5 Boulevard Cartier Ouest", "100 Mont&eacute;e Major", "45 Boulevard Cartier Ouest", "55 Boulevard des Laurentides", "55 Boulevard Cartier Ouest" ];
	
	hsites = [ "#", "https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-cartier", 
	"https://www.laval.ca/lieux/Pages/Fr/arena-cartier.aspx", "https://www.laval.ca/lieux/Pages/Fr/parc-cartier.aspx", "https://www.laval.ca/lieux/Pages/Fr/cour-municipale.aspx", "#" ];
	
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