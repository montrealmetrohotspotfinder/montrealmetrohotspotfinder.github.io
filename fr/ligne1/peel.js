function init()
{
	hnames = [ "Les Cours Mont-Royal",
		"Carrefour Industrielle Alliance via le Montr&eacute;al Souterrain",
		"Th&eacute;&acirc;tre Banque Scotia via le Montr&eacute;al Souterrain",
		"Tour Scotia",
		"Tour CIBC",
		"Universit&eacute; McGill",
		"Place Montr&eacute;al Trust via le Montr&eacute;al Souterrain",
		"Le Demetrius",
		"YMCA Centre-Ville",	
		"FireGrill Restaurant & Bar",
		"Deville Diner Bar",
		"Square Dorchester",
		"Centre Bell",
		"Mus&eacute;e des Beaux-Arts de Montr&eacute;al",
		"Holt Renfrew Ogilvy",
		"&Eacute;difice Sun Life",
		"H&ocirc;tel Omni Mont-Royal",
		"Le Centre Sheraton Montr&eacute;al",
		"Ritz-Carlton Montr&eacute;al", 
		"Le Germain H&ocirc;tel Montr&eacute;al", 
		"Le Mount Stephen", 
		"Vogue Hotel Montreal Downtown", 
		"Le St-Martin H&ocirc;tel Particulier", 
		"Sofitel Montr&eacute;al Le Carr&eacute; Dor&eacute;",
		"Chambre des Notaires du Qu&eacute;bec",
		"&Eacute;difice Dominion Square",
		"H&ocirc;tel Le Cantlie Suites",
		"Residence Inn by Marriott Montr&eacute;al Centre-Ville",
		"Best Western Ville-Marie Montreal Hotel & Suites",
		"Universit&eacute; McGill, Facult&eacute; de Gestion Desautels",
		"Universit&eacute; McGill, Biblioth&egrave;que McLennan",
		"Reuben&#39;s Deli & Steakhouse",
		"Canada Goose",
		"Chambre de Commerce et d&#39;Industrie Fran&ccedil;aise au Canada",
		"Le 1200 Ouest",
		"Procom, bureaux montr&eacute;alais",
		"Office de Consultation Publique de Montr&eacute;al",
		"Communaut&eacute; M&eacute;tropolitaine de Montr&eacute;al",
		"Montreal Gazette",
		"Reflector Entertainment",
		"McLean&#39;s Pub",
		"Peel Pub",
		"Four Seasons H&ocirc;tel et R&eacute;sidences Montr&eacute;al",
		"Best Western Plus Montr&eacute;al Centre-Ville H&ocirc;tel Europa",
		"Stanley Tower",
		"Le Sommet 3475",
		"Universit&eacute; McGill, Facult&eacute; de M&eacute;decine et des Sciences de la Sant&eacute;",
		"Universit&eacute; McGill, Facult&eacute; de Droit",
		"Universit&eacute; McGill, Facult&eacute; des Sciences de l&#39;&Eacute;ducation",
		"LUNA Appartements Urbains",
		"Royal Penfield",
		"Le Drummond",
		"Coast Underwriters, bureaux montr&eacute;alais",
		"Theratechnologies",
		"Universit&eacute; McGill, D&eacute;partement de Biologie",
		"Universit&eacute; McGill, D&eacute;partement de Pharmacologie et Th&eacute;rapeutiques",
		"Universit&eacute; McGill, D&eacute;partement de Physiologie",
		"H&ocirc;tel Chez Swann"];
	
	htypes = [ "Centre Commercial", "Centre Commercial", "Cin&eacute;ma", "Bureau", "Bureau", "Universit&eacute;", 
	"Centre Commercial", "R&eacute;sidence", "Fitness", "Restaurant", "Restaurant", 
	"Place de la Ville", "Sports", "Mus&eacute;e", "Magasinage", "Bureau", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Agence", "Bureau",
	"H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Universit&eacute;", "Biblioth&egrave;que", "Restaurant", "Magasinage", "Bureau", "R&eacute;sidence", "Bureau", "Bureau", "Bureau", "Bureau", "Studio",
	"Restaurant", "Restaurant", "H&ocirc;tel", "H&ocirc;tel", "R&eacute;sidence", "R&eacute;sidence", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "R&eacute;sidence", "R&eacute;sidence",
	"R&eacute;sidence", "Bureau", "Bureau", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "H&ocirc;tel" ];
	
	haddresses = [ "1455 Rue Peel", 
	"977 Rue Sainte-Catherine Ouest",
	"977 Rue Sainte-Catherine Ouest",
	"1002 Rue Sherbrooke Ouest", 
	"1155 Boulevard Ren&eacute;-L&eacute;vesque Ouest",
	"845 Rue Sherbrooke Ouest",
	"1500 Avenue McGill College",
	"1445 Rue Stanley",
	"1440 Rue Stanley",
	"1490 Rue Stanley",
	"1425 Rue Stanley",
	"2903 Rue Peel",
	"1909 Avenue des Canadiens-de-Montr&eacute;al",
	"1380 Rue Sherbrooke Ouest",
	"1307 Rue Sainte-Catherine Ouest",
	"1155 Rue Metcalfe",
	"1050 Rue Sherbrooke Ouest",
	"1201 Boulevard Ren&eacute;-L&eacute;vesque Ouest",
	"1228 Rue Sherbrooke Ouest", 
	"2050 Rue Mansfield", 
	"1440 Rue Drummond", 
	"1425 Rue de la Montagne", 
	"980 Boulevard de Maisonneuve Ouest", 
	"1155 Rue Sherbrooke Ouest",
	"2045 Rue Stanley",
	"1010 Rue Sainte-Catherine Ouest",
	"1110 Rue Sherbrooke Ouest",
	"2045 Rue Peel",
	"3407 Rue Peel",
	"1001 Rue Sherbrooke Ouest",
	"3459 Rue McTavish",
	"1116 Rue Sainte-Catherine Ouest",
	"1020 Rue Sainte-Catherine Ouest",
	"1455 Rue Drummond",
	"1200 Boulevard de Maisonneuve Ouest",
	"2000 Rue Peel",
	"1550 Rue Metcalfe",
	"1002 Rue Sherbrooke Ouest",
	"2055 Rue Peel",
	"2200 Rue Stanley",
	"1210 Rue Peel",
	"1196 Rue Peel",
	"1440 Rue de la Montagne",
	"1240 Rue Drummond",
	"3470 Rue Stanley",
	"3475 Rue de la Montagne",
	"3605 Rue de la Montagne",
	"3644 Rue Peel",
	"3700 Rue McTavish",
	"1100 Avenue du Docteur-Penfield",
	"1230 Avenue du Docteur-Penfield",
	"1211 Rue Stanley",
	"1010 Rue Sherbrooke Ouest",
	"2015 Rue Peel",
	"1205 Avenue du Docteur-Penfield",
	"3655 Promenade Sir-William-Osler",
	"3655 Promenade Sir-William-Osler",
	"1444 Rue Drummond" ];
	
	hsites = [ "https://lcmr.ca/fr/accueil/", "http://www.carrefourindustriellealliance.com/", "https://www.cineplex.com/Cinemas/theatredetails2017?theatre_url=cinema-banque-scotia-montreal", "#", "#", 
	"https://www.mcgill.ca/fr", "https://www.placemontrealtrust.com/fr", "https://www.gwlraresidential.com/apartments/qc/montreal/le-demetrius/index.aspx?_yTrackUser=OTQxNzA5NjYwIzE5MTk5NTcxODg%3d-DwVHUNDST0M%3d&_yTrackVisit=MTY5OTE0MzIwOSMyMDE4MTk4NTE2-%2fRw0D2%2biQPY%3d&_yTrackReqDT=08380320201210&lang=38", "https://www.ymcaquebec.org/fr/Trouver-un-Y/YMCA-Centre-ville", 
	"https://firegrill.com/french/", "http://devilledinerbar.com/fr", "https://montreal.ca/lieux/square-dorchester", 
	"https://www.centrebell.ca/fr", "https://www.mbam.qc.ca/fr", "https://www.holtrenfrew.com/fr/the-new-holt-renfrew-ogilvy", "https://www.edificesunlife.ca/", "https://www.omnihotels.com/fr-ca/hotels/montreal-mont-royal",
	"https://www.marriott.fr/hotels/travel/yulsi-le-centre-sheraton-montreal-hotel",
	"https://www.ritzcarlton.com/fr/hotels/canada/montreal", "https://www.germainhotels.com/fr/hotel-le-germain/montreal", "https://www.lemountstephen.com/fr/", "https://www.hiltonhotels.com/fr_FR/canada/vogue-hotel-montreal-downtown/?cultureKey=fr_FR", "https://lestmartinmontreal.com/fr/", "https://all.accor.com/hotel/3646/index.fr.shtml",
	"https://www.cnq.org/", "https://imtl.org/edifices/Dominion-Square-Building.php", "http://www.hotelcantlie.com/fr", "https://www.marriott.fr/hotels/travel/yulri-residence-inn-montreal-downtown", "https://www.bestwestern.com/fr_FR/book/hotel-rooms.67012.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67012",
	"http://virtualcampustour.mcgill.ca/fr/details/20/pavillon-bronfman", "https://www.mcgill.ca/library/", "http://reubensdeli.com/fr/", "https://www.canadagoose.com/ca/fr/montreal-store.html", "https://www.ccifcmtl.ca/", "http://downtowncondosmontreal.com/1200-de-maisonneuve/", "https://www.procomservices.com/fr-ca/", "https://ocpm.qc.ca/", "https://cmm.qc.ca/", "https://montrealgazette.com/",
	"https://www.reflectorentertainment.com/fr/", "https://mcleanspub.com/fr/", "#", "https://www.fourseasons.com/fr/montreal/?seo=google_local_mqu1_amer", "https://www.bestwestern.com/fr_FR/book/hotel-rooms.67013.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67013", "http://www.stanleytower.com/?lang=fr", "https://lesommet3475.com/fr/", "https://www.mcgill.ca/medhealthsci/fr",
	"https://www.mcgill.ca/law/fr", "https://www.mcgill.ca/education/fr", "http://www.appartementsluna.com/", "https://www.groupeaccueilres.ca/royal-penfield", "http://www.mcgillimmobilier.com/condos-drummond-au-centre-ville-de-montreal/", "https://www.coastunderwriters.ca/", "https://www.theratech.com/fr/", "https://www.mcgill.ca/biology/", "https://www.mcgill.ca/pharma/", "https://www.mcgill.ca/physiology/",
	"http://hotelchezswann.com/fr" ];
	
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
