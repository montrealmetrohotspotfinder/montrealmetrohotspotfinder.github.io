function init()
{
	hnames = [ "Universit&eacute; McGill",
		"Centre Eaton de Montr&eacute;al",
		"Place Montr&eacute;al Trust via le Montr&eacute;al Souterrain",
		"Place Ville Marie via le Montr&eacute;al Souterrain",
		"H&ocirc;tel Fairmont Reine Elizabeth via le Montr&eacute;al Souterrain",
		"Mus&eacute;e McCord",
		"Mus&eacute;e Redpath",
		"Square Phillips",	
		"Square Dorchester",
		"Cath&eacute;drale Marie Reine du Monde",
		"&Eacute;difice Sun Life",
		"(d&eacute;funt) H&ocirc;pital Royal Victoria",
		"Stade M&eacute;morial Percival-Molson",
		"Carrefour Industrielle Alliance via le Montr&eacute;al Souterrain",
		"Th&eacute;&acirc;tre Banque Scotia via le Montr&eacute;al Souterrain",
		"Google, bureaux montr&eacute;alais",
		"Promenades Cath&eacute;drale",
		"Cat&eacute;hdrale Christ Church",
		"La Baie d&#39;Hudson",
		"1501 McGill College",
		"2001 McGill College",
		"2020 Robert-Bourassa", 
		"Tour KPMG",
		"Maison Manuvie",
		"BNP Paribas",
		"Tour Banque Laurentienne",
		"H&ocirc;tel Renaissance Centre-Ville Montr&eacute;al",
		"Transports Qu&eacute;bec, bureaux montr&eacute;alais",
		"H&ocirc;tel Birks Montr&eacute;al",
		"Alliance pour la Sant&eacute; &Eacute;tudiante au Qu&eacute;bec",
		"Institut Trebas",
		"Portail Roddick",
		"AXA Assistance Canada",
		"2001 Robert-Bourassa",
		"Coll&egrave;ge des Technologies de l&#39;Information de Montr&eacute;al",
		"Soci&eacute;t&eacute; d&#39;Habitation du Qu&eacute;bec",
		"Groupement des Assureurs Automobiles",
		"TOM Condos",
		"Universit&eacute; McGill, Facult&eacute; de M&eacute;decine Dentaire",
		"Universit&eacute; McGill, &Eacute;cole d&#39;&Eacute;ducation Permanente",
		"Ordre des Ing&eacute;nieurs du Qu&eacute;bec",
		"&Eacute;cole F.A.C.E.",
		"Comit&eacute; de D&eacute;ontologie Polici&egrave;re du Qu&eacute;bec, bureaux montr&eacute;alais",
		"Le Square Phillips H&ocirc;tel &amp; Suites",
		"&Eacute;cole des Entrepreneurs du Qu&eacute;bec, campus Montr&eacute;al",
		"Richter, bureaux montr&eacute;alais",
		"Universit&eacute; McGill, &Eacute;cole Max Bell de Politiques Publiques",
		"Universit&eacute; McGill, Facult&eacute; des Sciences",
		"Universit&eacute; McGill, D&eacute;partement de G&eacute;ographie",
		"Universit&eacute; McGill, &Eacute;cole des Sciences Informatiques",
		"Universit&eacute; McGill, D&eacute;partement de Chimie",
		"Universit&eacute; McGill, Facult&eacute; d&#39;Ing&eacute;nierie",
		"Le Coll&egrave;ge Presbyt&eacute;rien",
		"Fonds d&#39;Assurance Responsabilit&eacute; Professionnelle de l&#39;Ordre des Pharmaciens du Qu&eacute;bec",
		"RSA Group, bureaux montr&eacute;alais",
		"Universit&eacute; McGill, D&eacute;partement de Psychologie",
		"Fiera Capital",
		"Universit&eacute; McGill, Facult&eacute; des Arts",
		"Universit&eacute; McGill, &Eacute;cole d&#39;Urbanisme",
		"Valero, bureaux montr&eacute;alais",
		"Interactive Brokers Canada",
		"CNA, bureaux montr&eacute;alais" ];
	
	htypes = [ "Universit&eacute;", "Centre Commercial", "Centre Commercial", "Centre Commercial", "H&ocirc;tel", "Mus&eacute;e", "Mus&eacute;e", "Place de la Ville", "Place de la Ville", "&Eacute;glise", 
	"Bureau", "H&ocirc;pital", "Sports", "Centre Commercial", "Cin&eacute;ma", "Bureau", "Centre Commercial", "&Eacute;glise", "Magasinage", "Bureau", "Bureau", "Bureau", "Bureau", "Bureau", "Bureau", "Bureau", "H&ocirc;tel", "Agence", "H&ocirc;tel",
	"Agence", "&Eacute;cole", "Site Historique", "Bureau", "Bureau", "Coll&egrave;ge", "Agence", "Bureau", "R&eacute;sidence", "Universit&eacute;", "Universit&eacute;", "Agence", "&Eacute;cole", "Agence", "H&ocirc;tel", "&Eacute;cole de M&eacute;tiers",
	"Bureau", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "Coll&egrave;ge", "Agence", "Bureau", "Universit&eacute;", "Bureau", "Universit&eacute;", "Universit&eacute;", "Bureau", "Bureau", "Bureau" ];
	
	haddresses = [ "845 Rue Sherbrooke Ouest", "705 Rue Sainte-Catherine Ouest", "1500 Avenue McGill College", "1 Place Ville Marie", "900 Boulevard Ren&eacute;-L&eacute;vesque Ouest",
	"690 Rue Sherbrooke Ouest", "859 Rue Sherbrooke Ouest", "", "2903 Rue Peel", "1085 Rue de la Cath&eacute;drale", "1155 Rue Metcalfe", 
	"687 Avenue des Pins Ouest", "475 Avenue des Pins Ouest", "977 Rue Sainte-Catherine Ouest", "977 Rue Sainte-Catherine Ouest", "1253 Avenue McGill College", 
	"625 Rue Sainte-Catherine Ouest", "635 Rue Sainte-Catherine Ouest", "585 Rue Sainte-Catherine Ouest", "1501 Avenue McGill College", "2001 Avenue McGill College", 
	"2020 Boulevard Robert-Bourassa", "600 Boulevard de Maisonneuve Ouest", "900 Boulevard de Maisonneuve Ouest", "2001 Boulevard Robert-Bourassa", "1981 Avenue McGill College",
	"1250 Boulevard Robert-Bourassa", "500 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1240 Square Phillips", "1200 Avenue McGill College", "550 Rue Sherbrooke Ouest", "15a Rue Sherbrooke Ouest",
	"2001 Boulevard Robert-Bourassa", "2001 Boulevard Robert-Bourassa", "1255 Boulevard Robert-Bourassa", "500 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1981 Avenue McGill College",
	"1188 Avenue Union", "2001 Avenue McGill College", "688 Rue Sherbrooke Ouest", "1801 Avenue McGill College", "3449 Rue University", "500 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1193 Place Phillips", "505 Boulevard Ren&eacute;-L&eacute;vesque Ouest",
	"1981 Avenue McGill College", "680 Rue Sherbrooke Ouest", "853 Rue Sherbrooke Ouest", "805 Rue Sherbrooke Ouest", "3480 Rue University", "801 Rue Sherbrooke Ouest", "817 Rue Sherbrooke Ouest", "3495 Boulevard Robert-Bourassa",
	"2020 Boulevard Robert-Bourassa", "2000 Avenue McGill College", "2001 Avenue McGill College", "1981 Avenue McGill College", "853 Rue Sherbrooke Ouest", "815 Rue Sherbrooke Ouest", "1801 Avenue McGill College", "1800 Avenue McGill College", "1800 Avenue McGill College" ];
	
	hsites = [ "https://www.mcgill.ca/fr", "https://www.centreeatondemontreal.com/fr", "https://www.placemontrealtrust.com/fr", "https://placevillemarie.com/fr/accueil", "https://www.fairmont.fr/queen-elizabeth-montreal/",
	"https://www.musee-mccord.qc.ca/fr", "https://www.mcgill.ca/redpath/fr", "https://montreal.ca/lieux/square-phillips", 
	"https://montreal.ca/lieux/square-dorchester", "http://www.cathedralecatholiquedemontreal.org/", "https://www.edificesunlife.ca/", 
	"https://ville.montreal.qc.ca/siteofficieldumontroyal/batiment-institutionnel/pavillon-r-pavillon-ross-memorial-hopital-royal-victoria", "http://www.mcgillathletics.ca/", 
	"http://www.carrefourindustriellealliance.com/", "https://www.cineplex.com/Cinemas/theatredetails2017?theatre_url=cinema-banque-scotia-montreal", "https://careers.google.com/locations/montreal/", 
	"https://promenadescathedrale.com/accueil-centre-commercial-centre-ville-montreal", "http://www.montrealcathedral.ca/fr", "https://www.labaie.com/", 
	"http://www.polarisrealty.com/fr/proprietes/montr%C3%A9al/6_1501-avenue-mcgill-college/_realestate_property", "#", "http://le2020.com/", "https://home.kpmg/ca/fr/home/about/offices/montreal-1.html",
	"http://www.maisonmanuvie.com/fr", "https://www.bnpparibas.ca/fr", "https://www.laurentianbank.ca/fr", "https://www.marriott.fr/hotels/travel/yulmd-renaissance-montreal-downtown-hotel",
	"https://www.transports.gouv.qc.ca/fr/Pages/default.aspx", "https://hotelbirksmontreal.com/?lang=fr", "http://www.aseq.ca/", "https://www.trebas.com/fr", "#", "https://www.axa-assistance.ca/fr/",
	"https://gwlraleasing.com/building.php?building=4209522867010994813&lang=fr_CA", "https://www.montrealcollege.ca/fr/", "http://www.habitation.gouv.qc.ca/", "https://gaa.qc.ca/", "https://tomcondos.com/fr/", "https://www.mcgill.ca/dentistry/fr",
	"https://www.mcgill.ca/continuingstudies/fr", "http://www.oiq.qc.ca/Pages/accueil.aspx", "https://face-english.cssdm.gouv.qc.ca/", "https://comite.deontologie.gouv.qc.ca/accueil.html", "http://www.squarephillips.com/fr/accueil.html", "https://eequebec.com/",
	"https://www.richter.ca/fr/", "https://www.mcgill.ca/maxbellschool/fr", "https://www.mcgill.ca/science/fr", "https://www.mcgill.ca/geography/fr", "https://www.cs.mcgill.ca/", "https://www.mcgill.ca/chemistry/fr", "https://www.mcgill.ca/engineering/",
	"https://www.presbyteriancollege.ca/", "https://www.farpopq.com/", "https://www.rsagroup.ca/fr", "https://www.mcgill.ca/psychology/", "https://www.fieracapital.com/fr", "https://www.mcgill.ca/arts/fr", "https://www.mcgill.ca/urbanplanning/fr", "https://www.valero.com/",
	"https://www.interactivebrokers.ca/fr/home.php", "https://www.cnacanada.ca/web/guest/cnacanada/home?language=fr" ];
	
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
