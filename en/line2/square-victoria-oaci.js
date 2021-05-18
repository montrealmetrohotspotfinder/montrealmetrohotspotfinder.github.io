function init()
{
	spots = [{name: "Old Montreal", type: "District", address: "", site: "https://vieuxmontreal.ca/en/"},
	{name: "Old Port of Montreal", type: "Port", address: "333 Rue de la Commune Ouest", site: "https://www.oldportofmontreal.com/"},
	{name: "Square Victoria", type: "Town Square", address: "", site: "https://montreal.ca/en/places/square-victoria"},
	{name: "Quebecor Media", type: "Office", address: "612 Rue Saint-Jacques", site: "https://www.quebecor.com/en/home"},
	{name: "Tour de la Bourse", type: "Office", address: "800 Rue Gauvin", site: "http://www.tourdelabourse.com/"},
	{name: "Tour Banque Nationale", type: "Office", address: "600 Rue de la Gaucheti&egrave;re Ouest", site: "#"},
	{name: "Tour Viger", type: "Office", address: "525 Avenue Viger Ouest", site: "https://www.touraimia.com/en/index.php"},
	{name: "Place Jean-Paul-Riopelle", type: "Town Square", address: "1000 Place Jean-Paul-Riopelle", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/place-jean-paul-riopelle"},
	{name: "Quartier International", type: "District", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/quartier-international-de-montreal"},
	{name: "ICAO Building", type: "Office", address: "999 Boulevard Robert-Bourassa", site: "https://www.icao.int/Pages/default.aspx"},
	{name: "Centre de Commerce Mondial de Montr&eacute;al", type: "Mall", address: "747 Rue du Square-Victoria", site: "https://www.alliedreit.com/property/__trashed/"},
	{name: "H&ocirc;tel Le Saint-James", type: "Hotel", address: "355 Rue Saint-Jacques", site: "https://hotellestjames.com/"},
	{name: "Raymond Chabot Grant Thornton", type: "Office", address: "600 Rue de la Gaucheti&egrave;re Ouest", site: "https://www.rcgt.com/en/offices/montreal/"},
	{name: "Somwhr Liquor Lounge", type: "Restaurant", address: "401 Rue Notre-Dame Ouest", site: "http://somwhr.com/"},
	{name: "Le Westin Montr&eacute;al", type: "Hotel", address: "270 Rue Saint-Antoine Ouest", site: "https://www.marriott.com/hotels/travel/yulle-le-westin-montreal/"},
	{name: "W Montr&eacute;al", type: "Hotel", address: "901 Rue du Square-Victoria", site: "https://www.marriott.com/hotels/travel/yulwh-w-montreal/"},
	{name: "L H&ocirc;tel Montr&eacute;al", type: "Hotel", address: "262 Rue Saint-Jacques", site: "http://www.lhotelmontreal.com/default-en.html"},
	{name: "H&ocirc;tel Intercontinental Montr&eacute;al", type: "Hotel", address: "360 Rue Saint-Antoine Ouest", site: "https://montreal.intercontinental.com/en/"},
	{name: "Cit&eacute; du Multim&eacute;dia", type: "District", address: "", site: "https://grandquebec.com/montreal-touristique/cite-multimedia/"},
	{name: "Palais des Congr&egrave;s via Underground City", type: "Convention Centre", address: "1001 Place Jean-Paul-Riopelle", site: "https://congresmtl.com/en/"},
	{name: "Place Bonaventure via Underground City", type: "Convention Centre", address: "800 Rue de la Gaucheti&egrave;re Ouest", site: "http://placebonaventure.com/en/"},
	{name: "evo Montr&eacute;al", type: "Residence", address: "777 Boulevard Robert-Bourassa", site: "https://www.evomontreal.com/"},
	{name: "Portus 360", type: "Restaurant", address: "777 Boulevard Robert-Bourassa", site: "https://portus360.com/en/"},
	{name: "Embassy Suites by Hilton Montr&eacute;al", type: "Hotel", address: "208 Rue Saint-Antoine Ouest", site: "https://www.hilton.com/en/hotels/yuldnes-embassy-suites-montreal/"},
	{name: "Caisse de D&eacute;p&ocirc;t et Placement du Qu&eacute;bec", type: "Agency", address: "1000 Place Jean-Paul-Riopelle", site: "https://www.cdpq.com/en"},
	{name: "AON", type: "Office", address: "700 Rue de la Gaucheti&egrave;re Ouest", site: "https://www.aon.com/canada/default.jsp"},
	{name: "&Eacute;difice Jacques-Parizeau (formerly Centre CDP Capital)", type: "Office", address: "1000 Place Jean-Paul-Riopelle", site: "http://edificejacques-parizeau.com/en/"},
	{name: "Soci&eacute;t&eacute; Qu&eacute;b&eacute;coise d&#39;Information Juridique", type: "Agency", address: "715 Rue du Square-Victoria", site: "https://soquij.qc.ca/"},
	{name: "CSL Group", type: "Office", address: "759 Rue du Square-Victoria", site: "https://www.cslships.com/en"},
	{name: "Maison des R&eacute;gions", type: "Office", address: "500 Rue Saint-Jacques", site: "https://maisondesregions.com/"},
	{name: "Place Victoria", type: "Mall", address: "800 Rue du Square-Victoria", site: "http://www.groupepetra.com/eng/properties/view?id=41index2_fr.php"},
	{name: "World Anti-Doping Agency", type: "Office", address: "800 Rue du Square-Victoria", site: "https://www.wada-ama.org/"},
	{name: "International Air Transport Association", type: "Office", address: "800 Rue du Square-Victoria", site: "https://www.iata.org/"},
	{name: "Autorit&eacute; des March&eacute;s Financiers", type: "Agency", address: "800 Rue du Square-Victoria", site: "https://lautorite.qc.ca/en"},
	{name: "La Vo&ucirc;te", type: "Restaurant", address: "360 Rue Saint-Jacques", site: "https://lavoutemontreal.com/en/home/"},
	{name: "Ivanho&eacute; Cambridge", type: "Office", address: "1001 Rue du Square-Victoria", site: "https://www.ivanhoecambridge.com/en/"},
	{name: "Atlific Hotels", type: "Office", address: "250 Rue Saint-Antoine Ouest", site: "https://www.atlific.com/"},
	{name: "St-James Theatre", type: "Reception Hall", address: "265 Rue Saint-Jacques", site: "https://www.stjamestheatre.ca/english"},
	{name: "CIMA+", type: "Office", address: "740 Rue Notre-Dame Ouest", site: "https://www.cima.ca/en/"},
	{name: "KoSc&egrave;ne", type: "Office", address: "651 Rue Notre-Dame Ouest", site: "http://www.koscene.ca/"},
	{name: "Saint-M2", type: "Residence", address: "464 Rue Saint-Henri", site: "https://www.saintm2.com/en/"},
	{name: "Chamber of Commerce of Metropolitan Montreal", type: "Office", address: "393 Rue Saint-Jacques", site: "https://www.ccmm.ca/en/"},
	{name: "H&ocirc;tel Gault", type: "Hotel", address: "449 Rue Sainte-H&eacute;l&egrave;ne", site: "https://hotelgault.com/"},
	{name: "Appartements-Boutique", type: "Residence", address: "715 Rue William", site: "http://www.appartementsboutique.ca/en/home.html"},
	{name: "Square des Fr&egrave;res-Charon", type: "Park", address: "", site: "https://montreal.ca/en/places/square-des-freres-charon"},
	{name: "DOMO Appartements", type: "Residence", address: "650 Rue Wellington", site: "https://www.mondev.ca/apartments-for-rent-montreal/old-montreal/wellington-650"},
	{name: "Alstom", type: "Office", address: "1050 C&ocirc;te du Beaver Hall", site: "https://www.alstom.com/"},
	{name: "Place du Fr&egrave;re-Andr&eacute;", type: "Park", address: "", site: "https://montreal.ca/en/places/place-du-frere-andre"}];
	
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
