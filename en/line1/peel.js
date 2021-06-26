function init()
{
	spots = [{name: "Les Cours Mont-Royal", type: "Mall", address: "1455 Rue Peel", site: "https://lcmr.ca/"},
	{name: "Carrefour Industrielle Alliance via Underground City", type: "Mall", address: "977 Rue Sainte-Catherine Ouest", site: "http://www.carrefourindustriellealliance.com/en"},
	{name: "Th&eacute;&acirc;tre Banque Scotia via Underground City", type: "Cinema", address: "977 Rue Sainte-Catherine Ouest", site: "https://www.cineplex.com/Theatre/cinema-banque-scotia-montreal"},
	{name: "Tour Scotia", type: "Office", address: "1002 Rue Sherbrooke Ouest", site: "#"},
	{name: "Tour CIBC", type: "Office", address: "1155 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "#"},
	{name: "McGill University", type: "University", address: "845 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/"},
	{name: "Place Montr&eacute;al Trust via Underground City", type: "Mall", address: "1500 Avenue McGill College", site: "https://www.placemontrealtrust.com/en/"},
	{name: "Le Demetrius", type: "Residence", address: "1445 Rue Stanley", site: "https://www.gwlraresidential.com/apartments/qc/montreal/le-demetrius/index.aspx?_yTrackUser=OTQxNzA5NjYwIzE5MTk5NTcxODg=-DwVHUNDST0M=&_yTrackVisit=MTY5OTE0MzIwOSMyMDE4MTk4NTE2-/Rw0D2+iQPY=&_yTrackReqDT=37420320201210&lang=999"},
	{name: "YMCA Centre-Ville", type: "Fitness", address: "1440 Rue Stanley", site: "https://www.ymcaquebec.org/en/Find-a-Y/Downtown-YMCA"},
	{name: "FireGrill Restaurant & Bar", type: "Restaurant", address: "1490 Rue Stanley", site: "https://www.firegrill.com/"},
	{name: "Deville Diner Bar", type: "Restaurant", address: "1425 Rue Stanley", site: "http://devilledinerbar.com/"},
	{name: "Square Dorchester", type: "Town Square", address: "2903 Rue Peel", site: "https://montreal.ca/en/places/square-dorchester"},
	{name: "Bell Centre", type: "Sports", address: "1909 Avenue des Canadiens-de-Montr&eacute;al", site: "https://www.centrebell.ca/en"},
	{name: "Mus&eacute;e des Beaux-Arts de Montr&eacute;al", type: "Museum", address: "1380 Rue Sherbrooke Ouest", site: "https://www.mbam.qc.ca/en"},
	{name: "Holt Renfrew Ogilvy", type: "Shopping", address: "1307 Rue Sainte-Catherine Ouest", site: "https://www.holtrenfrew.com/en/the-new-holt-renfrew-ogilvy"},
	{name: "&Eacute;difice Sun Life", type: "Office", address: "1155 Rue Metcalfe", site: "https://www.sunlifebuilding.ca/"},
	{name: "H&ocirc;tel Omni Mont-Royal", type: "Hotel", address: "1050 Rue Sherbrooke Ouest", site: "https://www.omnihotels.com/hotels/montreal-mont-royal"},
	{name: "Le Centre Sheraton Montr&eacute;al", type: "Hotel", address: "1201 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.marriott.com/hotels/travel/yulsi-le-centre-sheraton-montreal-hotel/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTcxNDk2Mi03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"},
	{name: "Ritz-Carlton Montr&eacute;al", type: "Hotel", address: "1228 Rue Sherbrooke Ouest", site: "https://www.ritzcarlton.com/en/hotels/canada/montreal"},
	{name: "Le Germain H&ocirc;tel Montr&eacute;al", type: "Hotel", address: "2050 Rue Mansfield", site: "https://www.germainhotels.com/en/le-germain-hotel/montreal"},
	{name: "Le Mount Stephen", type: "Hotel", address: "1440 Rue Drummond", site: "https://www.lemountstephen.com/"},
	{name: "Vogue Hotel Montreal Downtown", type: "Hotel", address: "1425 Rue de la Montagne", site: "https://www.hilton.com/en/hotels/yulmqqq-vogue-montreal-downtown/"},
	{name: "Le St-Martin H&ocirc;tel Particulier", type: "Hotel", address: "980 Boulevard de Maisonneuve Ouest", site: "https://lestmartinmontreal.com/"},
	{name: "Sofitel Montr&eacute;al Le Carr&eacute; Dor&eacute;", type: "Hotel", address: "1155 Rue Sherbrooke Ouest", site: "https://all.accor.com/hotel/3646/index.en.shtml"},
	{name: "Chambre des Notaires du Qu&eacute;bec", type: "Agency", address: "2045 Rue Stanley", site: "https://www.cnq.org/en/"},
	{name: "&Eacute;difice Dominion Square", type: "Office", address: "1010 Rue Sainte-Catherine Ouest", site: "https://imtl.org/montreal/building/Dominion-Square-Building.php"},
	{name: "H&ocirc;tel Le Cantlie Suites", type: "Hotel", address: "1110 Rue Sherbrooke Ouest", site: "http://www.hotelcantlie.com/"},
	{name: "Residence Inn by Marriott Montr&eacute;al Centre-Ville", type: "Hotel", address: "2045 Rue Peel", site: "https://www.marriott.com/hotels/travel/yulri-residence-inn-montreal-downtown"},
	{name: "Best Western Ville-Marie Montreal Hotel & Suites", type: "Hotel", address: "3407 Rue Peel", site: "https://www.bestwestern.com/en_US/book/hotel-rooms.67012.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67012"},
	{name: "McGill University, Desautels Faculty of Management", type: "University", address: "1001 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/desautels/"},
	{name: "McGill University, McLennan Library Building", type: "Library", address: "3459 Rue McTavish", site: "https://www.mcgill.ca/library/"},
	{name: "Reuben&#39;s Deli & Steakhouse", type: "Restaurant", address: "1116 Rue Sainte-Catherine Ouest", site: "http://reubensdeli.com/"},
	{name: "Canada Goose", type: "Shopping", address: "1020 Rue Sainte-Catherine Ouest", site: "https://www.canadagoose.com/ca/en/montreal-store.html"},
	{name: "Chambre de Commerce et d&#39;Industrie Fran&ccedil;aise au Canada", type: "Office", address: "1455 Rue Drummond", site: "https://www.ccifcmtl.ca/"},
	{name: "Le 1200 Ouest", type: "Residence", address: "1200 Boulevard de Maisonneuve Ouest", site: "http://downtowncondosmontreal.com/1200-de-maisonneuve-2/"},
	{name: "Procom, Montreal offices", type: "Office", address: "2000 Rue Peel", site: "https://www.procomservices.com/en-us/"},
	{name: "Office de Consultation Publique de Montr&eacute;al", type: "Office", address: "1550 Rue Metcalfe", site: "https://ocpm.qc.ca/"},
	{name: "Communaut&eacute; M&eacute;tropolitaine de Montr&eacute;al", type: "Office", address: "1002 Rue Sherbrooke Ouest", site: "https://cmm.qc.ca/"},
	{name: "Montreal Gazette", type: "Office", address: "2055 Rue Peel", site: "https://montrealgazette.com/"},
	{name: "Reflector Entertainment", type: "Studio", address: "2200 Rue Stanley", site: "https://www.reflectorentertainment.com/"},
	{name: "McLean&#39;s Pub", type: "Restaurant", address: "1210 Rue Peel", site: "https://mcleanspub.com/en/"},
	{name: "Peel Pub", type: "Restaurant", address: "1196 Rue Peel", site: "#"},
	{name: "Four Seasons H&ocirc;tel et R&eacute;sidences Montr&eacute;al", type: "Hotel", address: "1440 Rue de la Montagne", site: "https://www.fourseasons.com/montreal/?seo=google_local_mqu1_amer"},
	{name: "Best Western Plus Montr&eacute;al Centre-Ville H&ocirc;tel Europa", type: "Hotel", address: "1240 Rue Drummond", site: "https://www.bestwestern.com/en_US/book/hotel-rooms.67013.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67013"},
	{name: "Stanley Tower", type: "Residence", address: "3470 Rue Stanley", site: "http://www.stanleytower.com/"},
	{name: "Le Sommet 3475", type: "Residence", address: "3475 Rue de la Montagne", site: "https://lesommet3475.com/en/"},
	{name: "McGill University, Faculty of Medicine and Health Sciences", type: "University", address: "3605 Rue de la Montagne", site: "https://www.mcgill.ca/medhealthsci/"},
	{name: "McGill University, Faculty of Law", type: "University", address: "3644 Rue Peel", site: "https://www.mcgill.ca/law/"},
	{name: "McGill University, Faculty of Education", type: "University", address: "3700 Rue McTavish", site: "https://www.mcgill.ca/education/"},
	{name: "LUNA Appartements Urbains", type: "Residence", address: "1100 Avenue du Docteur-Penfield", site: "http://www.appartementsluna.com/en/home.html"},
	{name: "Royal Penfield", type: "Residence", address: "1230 Avenue du Docteur-Penfield", site: "https://www.groupeaccueilres.ca/the-royal-penfield-"},
	{name: "Le Drummond", type: "Residence", address: "1211 Rue Stanley", site: "http://www.mcgillimmobilier.com/en/drummond-condos-in-montreal-downtown/"},
	{name: "Coast Underwriters, Montreal offices", type: "Office", address: "1010 Rue Sherbrooke Ouest", site: "https://www.coastunderwriters.ca/"},
	{name: "Theratechnologies", type: "Office", address: "2015 Rue Peel", site: "https://www.theratech.com/"},
	{name: "McGill University, Department of Biology", type: "University", address: "1205 Avenue du Docteur-Penfield", site: "https://www.mcgill.ca/biology/"},
	{name: "McGill University, Department of Pharmacology &amp; Therapeutics", type: "University", address: "3655 Promenade Sir-William-Osler", site: "https://www.mcgill.ca/pharma/"},
	{name: "McGill University, Department of Physiology", type: "University", address: "3655 Promenade Sir-William-Osler", site: "https://www.mcgill.ca/physiology/"},
	{name: "H&ocirc;tel Chez Swann", type: "Hotel", address: "1444 Rue Drummond", site: "http://hotelchezswann.com/"},
	{name: "Chez Alexandre", type: "Restaurant", address: "1454 Rue Peel", site: "https://www.chezalexandre.com/en/"},
	{name: "Ferreira Caf&eacute;", type: "Restaurant", address: "1446 Rue Peel", site: "https://ferreiracafe.com/en/"},
	{name: "Ib&eacute;rica", type: "Restaurant", address: "1450 Rue Peel", site: "http://www.iberica.ca/?lang=en"},
	{name: "Caf&eacute; Vasco Da Gama", type: "Restaurant", address: "1472 Rue Peel", site: "https://vascodagama.ca/en/"},
	{name: "Zante", type: "Restaurant", address: "1112 Rue Sherbrooke Ouest", site: "https://www.restaurantzante.ca/?lang=en"},
	{name: "Campo", type: "Restaurant", address: "1108 Boulevard de Maisonneuve Ouest", site: "https://campomtl.com/en/"},
	{name: "H&ocirc;tel Ambrose", type: "Hotel", address: "3422 Rue Stanley", site: "https://hotelambrose.ca/en"},
	{name: "Maison Louis-Joseph-Forget", type: "Historical Site", address: "1195 Rue Sherbrooke Ouest", site: "https://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=92828&type=bien"},
	{name: "Maison James-Reid-Wilson", type: "Historical Site", address: "1201 Rue Sherbrooke Ouest", site: "https://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=92829&type=bien"} ];
	
	if(spots.length == 1){
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><b>"+spots.length+ " hotspot is near this station.</b></span><br/><br/>";
	}
	else {
		document.getElementById("hotspot-js").innerHTML += "<span style=\"font-size: 14pt\"><b>"+spots.length+ " hotspots are near this station.</b></span><br/><br/>";
	}
	
	for (var i=0; i<spots.length; i++)
	{
		if (spots[i].site == "#")
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + spots[i].name 
			+ "</td><td>" + spots[i].type 
			+ "</td><td>" + spots[i].address 
			+ "</td><td>" + "No website available</td></tr></li>";
		}
		else
		{
			document.getElementById("hotspot-js").innerHTML += "<li><tr><td>" + spots[i].name 
			+ "</td><td>" + spots[i].type 
			+ "</td><td>" + spots[i].address 
			+ "</td><td>" + "<a href=\"" + spots[i].site + "\">Website</a></td></tr></li>";
		} 	
	}
}

window.onload = init; 
var spots;
