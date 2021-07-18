function init()
{
	spots = [{name: "Old Montreal", type: "District", address: "", site: "https://vieuxmontreal.ca/en/"},
	{name: "Old Port of Montreal", type: "Port", address: "333 Rue de la Commune Ouest", site: "https://www.oldportofmontreal.com/"},
	{name: "Place des Montr&eacute;alaises", type: "Park", address: "", site: "https://montreal.ca/en/places/place-des-montrealaises"},
	{name: "CHUM Saint-Luc", type: "Hospital", address: "1051 Rue Sanguinet", site: "https://www.chumontreal.qc.ca/"},
	{name: "Chinatown", type: "District", address: "", site: "https://www.mtl.org/en/experience/discover-neighbourhood-montreal-chinatown"},
	{name: "Place Vauquelin", type: "Town Square", address: "275 Rue Notre-Dame Est", site: "https://montreal.ca/en/places/place-vauquelin"},
	{name: "Champ de Mars", type: "Historical Site", address: "158 Rue Saint-Antoine Est", site: "https://montreal.ca/en/places/le-champ-de-mars"},
	{name: "Montreal City Hall", type: "Government", address: "275 Rue Notre-Dame Est", site: "https://montreal.ca/en/places/city-hall"},
	{name: "&Eacute;difice Lucien-Saulnier", type: "Government", address: "155 Rue Notre-Dame Est", site: "https://montreal.ca/en/places/lucien-saulnier-building"},
	{name: "Ch&acirc;teau Ramezay", type: "Historical Site", address: "280 Rue Notre-Dame Est", site: "https://www.chateauramezay.qc.ca/en/"},
	{name: "March&eacute; Bonsecours", type: "Shopping", address: "350 Rue Saint-Paul Est", site: "https://www.marchebonsecours.qc.ca/en/index.html"},
	{name: "Terrasses Bonsecours", type: "Restaurant", address: "364 Rue de la Commune Est", site: "https://terrassesbonsecours.com/"},
	{name: "Chappelle Notre-Dame-de-Bon-Secours", type: "Church", address: "400 Rue Saint-Paul Est", site: "https://margueritebourgeoys.org/en/"},
	{name: "Place Jacques-Cartier", type: "District", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/place-jacques-cartier-and-place-de-la-dauversiere"},
	{name: "Quai Jacques-Cartier", type: "Port", address: "", site: "http://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=115163&type=bien#.X390DtVKiM8"},
	{name: "Quai de l&#39;Horloge", type: "Port", address: "", site: "http://www.patrimoine-culturel.gouv.qc.ca/detail.do?methode=consulter&id=115167&type=bien#.X390UtVKiM8"},
	{name: "Bassin Bonsecours", type: "Lake", address: "", site: "https://www.oldportcorporation.com/activity/bonsecours-basin"},
	{name: "H&ocirc;tel William Gray", type: "Hotel", address: "421 Rue Saint-Vincent", site: "https://hotelwilliamgray.com/"},
	{name: "Maggie Oakes", type: "Restaurant", address: "426 Place Jacques-Cartier", site: "https://maggieoakes.com/en/"},
	{name: "BEVO Bar + Pizzeria", type: "Restaurant", address: "410 Rue Saint-Vincent", site: "https://bevopizza.com/en/"},
	{name: "Vieux-Port Steakhouse", type: "Restaurant", address: "39 Rue Saint-Paul Est", site: "https://vieuxportsteakhouse.com/en/"},
	{name: "Auberge Saint-Gabriel", type: "Restaurant", address: "426 Rue Saint-Gabriel", site: "http://aubergesaint-gabriel.com/en/"},
	{name: "Jardin Nelson", type: "Restaurant", address: "407 Place Jacques-Cartier", site: "https://jardinnelson.com/en/"},
	{name: "Rue Saint-Amable", type: "Historical Site", address: "", site: "https://vieuxmontreal.ca/en/publications/once-upon-a-time-on-saint-amable-street"},
	{name: "Place de la Dauversi&egrave;re", type: "Park", address: "", site: "https://www.vieuxmontreal.ca/en/business/place-de-la-dauversiere-2/"},
	{name: "Parc Fleury-Mesplet", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-fleury-mesplet"},
	{name: "Le Solano", type: "Residence", address: "901 Rue de la Commune Est", site: "https://lesolano.com/en/"},
	{name: "Parc de la Chasse-Galerie", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-de-la-chasse-galerie"},
	{name: "Place Victor-Morin", type: "Park", address: "", site: "https://montreal.ca/en/places/place-victor-morin"},
	{name: "Parc Fran&ccedil;ois-Dollier-De Casson", type: "Park", address: "", site: "https://montreal.ca/en/places/parc-francois-dollier-de-casson"},
	{name: "H&ocirc;pital Chinois de Montr&eacute;al", type: "Hospital", address: "189 Avenue Viger Est", site: "http://www.montrealchinesehospital.ca/home_en.html"},
	{name: "Perch&eacute;", type: "Restaurant", address: "153 Rue Saint-Amable", site: "https://perchemtl.com/en/"},
	{name: "Square Viger", type: "Town Square", address: "", site: "https://montreal.ca/en/places/square-viger"},
	{name: "Centre Culturel Marocain Dar Al Maghrib", type: "Cultural Centre", address: "515 Avenue Viger Est", site: "http://www.lecentreculturelmarocain.ca/"},
	{name: "Maison Sainte-Th&eacute;r&egrave;se", type: "Hotel", address: "110 Rue Sainte-Th&eacute;r&egrave;se", site: "https://maisonsco.com/"},
	{name: "Maison Saint-Vincent", type: "Hotel", address: "443 Rue Saint-Vincent", site: "https://maisonsco.com/"},
	{name: "Terrasse William Gray", type: "Restaurant", address: "421 Rue Saint-Vincent", site: "https://hotelwilliamgray.com/food/terrasse-william-gray/"},
	{name: "Le S&eacute;nateur", type: "Restaurant", address: "254 Rue Saint-Paul Est", site: "https://vieuxmontreal.ca/en/business/le-senateur-en"},
	{name: "L&#39;Usine de Spaghetti", type: "Restaurant", address: "273 Rue Saint-Paul Est", site: "https://www.lusinedespaghettimtl.com/welcome"},
	{name: "Montr&eacute;al Poutine", type: "Restaurant", address: "181 Rue Saint-Paul Est", site: "https://www.montrealpoutine.us/"},
	{name: "Le Club Chasse et P&ecirc;che", type: "Restaurant", address: "423 Rue Saint-Claude", site: "https://www.leclubchasseetpeche.com/en/"},
	{name: "John Michael&#39;s Pub", type: "Restaurant", address: "458 Place Jacques-Cartier", site: "https://pubmontreal.com/"},
	{name: "Jacopo", type: "Restaurant", address: "436 Place Jacques-Cartier", site: "https://jacopomtl.com/en/"},
	{name: "Restaurant Papillon", type: "Restaurant", address: "85 Rue Saint-Paul Est", site: "https://restaurantpapillon.business.site/"},
	{name: "Trattoria Gio", type: "Restaurant", address: "452 Place Jacques-Cartier", site: "https://www.trattoriagio.com/english/"},
	{name: "Restaurant Jacques-Cartier", type: "Restaurant", address: "444 Place Jacques-Cartier", site: "https://www.restaurantjacquescartier.ca/?lang=en"},
	{name: "La Mar&eacute;e", type: "Restaurant", address: "404 Place Jacques-Cartier", site: "#"}];
	
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
