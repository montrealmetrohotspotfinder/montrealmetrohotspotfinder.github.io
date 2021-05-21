function init()
{
	hnames = [ "Universit&eacute; Concordia, campus Sir George Williams", 
	"Universit&eacute; Concordia, &Eacute;cole de Gestion John-Molson", 
	"Coll&egrave;ge LaSalle", 
	"Mus&eacute;e des Beaux-Arts de Montr&eacute;al",  
	"Mille Carr&eacute; Dor&eacute;",
	"Faubourg Sainte-Catherine",
	"Kampai Garden",
	"H&ocirc;pital G&eacute;n&eacute;ral de Montr&eacute;al",
	"Le Chatel",
	"Muraille de Leonard Cohen",
	"L&#39;Institut de Recherche du Centre Universitaire de Sant&eacute; McGill",
	"Place du Fort",
	"Universit&eacute; Concordia, Biblioth&egrave;que Webster",
	"Le 1444 Mackay",
	"Sir Winston Churchill Pub",
	"&Eacute;cole des M&eacute;tiers de la Restauration et du Tourisme de Montr&eacute;al",
	"Place Norman-Bethune",
	"Centre Canadien d&#39;Architecture",
	"Le 2250 Appartements",
	"Le M&eacute;ridien Versailles",
	"Ch&acirc;teau Versailles",
	"H&ocirc;tel Pierce",
	"H&ocirc;tel Espresso Montr&eacute;al Centre-Ville",
	"Coll&egrave;ge de Gestion, Technologie et Sant&eacute; Matrix",
	"1900 Lincoln",
	"Ch&acirc;teau Lincoln" ];
	
	htypes = [ "Universit&eacute;", "Universit&eacute;", "Coll&egrave;ge", "Mus&eacute;e", "District", "Centre Commercial", "Restaurant", "H&ocirc;pital", "R&eacute;sidence", "Site Historique", "Universit&eacute;", "R&eacute;sidence", "Biblioth&egrave;que", "R&eacute;sidence", "Restaurant", "&Eacute;cole de M&eacute;tiers", "Place de la Ville", "Mus&eacute;e", 
	"R&eacute;sidence", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Coll&egrave;ge", "R&eacute;sidence", "R&eacute;sidence" ];
	
	haddresses = [ "1455 Boulevard de Maisonneuve Ouest", 
	"1450 Rue Guy", 
	"2000 Rue Sainte-Catherine Ouest", 
	"1380 Rue Sherbrooke Ouest", 
	"",
	"1616 Rue Sainte-Catherine Ouest",
	"1616 Rue Sainte-Catherine Ouest",
	"1650 Avenue Cedar",
	"1625 Boulevard de Maisonneuve Ouest",
	"1420 Rue Crescent",
	"2155 Rue Guy",
	"1411 Rue du Fort",
	"1455 Boulevard de Maisonneuve Ouest",
	"1444 Rue Mackay",
	"1455 Rue Crescent",
	"1822 Boulevard de Maisonneuve Ouest",
	"",
	"1920 Rue Baile",
	"2250 Rue Guy",
	"1808 Rue Sherbrooke Ouest",
	"1659 Rue Sherbrooke Ouest",
	"1650 Boulevard de Maisonneuve Ouest",
	"1005 Rue Guy",
	"1980 Rue Sherbrooke Ouest",
	"1900 Avenue Lincoln",
	"1950 Avenue Lincoln" ];
	
	hsites = [ "https://www.concordia.ca/fr.html", 
	"http://www.concordia.ca/jmsb.html", 
	"https://www.collegelasalle.com/", 
	"https://www.mbam.qc.ca/fr", 
	"https://www.mtl.org/fr/experience/golden-square-mile",
	"#",
	"https://www.kampaigarden.com/",
	"http://cusm.ca/",
	"https://lechatel.net/fr/",
	"https://mumtl.org/projects/tower-of-song-el-mac-gene-pendon-2017/",
	"https://rimuhc.ca/fr/",
	"https://placedufort.com/fr/",
	"https://library.concordia.ca/",
	"https://www.hazelviewproperties.com/fr/residential/le-1444-mackay",
	"https://www.swcpc.com/SirWinston/?lang=fr",
	"https://ecole-metiers-restauration-tourisme.cssdm.gouv.qc.ca/ecole/",
	"https://montreal.ca/lieux/place-norman-bethune",
	"https://www.cca.qc.ca/fr/",
	"https://www.caprent.com/fr/appartements-a-louer/montreal-qc/le-2250-guy/",
	"https://www.marriott.fr/hotels/travel/yulmv-le-m%C3%A9ridien-versailles",
	"https://fr.chateauversaillesmontreal.com/",
	"https://www.simplissimmo.ca/fr/categories/lhotel-pierce-signe-simplissimmo",
	"https://www.hotelespresso.ca/accueil",
	"http://www.matrixcollege.ca/fr/accueil?",
	"https://www.montrealapartmentdowntown.com/index.html",
	"https://www.chateau-lincoln.com/" ];
	
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
