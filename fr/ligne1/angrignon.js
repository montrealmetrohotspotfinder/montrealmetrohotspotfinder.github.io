function init()
{
	hnames = [ "Terminus Angrignon", "Carrefour Angrignon", "Parc Angrignon", 
	"Place Newman", "Les Tours Angrignon", "Les Tours Serenity", "C&eacute;gep Andr&eacute;-Laurendeau via Bus 113", "Habitations Angrignon I et II",
	"Le Conrad", "Habitations Les Trinitaires", "EQ8" ];
	
	htypes = [ "Terminus d&#39;Autobus", "Centre Commercial", "Parc", "Centre Commercial", "R&eacute;sidence", "R&eacute;sidence", "Coll&egrave;ge", "R&eacute;sidence", "R&eacute;sidence", "R&eacute;sidence", "R&eacute;sidence" ];
	
	haddresses = [ "3500 Boulevard des Trinitaires", "7077 Boulevard Newman", "3400 Boulevard des Trinitaires",
	"2101 Avenue Dollard", "1500 Boulevard Angrignon", "1700 Boulevard Angrignon", "1111 Rue Lapierre", "3055 Boulevard des Trinitaires", "1601 Boulevard Angrignon", "1771 Boulevard Angrignon", "6760 Boulevard Newman" ];
	
	hsites = [ "https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-angrignon", 
				"http://www.carrefourangrignon.com", 
				"https://montreal.ca/lieux/parc-angrignon", 
				"http://www.croftonmoore.com/details-propriete.php?pid=48", 
				"https://www.selectionretraite.com/fr/residence/lasalle/selection-retraite-tours-angrignon", 
				"https://serenitytowers.ca/", 
				"https://www.claurendeau.qc.ca/",
				"https://www.omhm.qc.ca/fr/services-aux-locataires/habitations-angrignon-i-et-ii/",
				"https://www.leconrad.com/",
		 		"https://habitationslestrinitaires.weebly.com/",
		 		"https://eq8.ca/" ];
	
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
