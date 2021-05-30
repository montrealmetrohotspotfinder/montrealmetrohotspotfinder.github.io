function init()
{
	hnames = [ "Terminus Longueuil", 
	"Universit&eacute; de Sherbrooke, campus Longueuil", 
	"Universit&eacute; de Montr&eacute;al, campus Longueuil", 
	"H&ocirc;tel Sandman Longueuil",
	"H&ocirc;tel Le Dauphin Montr&eacute;al-Longueuil",
	"Place Longueuil",
	"A&eacute;roport de Saint-Hubert via RTL",
	"Coll&egrave;ge CDI, campus Longueuil", 
	"Commission de Protection du Territoire Agricole du Qu&eacute;bec", 
	"Axc&egrave;s Saint-Charles",
	"L&#39;Estuaire III",
	"Le D&#39;Assigny",
	"Revenu Qu&eacute;bec, bureaux longueuillois",
	"Tribunal Administratif du Logement du Qu&eacute;bec, bureaux longueuillois",
	"Les Habitats Lafayette",
	"SSQ Assurance, bureaux longueuillois" ];
	
	htypes = [ "Terminus d&#39;Autobus", "Universit&eacute;", "Universit&eacute;", "H&ocirc;tel", "H&ocirc;tel", "Centre Commercial", "A&eacute;roport", "Coll&egrave;ge", "Agence", "R&eacute;sidence", "R&eacute;sidence", "R&eacute;sidence", "Agence", "Agence", "R&eacute;sidence", "Bureau" ];
	
	haddresses = [ "120 Place Charles-Lemoyne", 
	"150 Place Charles-Lemoyne", 
	"101 Place Charles-Lemoyne", 
	"999 Rue de S&eacute;rigny",
	"1055 Rue Saint-Laurent Ouest",
	"825 Rue Saint-Laurent Ouest",
	"5700 Route de l&#39;A&eacute;roport",
	"1111 Rue Saint-Charles Ouest",
	"25 Boulevard La Fayette",
	"1155 Rue Saint-Charles Ouest",
	"70 Rue de la Barre",
	"110 Rue de la Barre",
	"825 Rue Saint-Laurent Ouest",
	"201 Place Charles-Lemoyne",
	"100 Boulevard La Fayette",
	"1225 Rue Saint-Charles Ouest" ];
	
	hsites = [ "https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-longueuil", 
	"http://www.usherbrooke.ca/longueuil/", 
	"https://www.umontreal.ca/nos-campus/longueuil/", 
	"https://www.sandmanhotels.com/fr/locations/quebec/montreal-longueuil/hotels/montreal-longueuil-mol",
	"https://www.hotelsdauphin.ca/hotels/montreal-longueuil/",
	"https://www.placelongueuil.com/", 
	"http://www.dashl.ca/",
	"https://www.collegecdi.ca/quebec/campus/longueuil/",
	"http://www.cptaq.gouv.qc.ca/",
	"https://habitationstrigone.com/dwellings/axces-saint-charles/",
	"http://estuaire3.ca/",
	"https://groupemercille.com/fr/residentiel/3-12",
	"https://www.revenuquebec.ca/fr/",
	"https://www.tal.gouv.qc.ca/",
	"http://www.residences6etoiles.com/fr/lafayette.html",
	"https://ssq.ca/fr" ];
	
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
