function init()
{
	hnames = [ "Gare Centrale", "Terminus Centre-Ville", "Les Halles de la Gare", "Place Bonaventure", "STM, si&egrave;ge social", "Centre Bell", "1000 De La Gaucheti&egrave;re", "Place Ville Marie via le Montr&eacute;al Souterrain",
	"H&ocirc;tel Fairmont Reine Elizabeth via le Montr&eacute;al Souterrain", "Marriott Ch&acirc;teau Champlain", "Maison de l&#39;OACI via le Montr&eacute;al Souterrain", "Cath&eacute;drale Marie Reine du Monde", "Square Dorchester", "&Eacute;difice Sun Life", 
	"Time Supper Club", "Immigration, R&eacute;fugi&eacute;s et Citoyennet&eacute; Canada", "H&ocirc;tel Bonaventure", "Place du Canada" ];
	
	htypes = [ "Station de Train", "Terminus d&#39;Autobus", "Centre Commercial", "Centre de Convention", "Bureau", "Sports", "Bureau", "Centre Commercial", "H&ocirc;tel", "H&ocirc;tel", 
	"Bureau", "&Eacute;glise", "Place de la Ville", "Bureau", "Salle de R&eacute;ception", "Gouvernement", "H&ocirc;tel", "Place de la Ville" ];
	
	haddresses = [ "895 Rue de la Gaucheti&egrave;re Ouest", "1000 Rue de la Gaucheti&egrave;re Ouest", "895 Rue de la Gaucheti&egrave;re Ouest", "800 Rue de la Gaucheti&egrave;re Ouest", 
	"800 Rue de la Gaucheti&egrave;re Ouest", "1909 Avenue des Canadiens-de-Montr&eacute;al", "1000 Rue de la Gaucheti&egrave;re Ouest", "1 Place Ville Marie", "900 Boulevard Ren&eacute;-L&eacute;vesque Ouest", 
	"1050 Rue de la Gaucheti&egrave;re Ouest", "999 Boulevard Robert-Bourassa", "1085 Rue de la Cath&eacute;drale", "2903 Rue Peel", "1155 Rue Metcalfe", "997 Rue Saint-Jacques", "1010 Rue Saint-Antoine Ouest",
	"900 Rue de la Gaucheti&egrave;re Ouest", "1010 Rue de la Gaucheti&egrave;re Ouest" ];
	
	hsites = [ "https://garecentrale.ca/fr/", "https://exo.quebec/planifier-trajet/installations-intermodales/terminus-centre", "https://garecentrale.ca/fr/halles-de-la-gare", "http://placebonaventure.com/fr/", 
	"http://stm.info/fr", "https://www.centrebell.ca/fr", "https://www.le1000.com/fr", "https://placevillemarie.com/fr", "https://www.fairmont.fr/queen-elizabeth-montreal/", "https://www.marriott.fr/hotels/travel/yulcc-montreal-marriott-chateau-champlain", 
	"https://www.icao.int/Pages/default.aspx", "http://www.cathedralecatholiquedemontreal.org/", "https://montreal.ca/lieux/square-dorchester", "https://www.edificesunlife.ca/", 
	"https://timesupperclub.com/fr", "https://www.canada.ca/fr/services/immigration-citoyennete.html", "https://hotelbonaventure.com/fr/", "https://montreal.ca/lieux/place-du-canada" ];
	
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
