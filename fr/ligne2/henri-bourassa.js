function init()
{
	hnames = [ "Pont Viau", "Terminus Henri-Bourassa", "Ar&eacute;na Ahuntsic", "Biblioth&egrave;que d&#39;Ahuntsic", "Parc Nature de l&#39;&Icirc;le de la Visitation via Bus 48, 49 & 69",
	"Parc Ahuntsic", "Stade Gary-Carter", "Coll&egrave;ge de Bois-de-Boulogne via Bus 164 & 171", "Maison de la Culture Ahuntsic-Cartierville", "Bagel Henri-Bourassa", 
	"Centre Communautaire Ahuntsic", "Parc Jeanne-Sauv&eacute;", "Parc du Pont Ahuntsic" ];
	
	htypes = [ "Pont", "Terminus d&#39;Autobus", "Sports", "Biblioth&egrave;que", "Parc", "Parc", "Sports", "Coll&egrave;ge", "Th&eacute;&acirc;tre", "Restaurant", "Centre Culturel", "Parc", "Parc" ];
	
	haddresses = [ "", "590 Boulevard Henri-Bourassa Est", "10560 Rue Saint-Hubert", "10300 Rue Lajeunesse", "11062 Avenue Wilfrid-Saint-Louis", "10555 Rue Lajeunesse", 
	"10555 Rue Lajeunesse", "10555 Avenue de Bois-de-Boulogne", "10300 Rue Lajeunesse", "443 Boulevard Henri-Bourassa Est", "10780 Rue Laverdure", "451 Boulevard Gouin Est", "" ];
	
	hsites = [ "#", "https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-henri-bourassa-nord", "https://montreal.ca/lieux/arena-ahuntsic", 
	"https://montreal.ca/lieux/bibliotheque-dahuntsic", "https://parcs-nature.com/public/ile-de-la-visitation", "https://montreal.ca/lieux/parc-ahuntsic", 
	"#", "https://www.bdeb.qc.ca/", "http://ville.montreal.qc.ca/culture/maison-de-la-culture-ahuntsic-cartierville", "#", "https://www.solidariteahuntsic.org/", 
	"https://montreal.ca/lieux/parc-jeanne-sauve", "#" ];
	
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