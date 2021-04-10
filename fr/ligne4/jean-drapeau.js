function init()
{
	hnames = [ "La Ronde", 
	"Parc Jean-Drapeau", 
	"Casino de Montr&eacute;al", 
	"Circuit Gilles-Villeneuve", 
	"Biosph&egrave;re", 
	"Plage Jean-Dor&eacute;",
	"&Icirc;le Notre-Dame" ];
	
	htypes = [ "Parc d&#39;Attractions", "&Icirc;le", "Casino", "Sports", "Mus&eacute;e", "Mus&eacute;e", "Plage", "&Icirc;le" ];
	
	haddresses = [ "22 Chemin Macdonald", 
	"1 Circuit Gilles-Villeneuve", 
	"1 Avenue du Casino", 
	"Parc Jean-Drapeau", 
	"160 Chemin du Tour de l&#39;Isle",
	"151 Circuit Gilles-Villeneuve",
	"" ];
	
	hsites = [ "https://www.laronde.com/fr/larondefr", 
	"http://www.parcjeandrapeau.com/", 
	"http://casinos.lotoquebec.com/fr/montreal/accueil", 
	"https://www.parcjeandrapeau.com/fr/circuit-gilles-villeneuve-montreal/",
	"http://www.canada.ca/la-biosphere", 
	"http://www.parcjeandrapeau.com/fr/plage-jean-dore-sable-baignade-soleil-montreal/",
	"#" ];
	
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