function init()
{
	hnames = [ "Centre Bell", "Tour Deloitte", "Tour des Canadiens", "&Eacute;cole de Technologie Sup&eacute;rieure", "Gare Windsor", "WeWork L&#39;Avenue", "Coll&egrave;ge Herzing", 
	"Holiday Inn & Suites Montr&eacute;al Centre-Ville Ouest", "Le Centre Sheraton Montr&eacute;al", "Novotel Montr&eacute;al Centre", "H&ocirc;tel Le Crystal", "Le Nouvel H&ocirc;tel & Spa", "Coll&egrave;ge O&#39;Sullivan",
	"Tribunal Administratif du Logement du Qu&eacute;bec", "1350-1360 Ren&eacute;-L&eacute;vesque Ouest", "Best Western Plus Montr&eacute;al Centre-Ville H&ocirc;tel Europa" ];
	
	htypes = [ "Sports", "Bureau", "R&eacute;sidence", "Coll&egrave;ge", "Bureau", "Bureau", "Coll&egrave;ge", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Coll&egrave;ge", "Agence", "Bureau", "H&ocirc;tel" ];
	
	haddresses = [ "1909 Avenue des Canadiens-de-Montr&eacute;al", "1115 Rue Saint-Antoine Ouest", "750 Rue Peel", "1100 Rue Notre-Dame Ouest", "1100 Avenue des Canadiens-de-Montr&eacute;al", 
	"1275 Avenue des Canadiens-de-Montr&eacute;al", "1616 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1390 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1201 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1180 Rue de la Montagne", 
	"1100 Rue de la Montagne", "1740 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1191 Rue de la Montagne", "1425 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1360 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1240 Rue Drummond" ];
	
	hsites = [ "https://www.centrebell.ca/fr", "https://www.cfoffice.ca/property/home/cf-deloitte-tower/fr/", "http://tourdescanadiens.com/", "http://www.etsmtl.ca/accueil", "https://www.cfoffice.ca/property/home/cf-the-windsor-station-office/fr/", 
	"https://www.wework.com/fr-CA/buildings/l-avenue--montreal--QC", "https://www.herzing.ca/fr/campus-et-emplacements-du-college-herzing/montreal/", "https://www.ihg.com/holidayinn/hotels/fr/fr/montreal/yulcc/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-CA-_-YULCC", 
	"https://www.marriott.fr/hotels/travel/yulsi-le-centre-sheraton-montreal-hotel", "https://www.novotelmontreal.com/index_fr.shtm", 
	"https://www.hotellecrystal.com/fr", "https://fr.lenouvelhotel.com/", "https://www.osullivan.edu/fr/", "https://www.tal.gouv.qc.ca/fr", "https://www.1350rene-levesque.com/index-fr.html", "https://www.bestwestern.com/fr_FR/book/hotel-rooms.67013.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67013" ];
	
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