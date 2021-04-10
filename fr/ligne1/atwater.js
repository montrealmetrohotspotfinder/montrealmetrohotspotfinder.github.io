function init()
{
	hnames = [ "C&eacute;gep Dawson", 
	"Place Alexis-Nihon", 
	"&Eacute;cole Secondaire Westmount", 
	"Westmount Square", 
	"Forum de Montr&eacute;al", 
	"Cin&eacute;ma Cineplex Forum", 
	"H&ocirc;pital de Montr&eacute;al pour Enfants", 
	"Square Cabot",
	"H&ocirc;tel La Tour Belv&eacute;d&egrave;re",
	"F&eacute;d&eacute;ration des M&eacute;decins Omnipraticiens du Qu&eacute;bec",
	"Plaza Tower",
	"Residence Inn by Marriott Montr&eacute;al Westmount",
	"Place Henri-Dunant",
	"Manoir Charles Dutaud",
	"Parc Hector-Toe-Blake",
	"Alexander Appartements",
	"1100 Atwater" ];
	
	htypes = [ "Coll&egrave;ge", "Centre Commercial", "&Eacute;cole", "Centre Commercial", "Divertissement", "Cin&eacute;ma", "H&ocirc;pital", "Place de la Ville", "H&ocirc;tel", "Agence", "R&eacute;sidence", "H&ocirc;tel", "Parc",
	"R&eacute;sidence", "Parc", "R&eacute;sidence", "Bureau" ];
	
	haddresses = [ "3040 Rue Sherbrooke Ouest", 
	"1500 Avenue Atwater", 
	"4350 Rue Sainte-Catherine Ouest", 
	"1 Carr&eacute; Westmount", 
	"2313 Rue Sainte-Catherine Ouest",
	"2313 Rue Sainte-Catherine Ouest",
	"1040 Avenue Atwater",
	"",
	"2175 Boulevard de Maisonneuve Ouest",
	"3500 Boulevard de Maisonneuve Ouest",
	"4000 Boulevard de Maisonneuve Ouest",
	"2170 Avenue Lincoln",
	"",
	"2165 Rue Tupper",
	"",
	"1180 Rue du Sussex",
	"1100 Avenue Atwater" ];
	
	hsites = [ "http://www.dawsoncollege.qc.ca/", 
	"https://www.alexisnihon.com/fr", 
	"http://www.duxvitaeratio.ca/", 
	"#",
	"http://www.forum-montreal.com/", 
	"https://www.cineplex.com/Cinemas/theatredetails2017?theatre_url=cinema-cineplex-forum&utm_source=google&utm_medium=organic&utm_campaign=local&utm_content=CPXMontrealForum",
	"http://www.hopitalpourenfants.com/services-et-personnel/services/service-medecine-de-ladolescence-et-gynecologie-19",
	"https://montreal.ca/lieux/square-cabot",
	"https://www.tourbelvedere.com/fr",
	"https://www.fmoq.org/",
	"https://alexisnihon.com/fr/plaza-tower",
	"https://www.marriott.fr/hotels/travel/yulmr-residence-inn-montreal-westmount",
	"https://montreal.ca/lieux/place-henri-dunant",
	"https://residences-quebec.ca/fr/residence/manoir-charles-dutaud/560",
	"https://montreal.ca/lieux/parc-hector-toe-blake",
	"https://devimco.com/appartements/montreal/shaughnessy/alexander",
	"https://1100atwater.ca/" ];
	
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