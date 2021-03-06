function init()
{
	hnames = [ "Mus&eacute;e Juste Pour Rire", "Club Soda", "Best Western Plus H&ocirc;tel Montr&eacute;al", "Monument-National", "Laurent & Clark", "Appartements Le Myriade", "MTelus", "Place de la Paix", "H&ocirc;tel Z&eacute;ro1",
		 "H&ocirc;tel Faubourg Montr&eacute;al", "H&ocirc;tel Chrome Montr&eacute;al Centre-Ville", "Candlewood Suites Montr&eacute;al Centre-Ville",
		 "Universit&eacute; du Qu&eacute;bec &agrave; Montr&eacute;al, Pavillon Sainte-Catherine", "H&ocirc;tel 10" ];
	
	htypes = [ "Mus&eacute;e", "Th&eacute;&acirc;tre", "H&ocirc;tel", "Th&eacute;atre", "R&eacute;sidence", "R&eacute;sidence", "Th&eacute;&acirc;tre", "Parc", "H&ocirc;tel",
		 "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Universit&eacute;", "H&ocirc;tel" ];
	
	haddresses = [ "2095 Boulevard Saint-Laurent", "1225 Boulevard Saint-Laurent", "161 Rue Sainte-Catherine Est", "1182 Boulevard Saint-Laurent", "1593 Rue Clark", "1445 Rue Clark",
	"59 Rue Sainte-Catherine Est", "", "1 Boulevard Ren&eacute;-L&eacute;vesque Est", "155 Boulevard Ren&eacute;-L&eacute;vesque Est", "215 Boulevard Ren&eacute;-L&eacute;vesque Est", 
	"191 Boulevard Ren&eacute;-L&eacute;vesque Est", "209 Rue Sainte-Catherine Est", "10 Rue Sherbrooke Ouest" ];
	
	hsites = [ "http://www.hahaha.com/fr", "https://clubsoda.ca/", "https://www.bestwestern.com/fr_FR/book/hotel-rooms.67029.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:67029", "https://ent-nts.ca/fr/monument-national",
	"http://laurent-clark.com/fr", "https://www.mondev.ca/fr/appartements-a-louer-montreal/ville-marie/myriade", "https://mtelus.com/fr", "http://peacepark.com/", "https://www.zero1-mtl.com/fr/",
	"https://www.hotelfaubourgmontreal.com/fr", "https://www.hotelchrome.com/copie-de-accueil", "https://www.ihg.com/candlewood/hotels/fr/fr/montreal/yullb/hoteldetail?cm_mmc=GoogleMaps-_-CW-_-CA-_-YULLB", "http://carte.uqam.ca/pavillon-v",
	"http://www.hotel10montreal.com/francais/" ];
	
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
