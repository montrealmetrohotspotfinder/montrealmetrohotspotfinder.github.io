function init()
{
	hnames = [ "Vieux Montr&eacute;al", "Vieux Port de Montr&eacute;al", "Square Victoria", "Quebecor Media", "Tour de la Bourse", "Tour Banque Nationale", "Tour Viger", "Place Jean-Paul-Riopelle", "Quartier International",
	"Maison de l&#39;OACI", "Centre de Commerce Mondial de Montr&eacute;al", "H&ocirc;tel Le Saint-James", "Raymond Chabot Grant Thornton", "Somwhr Liquor Lounge", "Le Westin Montr&eacute;al", "W Montr&eacute;al",
	"L H&ocirc;tel Montr&eacute;al", "H&ocirc;tel Intercontinental Montr&eacute;al", "Cit&eacute; du Multim&eacute;dia", "Palais des Congr&egrave;s via le Montr&eacute;al Souterrain", "Place Bonaventure via le Montr&eacute;al Souterrain", "evo Montr&eacute;al", "Portus 360", "Embassy Suites by Hilton Montr&eacute;al",
	"Caisse de D&eacute;p&ocirc;t et Placement du Qu&eacute;bec", "AON", "&Eacute;difice Jacques-Parizeau (anciennement Centre CDP Capital)", "Soci&eacute;t&eacute; Qu&eacute;b&eacute;coise d&#39;Information Juridique", "Groupe CSL", "Maison des R&eacute;gions",
	"Place Victoria", "Agence Mondiale Antidopage", "Association Internationale du Transport A&eacute;rien", "Autorit&eacute; des March&eacute;s Financiers", "La Vo&ucirc;te", "Ivanho&eacute; Cambridge",
	"Atlific Hotels", "Th&eacute;&acirc;tre St-James", "CIMA+", "KoSc&egrave;ne", "Saint-M2", "Chambre de Commerce du Montr&eacute;al M&eacute;tropolitain", "H&ocirc;tel Gault", "Appartements-Boutique", "Square des Fr&egrave;res-Charon", "DOMO Appartements", "Alstom", "Place du Fr&egrave;re-Andr&eacute;", "Toqu&eacute;!",
	"Terrasse W Montr&eacute;al", "H&ocirc;tel St-Paul", "The Farsides", "Holder", "Le Cartet Resto Boutique", "Dandy", "Le 409", "Monarque", "&Eacute;difice du Grand Tronc", "Helena" ];
	
	htypes = [ "District", "Port", "Place de la Ville", "Bureau", "Bureau", "Bureau", "Bureau", "Place de la Ville", "District", "Bureau", "Centre Commercial", "H&ocirc;tel", "Bureau", "Restaurant", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel",
	"District", "Centre de Convention", "Centre de Convention", "R&eacute;sidence", "Restaurant", "H&ocirc;tel", "Agence", "Bureau", "Bureau", "Agence", "Bureau", "Bureau", "Centre Commercial", "Bureau", "Bureau", "Agence", "Restaurant", "Bureau", "Bureau", "Salle de R&eacute;ception",
	"Bureau", "Bureau", "R&eacute;sidence", "Bureau", "H&ocirc;tel", "R&eacute;sidence", "Place de la Ville", "R&eacute;sidence", "Bureau", "Parc", "Restaurant", "Restaurant", "H&ocirc;tel", "Restaurant", "Restaurant", "Restaurant", "Restaurant", "Restaurant", "Restaurant", "Gouvernement", "Restaurant" ];
	
	haddresses = [ "", "333 Rue de la Commune Ouest", "", "612 Rue Saint-Jacques", "800 Rue Gauvin", "600 Rue de la Gaucheti&egrave;re Ouest", "525 Avenue Viger Ouest", "1000 Place Jean-Paul-Riopelle", "",
	"999 Boulevard Robert-Bourassa", "747 Rue du Square-Victoria", "355 Rue Saint-Jacques", "600 Rue de la Gaucheti&egrave;re Ouest", "401 Rue Notre-Dame Ouest", "270 Rue Saint-Antoine Ouest", "901 Rue du Square-Victoria", 
	"262 Rue Saint-Jacques", "360 Rue Saint-Antoine Ouest", "", "1001 Place Jean-Paul-Riopelle", "800 Rue de la Gaucheti&egrave;re Ouest", "777 Boulevard Robert-Bourassa", "777 Boulevard Robert-Bourassa", "208 Rue Saint-Antoine Ouest",
	"1000 Place Jean-Paul-Riopelle", "700 Rue de la Gaucheti&egrave;re Ouest", "1000 Place Jean-Paul-Riopelle", "715 Rue du Square-Victoria", "759 Rue du Square-Victoria", "500 Rue Saint-Jacques",
	"800 Rue du Square-Victoria", "800 Rue du Square-Victoria", "800 Rue du Square-Victoria", "800 Rue du Square-Victoria", "360 Rue Saint-Jacques", "1001 Rue du Square-Victoria", "250 Rue Saint-Antoine Ouest", "265 Rue Saint-Jacques",
	"740 Rue Notre-Dame Ouest", "651 Rue Notre-Dame Ouest", "464 Rue Saint-Henri", "393 Rue Saint-Jacques", "449 Rue Sainte-H&eacute;l&egrave;ne", "715 Rue William", "", "650 Rue Wellington", "1050 C&ocirc;te du Beaver Hall", "", "900 Place Jean-Paul-Riopelle", "901 Rue du Square-Victoria",
	"355 Rue McGill", "690 Rue Notre-Dame Ouest", "407 Rue McGill", "106 Rue McGill", "244 Rue Saint-Jacques", "409 Rue McGill", "406 Rue Saint-Jacques", "360 Rue McGill", "438 Rue McGill" ];
	
	hsites = [ "https://vieuxmontreal.ca/", "https://www.vieuxportdemontreal.com/", "https://montreal.ca/lieux/square-victoria", "https://www.quebecor.com/fr/accueil", "http://www.tourdelabourse.com/", "#", "https://www.touraimia.com/index.php",
	"https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/place-jean-paul-riopelle", "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/quartier-international-de-montreal", "https://www.icao.int/Pages/default.aspx", 
	"https://www.alliedreit.com/fr/property/__trashed/", "https://hotellestjames.com/fr", "https://www.rcgt.com/fr/bureaux/montreal/", "http://somwhr.com/", "https://www.marriott.fr/hotels/travel/yulle-le-westin-montreal", 
	"https://www.marriott.fr/hotels/travel/yulwh-w-montreal", "http://www.lhotelmontreal.com/default-fr.html", "https://montreal.intercontinental.com/fr/", "https://grandquebec.com/montreal-touristique/cite-multimedia/", "https://congresmtl.com/", "http://placebonaventure.com/fr/",
	"https://www.evomontreal.com/fr", "https://portus360.com/", "https://www.hiltonhotels.com/fr_FR/canada/embassy-suites-by-hilton-montreal/?cultureKey=fr_FR", "https://www.cdpq.com/fr", "https://www.aon.com/canada/fr/default.jsp",
	"http://edificejacques-parizeau.com/", "https://soquij.qc.ca/", "https://www.cslships.com/fr", "https://maisondesregions.com/", "http://www.groupepetra.com/fra/properties/view?id=41index2_fr.php", "https://www.wada-ama.org/fr",
	"https://www.iata.org/", "https://lautorite.qc.ca/", "https://lavoutemontreal.com/", "https://www.ivanhoecambridge.com/", "https://fr.atlific.com/", "https://www.stjamestheatre.ca/francais",
	"https://www.cima.ca/", "http://www.koscene.ca/", "https://www.saintm2.com/fr/", "https://www.ccmm.ca/", "https://hotelgault.com/fr/", "http://www.appartementsboutique.ca/", "https://montreal.ca/lieux/square-des-freres-charon", "https://www.mondev.ca/fr/appartements-a-louer-montreal/old-montreal/wellington-650",
	"https://www.alstom.com/fr", "https://montreal.ca/lieux/place-du-frere-andre", "https://www.restaurant-toque.com/fr/", "https://www.marriott.fr/hotels/hotel-information/restaurant/details/yulwh-w-montreal/6760117/", "https://hotelstpaul.com/fr/", "https://www.thefarsides.com/?lang=fr", "http://restaurantholder.com/", "https://lecartet.ca/",
	"http://dandymtl.com/fr/", "https://le409.com/", "https://restaurantmonarque.ca/", "https://imtl.org/edifices/edifice_Grand_Tronc.php", "https://restauranthelena.com/" ];
	
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
