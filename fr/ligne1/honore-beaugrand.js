function init()
{
	hnames = [ "Village Champlain", "Place Versailles", "Terminus Honor&eacute;-Beaugrand", "Parc Li&eacute;bert", "&Eacute;cole Sainte-Louise-de-Marillac", "Parc Michel-Bourdon", "Manoir Claudette Barr&eacute;" ];
	
	htypes = [ "Magasinage", "Centre Commercial", "Terminus d&#39;Autobus", "Parc", "&Eacute;cole", "Parc", "R&eacute;sidence" ];
	
	haddresses = [ "7788 Rue Sherbrooke Est", "7275 Rue Sherbrooke Est", "4755 Rue Honor&eacute;-Beaugrand", "2848 Rue Li&eacute;bert", "8100 Rue de Marseille", "4507 Rue Joseph-A.-Rodier", "7979 Rue Sherbrooke Est" ];
	
	hsites = [ "#", "https://www.placeversailles.com/fr", "https://exo.quebec/fr/planifier-trajet/station-honore-beaugrand", "https://montreal.ca/lieux/parc-liebert", "https://ste-louise-de-marillac.csdm.ca/", "https://montreal.ca/lieux/parc-michel-bourdon",
	"https://www.manoirclaudettebarre.ca/" ];
	
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