function init()
{
	hnames = [ "Place des Arts", 
	"Quartier des Spectacles / Place des Festivals", 
	"Mus&eacute;e d&#39;Art Contemporain", 
	"Complexe Desjardins", 
	"Revenu Qu&eacute;bec, bureaux montr&eacute;alais", 
	"H&ocirc;tel Hilton Doubletree", 
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon des Sciences Biologiques", 
	"Th&eacute;&acirc;tre du Nouveau Monde",
	"Complexe Guy-Favreau / Services Canada via le Montr&eacute;al Souterrain",
	"Monument-National",
	"Hydro-Qu&eacute;bec",
	"H&ocirc;tel Travelodge Montr&eacute;al Centre",
	"Hilton Garden Inn Montr&eacute;al Centre-Ville",
	"Campus1 MTL",
	"L&#39;Appartement H&ocirc;tel", 
	"H&ocirc;tel Delta Montr&eacute;al par Marriott",
	"R&eacute;gie de l&#39;Assurance Maladie du Qu&eacute;bec",
	"Loto-Qu&eacute;bec",
	"Cin&eacute;ma Imp&eacute;rial",
	"Office National du Film du Canada",
	"Coll&egrave;ge CDI, campus Montr&eacute;al",
	"Registraire des Entreprises du Qu&eacute;bec",
	"F&eacute;d&eacute;ration des M&eacute;decins Sp&eacute;cialistes du Qu&eacute;bec", 
	"FDP Intelligence Financi&egrave;re",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Pr&eacute;sident-Kennedy",
	"&Eacute;glise St. John the Evangelist",
	"Office Qu&eacute;b&eacute;cois de la Langue Fran&ccedil;aise",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Biblioth&egrave;que des Sciences",
	"&Eacute;cole des Arts Num&eacute;riques, de l&#39;Animation et du Design",
	"&Eacute;cole de Danse Contemporaine de Montr&eacute;al",
	"Directeur de l&#39;&Eacute;tat Civil du Qu&eacute;bec",
	"Domtar",
	"Conseil des Arts et des Lettres du Qu&eacute;bec, bureaux montr&eacute;alais",
	"L&#39;Astral",
	"La Maison Symphonique",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon de Chimie & Biochimie",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Sherbrooke",
	"Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Adrien-Pinard",
	"Place du Cardinal P.-&Eacute;. L&eacute;ger",
	"Louis Boh&egrave;me",
	"Le Concorde",
	"Le Peterson",
	"Le Smith" ];
	
	htypes = [ "Th&eacute;&acirc;tre", "District", "Mus&eacute;e", "Centre Commercial", "Agence", "H&ocirc;tel", "Universit&eacute;", "Th&eacute;&acirc;tre", "Gouvernement",
	"Theatre", "Agence", "H&ocirc;tel", "H&ocirc;tel", "R&eacute;sidence", "H&ocirc;tel", "H&ocirc;tel", "Agence", "Agence", "Th&eacute;&acirc;tre", "Bureau",
	"Coll&egrave;ge", "Agence", "Agence", "Agence", "Universit&eacute;", "&Eacute;glise", "Agence", "Biblioth&egrave;que", "Universit&eacute;", "&Eacute;cole", "Agence",
	"Bureau", "Agence", "Th&eacute;&acirc;tre", "Th&eacute;&acirc;tre", "Universit&eacute;", "Universit&eacute;", "Universit&eacute;", "Parc", "R&eacute;sidence", "R&eacute;sidence",
	"R&eacute;sidence", "R&eacute;sidence" ];
	
	haddresses = [ "175 Rue Sainte-Catherine Ouest", "", "185 Rue Sainte-Catherine Ouest", "150 Rue Sainte-Catherine Ouest", "150 Rue Sainte-Catherine Ouest", "1255 Rue Jeanne-Mance",
	"141 Avenue du Pr&eacute;sident-Kennedy", "84 Rue Sainte-Catherine Ouest", "200 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1182 Boulevard Saint-Laurent", 
	"75 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "50 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "380 Rue Sherbrooke Ouest", "420 Rue Sherbrooke Ouest", "455 Rue Sherbrooke Ouest", 
	"475 Avenue du Pr&eacute;sident-Kennedy", "425 Boulevard de Maisonneuve Ouest", "500 Rue Sherbrooke Ouest", "1432 Rue de Bleury", "1501 Rue de Bleury", "416 Boulevard de Maisonneuve Ouest",
	"2050 Rue de Bleury", "150 Rue Sainte-Catherine Ouest", "150 Rue Sainte-Catherine Ouest", "201 Avenue du Pr&eacute;sident-Kennedy", "137 Avenue du Pr&eacute;sident-Kennedy", "125 Rue Sherbrooke Ouest",
	"145 Avenue du Pr&eacute;sident-Kennedy", "1501 Rue de Bleury", "1435 Rue de Bleury", "2050 Rue de Bleury", "395 Boulevard de Maisonneuve Ouest", "1435 Rue de Bleury", "305 Rue Sainte-Catherine Ouest",
	"1600 Rue Saint-Urbain", "2101 Rue Jeanne-Mance", "200 Rue Sherbrooke Ouest", "100 Rue Sherbrooke Ouest", "", "350 Boulevard de Maisonneuve Ouest", "441 Avenue du Pr&eacute;sident-Kennedy",
	"405 Rue de la Concorde", "2100 Rue de Bleury" ];
	
	hsites = [ "https://placedesarts.com/fr", 
	"https://www.quartierdesspectacles.com/fr/", 
	"https://macm.org/", 
	"https://www.complexedesjardins.com/fr",
	"https://www.revenuquebec.ca/fr", 
	"https://www.hiltonhotels.com/fr_FR/canada/doubletree-by-hilton-montreal/",
	"http://carte.uqam.ca/pavillon-sb",
	"https://tnm.qc.ca/",
	"http://complexeguyfavreau.com/fr",
	"https://ent-nts.ca/fr/monument-national", 
	"https://www.hydroquebec.com/residentiel/", 
	"https://www.wyndhamhotels.com/fr-ca/travelodge/montreal-quebec/travelodge-hotel-by-wyndham-montreal-centre/overview",
	"https://www.hiltonhotels.com/fr_FR/canada/hilton-garden-inn-montreal-centre-ville/?cultureKey=fr_FR",
	"https://www.campus1mtl.ca/montreal-student-housing/fr",
	"http://www.appartementhotel.com/",
	"https://www.marriott.fr/hotels/travel/yuldb-delta-hotels-montreal",
	"https://www.ramq.gouv.qc.ca/fr",
	"https://portail.lotoquebec.com/fr/accueil",
	"https://www.cinemaimperial.com/?refreshXL=8141755",
	"https://www.onf.ca/",
	"https://www.collegecdi.ca/quebec/campus/montreal/",
	"http://www.registreentreprises.gouv.qc.ca/fr/default.aspx",
	"https://fmsq.org/fr",
	"https://www.fprofessionnels.com/",
	"https://sciences.uqam.ca/",
	"https://www.redroof.ca/",
	"http://www.oqlf.gouv.qc.ca/accueil.aspx",
	"https://bibliotheques.uqam.ca/bibliotheque/sciences/",
	"https://www.nad.ca/fr",
	"https://www.edcm.ca/",
	"http://www.etatcivil.gouv.qc.ca/fr/default.html",
	"https://www.domtar.com/fr",
	"https://www.calq.gouv.qc.ca/", 
	"https://www.sallelastral.com/",
	"https://placedesarts.com/fr/salle/maison-symphonique",
	"https://chimie.uqam.ca/",
	"https://carte.uqam.ca/pavillon-sh",
	"http://carte.uqam.ca/pavillon-su",
	"#",
	"https://www.louisboheme.com/",
	"http://downtowncondosmontreal.com/le-concorde/",
	"https://lepeterson.com/home-french.html",
	"https://www.summitmanagement.ca/fr/apartments/le-smith" ];
	
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
