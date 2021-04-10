function init()
{
	hnames = [ "Place Bell", "Universit&eacute; de Montr&eacute;al, campus Laval", "Terminus Montmorency", 
	"Coll&egrave;ge Montmorency", "Centre Laval via STL", "Carrefour Laval via STL", "Salle Andr&eacute;-Mathieu", "Maison des Arts de Laval",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, campus Laval", "Coll&egrave;ge Letendre" ];
	
	htypes = [ "Sports", "Universit&eacute;", "Terminus d&#39;Autobus", "Coll&egrave;ge", "Centre Commercial", "Centre Commercial", "Th&eacute;&acirc;tre", "Th&eacute;&acirc;tre",
	"Universit&eacute;", "&Eacute;cole" ];
	
	haddresses = [ "1950 Rue Claude-Gagn&eacute;", "1700 Rue Jacques-T&eacute;treault", "555 Rue Lucien-Paiement",
	"475 Boulevard de l&#39;Avenir", "1600 Boulevard le Corbusier", "3003 Boulevard le Carrefour", "475 Boulevard de l&#39;Avenir", "1395 Boulevard de la Concorde Ouest",
	"475 Boulevard de l&#39;Avenir", "1000 Boulevard de l&#39;Avenir" ];
	
	hsites = [ "https://www.placebell.ca/fr", "https://www.umontreal.ca/nos-campus/laval/", 
				"https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-montmorency", 
				"https://www.cmontmorency.qc.ca/", "https://duolaval.com", 
				"https://www.cfshops.com/fr_CA/carrefour-laval.html", "https://www.co-motion.ca/nos-salles-de-spectacles/salle-andre-mathieu/#", 
				"https://www.laval.ca/maisondesarts/Pages/Fr/accueil.aspx", "https://etudier.uqam.ca/campus/laval",
				"https://www.collegeletendre.qc.ca/" ];
	
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