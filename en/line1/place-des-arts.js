function init()
{
	spots = [{name: "Place des Arts", type: "Theatre", address: "175 Rue Sainte-Catherine Ouest", site: "https://placedesarts.com/en"},
	{name: "Quartier des Spectacles / Place des Festivals", type: "District", address: "", site: "https://www.quartierdesspectacles.com/en/"},
	{name: "Mus&eacute;e d&#39;Art Contemporain", type: "Museum", address: "185 Rue Sainte-Catherine Ouest", site: "https://macm.org/en/"},
	{name: "Complexe Desjardins", type: "Mall", address: "150 Rue Sainte-Catherine Ouest", site: "https://www.complexedesjardins.com/en"},
	{name: "Revenu Qu&eacute;bec, Montreal offices", type: "Agency", address: "150 Rue Sainte-Catherine Ouest", site: "https://www.revenuquebec.ca/en/"},
	{name: "H&ocirc;tel Hilton Doubletree", type: "Hotel", address: "1255 Rue Jeanne-Mance", site: "https://www.hilton.com/en/hotels/ymqdtdt-doubletree-montreal/"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Biological Science Pavilion", type: "University", address: "141 Avenue du Pr&eacute;sident-Kennedy", site: "http://carte.uqam.ca/pavillon-sb"},
	{name: "Th&eacute;&acirc;tre du Nouveau Monde", type: "Theatre", address: "84 Rue Sainte-Catherine Ouest", site: "https://tnm.qc.ca/"},
	{name: "Complexe Guy-Favreau / Services Canada via Underground City", type: "Government", address: "200 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "http://complexeguyfavreau.com/en/"},
	{name: "Monument-National", type: "Theatre", address: "1182 Boulevard Saint-Laurent", site: "https://ent-nts.ca/en/monument-national"},
	{name: "Hydro-Qu&eacute;bec", type: "Agency", address: "75 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.hydroquebec.com/residential/"},
	{name: "H&ocirc;tel Travelodge Montr&eacute;al Centre", type: "Hotel", address: "50 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.wyndhamhotels.com/en-ca/travelodge/montreal-quebec/travelodge-hotel-by-wyndham-montreal-centre/overview"},
	{name: "Hilton Garden Inn Montr&eacute;al Centre-Ville", type: "Hotel", address: "380 Rue Sherbrooke Ouest", site: "https://www.hilton.com/en/hotels/yulcvgi-hilton-garden-inn-montreal-centre-ville/"},
	{name: "Campus1 MTL", type: "Residence", address: "420 Rue Sherbrooke Ouest", site: "https://www.campus1mtl.ca/montreal-student-housing/"},
	{name: "L&#39;Appartement H&ocirc;tel", type: "Hotel", address: "455 Rue Sherbrooke Ouest", site: "http://www.appartementhotel.com/en/home.html"},
	{name: "H&ocirc;tel Delta Montr&eacute;al par Marriott", type: "Hotel", address: "475 Avenue du Pr&eacute;sident-Kennedy", site: "https://www.marriott.com/hotels/travel/yuldb-delta-hotels-montreal"},
	{name: "R&eacute;gie de l&#39;Assurance Maladie du Qu&eacute;bec", type: "Agency", address: "425 Boulevard de Maisonneuve Ouest", site: "https://www.ramq.gouv.qc.ca/en"},
	{name: "Loto-Qu&eacute;bec", type: "Agency", address: "500 Rue Sherbrooke Ouest", site: "https://portail.lotoquebec.com/en/home"},
	{name: "Cin&eacute;ma Imp&eacute;rial", type: "Theatre", address: "1432 Rue de Bleury", site: "https://www.cinemaimperial.com/?refreshXL=13754496"},
	{name: "National Film Board of Canada", type: "Office", address: "1501 Rue de Bleury", site: "https://www.nfb.ca/"},
	{name: "CDI College, Montreal campus", type: "College", address: "416 Boulevard de Maisonneuve Ouest", site: "https://www.cdicollege.ca/quebec/campuses/montreal/"},
	{name: "Registraire des Entreprises du Qu&eacute;bec", type: "Agency", address: "2050 Rue de Bleury", site: "http://www.registreentreprises.gouv.qc.ca/en/default.aspx"},
	{name: "F&eacute;d&eacute;ration des M&eacute;decins Sp&eacute;cialistes du Qu&eacute;bec", type: "Agency", address: "150 Rue Sainte-Catherine Ouest", site: "https://fmsq.org/fr"},
	{name: "FDP Intelligence Financi&egrave;re", type: "Agency", address: "150 Rue Sainte-Catherine Ouest", site: "https://www.fprofessionnels.com/en/"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pr&eacute;sident-Kennedy Pavilion", type: "University", address: "201 Avenue du Pr&eacute;sident-Kennedy", site: "https://sciences.uqam.ca/"},
	{name: "St. John the Evangelist Church", type: "Church", address: "137 Avenue du Pr&eacute;sident-Kennedy", site: "https://www.redroof.ca/"},
	{name: "Office Qu&eacute;b&eacute;cois de la Langue Fran&ccedil;aise", type: "Agency", address: "125 Rue Sherbrooke Ouest", site: "http://www.oqlf.gouv.qc.ca/accueil.aspx"},
	{name: "Biblioth&egrave;que des Sciences de l&#39;UQAM", type: "Library", address: "145 Avenue du Pr&eacute;sident-Kennedy", site: "https://bibliotheques.uqam.ca/bibliotheque/sciences/"},
	{name: "&Eacute;cole des Arts Num&eacute;riques, de l&#39;Animation et du Design", type: "University", address: "1501 Rue de Bleury", site: "https://www.nad.ca/fr"},
	{name: "&Eacute;cole de Danse Contemporaine de Montr&eacute;al", type: "School", address: "1435 Rue de Bleury", site: "https://www.edcm.ca/en"},
	{name: "Directeur de l&#39;&Eacute;tat Civil du Qu&eacute;bec", type: "Agency", address: "2050 Rue de Bleury", site: "http://www.etatcivil.gouv.qc.ca/en/default.html"},
	{name: "Domtar", type: "Office", address: "395 Boulevard de Maisonneuve Ouest", site: "https://www.domtar.com/en"},
	{name: "Conseil des Arts et des Lettres du Qu&eacute;bec, Montreal offices", type: "Agency", address: "1435 Rue de Bleury", site: "https://www.calq.gouv.qc.ca/en/"},
	{name: "L&#39;Astral", type: "Theatre", address: "305 Rue Sainte-Catherine Ouest", site: "https://www.sallelastral.com/en"},
	{name: "La Maison Symphonique", type: "Theatre", address: "1600 Rue Saint-Urbain", site: "https://placedesarts.com/en/venue/maison-symphonique"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Chemistry & Biochemistry Pavilion", type: "University", address: "2101 Rue Jeanne-Mance", site: "https://chimie.uqam.ca/"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Sherbrooke Pavilion", type: "University", address: "200 Rue Sherbrooke Ouest", site: "https://carte.uqam.ca/pavillon-sh"},
	{name: "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Adrien-Pinard Pavilion", type: "University", address: "100 Rue Sherbrooke Ouest", site: "http://carte.uqam.ca/pavillon-su"},
	{name: "Place du Cardinal P.-&Eacute;. L&eacute;ger", type: "Park", address: "", site: "#"},
	{name: "Louis Boh&egrave;me", type: "Residence", address: "350 Boulevard de Maisonneuve Ouest", site: "https://www.louisboheme.com/en/"},
	{name: "Le Concorde", type: "Residence", address: "441 Avenue du Pr&eacute;sident-Kennedy", site: "http://downtowncondosmontreal.com/le-concorde-2/"}];
	
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
