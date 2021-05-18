function init()
{	
	spots = [{name: "McGill University", type: "University", address: "845 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/"},
	{name: "Centre Eaton de Montr&eacute;al", type: "Mall", address: "705 Rue Sainte-Catherine Ouest", site: "https://www.centreeatondemontreal.com/"},
	{name: "Place Montr&eacute;al Trust via Underground City", type: "Mall", address: "1500 Avenue McGill College", site: "https://www.placemontrealtrust.com/"},
	{name: "Place Ville Marie via Underground City", type: "Mall", address: "1 Place Ville Marie", site: "http://www.placevillemarie.com/en"},
	{name: "H&ocirc;tel Fairmont Reine Elizabeth via Underground City", type: "Hotel", address: "900 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.fairmont.com/queen-elizabeth-montreal/"},
	{name: "Mus&eacute;e Gr&eacute;vin", type: "Museum", address: "705 Rue Sainte-Catherine Ouest", site: "https://www.grevin-montreal.com/en/"},
	{name: "Mus&eacute;e McCord", type: "Museum", address: "690 Rue Sherbrooke Ouest", site: "https://www.musee-mccord.qc.ca/en/"},
	{name: "Mus&eacute;e Redpath", type: "Museum", address: "859 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/redpath/"},
	{name: "Square Phillips", type: "Town Square", address: "", site: "https://montreal.ca/en/places/square-phillips"},
	{name: "Square Dorchester", type: "Town Square", address: "2903 Rue Peel", site: "https://montreal.ca/en/places/square-dorchester"},
	{name: "Cath&eacute;drale Marie Reine du Monde", type: "Church", address: "1085 Rue de la Cath&eacute;drale", site: "http://www.cathedralecatholiquedemontreal.org/"},
	{name: "&Eacute;difice Sun Life", type: "Office", address: "1155 Rue Metcalfe", site: "https://www.sunlifebuilding.ca/"},
	{name: "(defunct) H&ocirc;pital Royal Victoria", type: "Hospital", address: "687 Avenue des Pins Ouest", site: "https://ville.montreal.qc.ca/siteofficieldumontroyal/batiment-institutionnel/pavillon-r-pavillon-ross-memorial-hopital-royal-victoria"},
	{name: "Percival-Molson Memorial Stadium", type: "Sports", address: "475 Avenue des Pins Ouest", site: "http://www.mcgillathletics.ca/"},
	{name: "Carrefour Industrielle Alliance via Underground City", type: "Mall", address: "977 Rue Sainte-Catherine Ouest", site: "http://www.carrefourindustriellealliance.com/en"},
	{name: "Th&eacute;&acirc;tre Banque Scotia via Underground City", type: "Cinema", address: "977 Rue Sainte-Catherine Ouest", site: "https://www.cineplex.com/Theatre/cinema-banque-scotia-montreal"},
	{name: "Google, Montreal offices", type: "Office", address: "1253 Avenue McGill College", site: "https://careers.google.com/locations/montreal/"},
	{name: "Promenades Cath&eacute;drale", type: "Mall", address: "625 Rue Sainte-Catherine Ouest", site: "https://promenadescathedrale.com/home-shopping-centre-downtown-montreal"},
	{name: "Christ Church Catehdral", type: "Church", address: "635 Rue Sainte-Catherine Ouest", site: "http://www.montrealcathedral.ca/"},
	{name: "Hudson&#39;s Bay", type: "Shopping", address: "585 Rue Sainte-Catherine Ouest", site: "https://www.thebay.com/"},
	{name: "1501 McGill College", type: "Office", address: "1501 Avenue McGill College", site: "http://www.polarisrealty.com/en/properties/montreal/6_1501-mcgill-college-avenue/_realestate_property"},
	{name: "2001 McGill College", type: "Office", address: "2001 Avenue McGill College", site: "#"},
	{name: "2020 Robert-Bourassa", type: "Office", address: "2020 Boulevard Robert-Bourassa", site: "http://le2020.com/index-en.html"},
	{name: "Tour KPMG", type: "Office", address: "600 Boulevard de Maisonneuve Ouest", site: "https://home.kpmg/ca/en/home/about/offices/montreal-1.html"},
	{name: "Maison Manuvie", type: "Office", address: "900 Boulevard de Maisonneuve Ouest", site: "http://www.maisonmanuvie.com/en"},
	{name: "BNP Paribas", type: "Office", address: "2001 Boulevard Robert-Bourassa", site: "https://www.bnpparibas.ca/en/"},
	{name: "Tour Banque Laurentienne", type: "Office", address: "1981 Avenue McGill College", site: "https://www.laurentianbank.ca/"},
	{name: "H&ocirc;tel Renaissance Centre-Ville Montr&eacute;al", type: "Hotel", address: "1250 Boulevard Robert-Bourassa", site: "https://www.marriott.com/hotels/travel/yulmd-renaissance-montreal-downtown-hotel"},
	{name: "Transports Qu&eacute;bec, Montreal offices", type: "Agency", address: "500 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.transports.gouv.qc.ca/en/Pages/Home.aspx"},
	{name: "H&ocirc;tel Birks Montr&eacute;al", type: "Hotel", address: "1240 Square Phillips", site: "https://hotelbirksmontreal.com/"},
	{name: "Alliance pour la Sant&eacute; &Eacute;tudiante au Qu&eacute;bec", type: "Agency", address: "1200 Avenue McGill College", site: "http://www.aseq.ca/"},
	{name: "Institut Trebas", type: "School", address: "550 Rue Sherbrooke Ouest", site: "https://www.trebas.com/"},
	{name: "Roddick Gates", type: "Historical Site", address: "15a Rue Sherbrooke Ouest", site: "#"},
	{name: "AXA Assistance Canada", type: "Office", address: "2001 Boulevard Robert-Bourassa", site: "https://www.axa-assistance.ca/"},
	{name: "2001 Robert-Bourassa", type: "Office", address: "2001 Boulevard Robert-Bourassa", site: "https://gwlraleasing.com/building.php?building=4209522867010994813"},
	{name: "Montreal College of Information Technology", type: "College", address: "1255 Boulevard Robert-Bourassa", site: "https://www.montrealcollege.ca/"},
	{name: "Soci&eacute;t&eacute; d&#39;Habitation du Qu&eacute;bec", type: "Agency", address: "500 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "http://www.habitation.gouv.qc.ca/english.html"},
	{name: "Groupement des Assureurs Automobiles", type: "Office", address: "1981 Avenue McGill College", site: "https://gaa.qc.ca/en/"},
	{name: "TOM Condos", type: "Residence", address: "1188 Avenue Union", site: "https://tomcondos.com/en/"},
	{name: "McGill University, Faculty of Dentistry", type: "University", address: "2001 Avenue McGill College", site: "https://www.mcgill.ca/dentistry/"},
	{name: "McGill University, School of Continuing Studies", type: "University", address: "688 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/continuingstudies/"},
	{name: "Ordre des Ing&eacute;nieurs du Qu&eacute;bec", type: "Agency", address: "1801 Avenue McGill College", site: "http://oiq.qc.ca/en/Pages/selection.aspx"},
	{name: "F.A.C.E. School", type: "School", address: "3449 Rue University", site: "https://face-english.cssdm.gouv.qc.ca/"},
	{name: "Comit&eacute; de D&eacute;ontologie Polici&egrave;re du Qu&eacute;bec, Montreal offices", type: "Agency", address: "500 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://comite.deontologie.gouv.qc.ca/en/the-comite.html"},
	{name: "Le Square Phillips H&ocirc;tel &amp; Suites", type: "Hotel", address: "1193 Place Phillips", site: "http://www.squarephillips.com/en/home.html"},
	{name: "&Eacute;cole des Entrepreneurs du Qu&eacute;bec, Montreal campus", type: "Trade School", address: "505 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://eequebec.com/"},
	{name: "Richter, Montreal offices", type: "Office", address: "1981 Avenue McGill College", site: "https://www.richter.ca/"},
	{name: "McGill University, Max Bell School of Public Policy", type: "University", address: "680 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/maxbellschool/"},
	{name: "McGill University, Faculty of Science", type: "University", address: "853 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/science/"},
	{name: "McGill University, Department of Geography", type: "University", address: "805 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/geography/"},
	{name: "McGill University, School of Computer Science", type: "University", address: "3480 Rue University", site: "https://www.cs.mcgill.ca/"},
	{name: "McGill University, Department of Chemistry", type: "University", address: "801 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/chemistry/"},
	{name: "McGill University, Faculty of Engineering", type: "University", address: "817 Rue Sherbrooke Ouest", site: "https://www.mcgill.ca/engineering/"}];
	
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
