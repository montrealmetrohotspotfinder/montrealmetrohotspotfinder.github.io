function init()
{
	hnames = [ "Place Versailles", "Auberge Royal Versailles", "Mairie de Mercier&#8211;Hochelaga-Maisonneuve", "Le Repos Saint-Fran&ccedil;ois-d&#39;Assise",
	"Terminus Radisson", "Galeries d&#39;Anjou via Bus 44", "Les Halles d&#39;Anjou via Bus 44", "Coll&egrave;ge d&#39;Anjou via Bus 44", "Parc du Vaisseau-d&#39;Or", "Parc Radisson",
	"C&eacute;gep Marie-Victorin via Bus 444", "Parc des Roseraies via Bus 44", "Les Terrasses Versailles via Bus 44", "&Eacute;cole des Roseraies via Bus 44",
	"Institut Universitaire en Sant&eacute; Mentale de Montr&eacute;al", "Les Appartements Place Versailles", "Le Symbiose", "Centre de R&eacute;adaptation en D&eacute;ficience Physique Raymond-Dewar Radisson" ];
	
	htypes = [ "Centre Commercial", "H&ocirc;tel", "Gouvernement", "Cimeti&egrave;re", "Terminus d&#39;Autobus", "Centre Commercial", "Centre Commercial", "&Eacute;cole", "Parc", "Parc",
	"Coll&egrave;ge", "Parc", "R&eacute;sidence", "&Eacute;cole", "H&ocirc;pital", "R&eacute;sidence", "R&eacute;sidence", "H&ocirc;pital" ];
	
	haddresses = [ "7275 Rue Sherbrooke Est", "7200 Rue Sherbrooke Est", "6854 Rue Sherbrooke Est", "6893 Rue Sherbrooke Est", "7155 Rue Sherbrooke Est", 
	"7999 Boulevard des Galeries-d&#39;Anjou", "7500 Boulevard des Galeries-d&#39;Anjou", "11000 Rue Renaude-Lapointe", "3021 Rue du Trianon", "5321 Rue Radisson",
	"7000 Rue Marie-Victorin", "7070 Avenue de la Nantaise", "6923 Boulevard des Galeries-d&#39;Anjou", "6440 Boulevard des Galeries-d&#39;Anjou", "7401 Rue Hochelaga", "7235 Rue Pierre-Corneille",
	"3075 Rue Paul-David", "3800 Rue Radisson" ];
	
	hsites = [ "https://www.placeversailles.com/fr", "https://www.royalversailles.com", "https://montreal.ca/lieux/mairie-darrondissement-de-mercier-hochelaga-maisonneuve", "http://www.rsfa.ca/", 
	"https://exo.quebec/fr/planifier-trajet/installations-intermodales/terminus-radisson", "https://www.cfshops.com/fr_CA/galeries-d-anjou.html", "https://www.hallesdanjou.com/fr/accueil.html", 
	"https://collegedanjou.qc.ca/", "https://montreal.ca/lieux/parc-du-vaisseau-dor", "https://montreal.ca/lieux/parc-radisson", "https://www.collegemv.qc.ca/", "https://montreal.ca/lieux/parc-des-roseraies",
	"https://www.residencesexcellence.com/residences/terrasses-versailles/accueil", "https://desros.jimdofree.com/", "https://ciusss-estmtl.gouv.qc.ca/etablissement/institut-universitaire-en-sante-mentale-de-montreal",
	"http://www.appartementsplaceversailles.com/", "https://www.residencesexcellence.com/residences/symbiose/accueil", "https://ciusss-centresudmtl.gouv.qc.ca/etablissement/centre-de-readaptation-en-deficience-physique-raymond-dewar-radisson" ];
	
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
