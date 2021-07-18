function init()
{
	spots = [{name: "Old Montreal", type: "District", address: "", site: "https://vieuxmontreal.ca/en/"},
	{name: "Old Port of Montreal", type: "Port", address: "333 Rue de la Commune Ouest", site: "https://www.oldportofmontreal.com/"},
	{name: "Centre des Sciences de Montr&eacute;al", type: "Museum", address: "2 Rue de la Commune Ouest", site: "https://www.montrealsciencecentre.com/"},
	{name: "Mus&eacute;e Pointe-&agrave;-Calli&egrave;re", type: "Museum", address: "350 Place Royale", site: "https://pacmusee.qc.ca/en/"},
	{name: "Douanes de Montr&eacute;al", type: "Museum", address: "150 Rue Saint-Paul Ouest", site: "https://pacmusee.qc.ca/en/stories-of-montreal/article/old-custom-house-one-of-our-city-s-architectural-treasures/"},
	{name: "Place d&#39;Youville", type: "Town Square", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/place-d-youville"},
	{name: "Gibby&#39;s", type: "Restaurant", address: "298 Place d&#39;Youville", site: "https://www.gibbys.com/"},
	{name: "SeaSalt Ceviche & Bar", type: "Restaurant", address: "351 Place Royale", site: "https://www.seasaltmontreal.ca/?lang=en"},
	{name: "Chinatown", type: "District", address: "", site: "https://www.mtl.org/en/experience/discover-neighbourhood-montreal-chinatown"},
	{name: "La Presse", type: "Office", address: "40 Rue Saint-Antoine Ouest", site: "https://www.lapresse.ca/"},
	{name: "Mission Old Brewery", type: "Historical Site", address: "915 Rue Clark", site: "https://www.missionoldbrewery.ca/en/"},
	{name: "Palais des Congr&egrave;s", type: "Convention Centre", address: "1001 Place Jean-Paul-Riopelle", site: "https://congresmtl.com/en/"},
	{name: "Palais de Justice de Montr&eacute;al", type: "Courthouse", address: "1 Rue Notre-Dame Est", site: "https://www.justice.gouv.qc.ca/en/join-us/find-a-courthouse/montreal-courthouse/"},
	{name: "Basilique Notre-Dame", type: "Church", address: "110 Rue Notre-Dame Ouest", site: "https://www.basiliquenotredame.ca/en"},
	{name: "Place d&#39;Armes", type: "Historical Site", address: "", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/place-d-armes"},
	{name: "BMO Headquarters", type: "Office", address: "119 Rue Saint-Jacques", site: "https://branches.bmo.com/qc/montreal/b0001/"},
	{name: "&Eacute;difice New York Life Insurance", type: "Office", address: "511 Place d&#39;Armes", site: "http://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=100143&type=bien"},
	{name: "H&ocirc;tel Saint-Sulpice", type: "Hotel", address: "414 Rue Saint-Sulpice", site: "https://www.lesaintsulpice.com/en/"},
	{name: "Complexe Guy-Favreau / Services Canada", type: "Government", address: "200 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "http://complexeguyfavreau.com/en/"},
	{name: "Complexe Desjardins via Underground City", type: "Mall", address: "150 Rue Sainte-Catherine Ouest", site: "https://www.complexedesjardins.com/en"},
	{name: "H&ocirc;tel Place d&#39;Armes", type: "Hotel", address: "55 Rue Saint-Jacques", site: "https://hotelplacedarmes.com/"},
	{name: "Terrasse Place d&#39;Armes", type: "Restaurant", address: "55 Rue Saint-Jacques", site: "http://terrasseplacedarmes.com/en/oasis-urbain/"},
	{name: "Kyo Bar Japonais", type: "Restaurant", address: "711 C&ocirc;te de la Place d&#39;Armes", site: "https://kyobar.com/en/"},
	{name: "Holiday Inn Montr&eacute;al Centre-Ville Downtown", type: "Hotel", address: "999 Rue Saint-Urbain", site: "https://www.ihg.com/holidayinn/hotels/us/en/montreal/yulca/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-CA-_-YULCA"},
	{name: "H&ocirc;tel St-Paul", type: "Hotel", address: "355 Rue McGill", site: "https://hotelstpaul.com/en/"},
	{name: "H&ocirc;tel Uville", type: "Hotel", address: "204 Place d&#39;Youville", site: "https://uvillehotelmontreal.com/"},
	{name: "Auberge de la Place Royale", type: "Hotel", address: "115 Rue de la Commune Ouest", site: "http://auberge-de-la-place-royale.to-montreal-hotels.com/en/"},
	{name: "Embassy Suites by Hilton Montr&eacute;al", type: "Hotel", address: "208 Rue Saint-Antoine Ouest", site: "https://www.hilton.com/en/hotels/yuldnes-embassy-suites-montreal/"},
	{name: "Auberge du Vieux-Port", type: "Hotel", address: "97 Rue de la Commune Est", site: "http://aubergeduvieuxport.com/"},
	{name: "Verses Bistro", type: "Restaurant", address: "100 Rue Saint-Paul Ouest", site: "https://versesrestaurant.com/en/"},
	{name: "H&ocirc;tel Nelligan", type: "Hotel", address: "106 Rue Saint-Paul Ouest", site: "https://hotelnelligan.com/"},
	{name: "Terrasse Nelligan", type: "Restaurant", address: "106 Rue Saint-Paul Ouest", site: "http://terrassenelligan.com/home/"},
	{name: "Taverne Gaspar", type: "Restaurant", address: "89 Rue de la Commune Est", site: "https://tavernegaspar.com/en/"},
	{name: "Restaurant M&eacute;chant Boeuf", type: "Restaurant", address: "124 Rue Saint-Paul Ouest", site: "https://mechantboeuf.com/en/"},
	{name: "Caisse de D&eacute;p&ocirc;t et Placement du Qu&eacute;bec", type: "Agency", address: "1000 Place Jean-Paul-Riopelle", site: "https://www.cdpq.com/en"},
	{name: "Place Jean-Paul-Riopelle", type: "Town Square", address: "1000 Place Jean-Paul-Riopelle", site: "https://www.mtl.org/en/what-to-do/heritage-and-architecture/place-jean-paul-riopelle"},
	{name: "&Eacute;difice Jacques-Parizeau", type: "Office", address: "1000 Place Jean-Paul-Riopelle", site: "http://edificejacques-parizeau.com/en/"},
	{name: "&Eacute;glise de la Mission-Catholique-Chinoise-du-Saint-Esprit", type: "Church", address: "979 Rue C&ocirc;t&eacute;", site: "https://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=92746&type=bien"},
	{name: "H&ocirc;tel &Eacute;pik Montr&eacute;al", type: "Hotel", address: "171 Rue Saint-Paul Ouest", site: "http://www.epikmontreal.com/"},
	{name: "Le Petit H&ocirc;tel", type: "Hotel", address: "168 Rue Saint-Paul Ouest", site: "https://petithotelmontreal.com/"},
	{name: "Coll&egrave;ge Sup&eacute;rieur de Montr&eacute;al", type: "College", address: "205 Avenue Viger Ouest", site: "https://www.collegecsm.com/en/home.html"},
	{name: "Ogilvy, Montreal offices", type: "Office", address: "215 Rue Saint-Jacques", site: "https://www.ogilvy.com/ca/"},
	{name: "Vieux S&eacute;minaire de Saint-Sulpice", type: "Historical Site", address: "116 Rue Notre-Dame Ouest", site: "https://universcultureldesaintsulpice.ca/en/vs_en.html"},
	{name: "500 Place d&#39;Armes", type: "Office", address: "500 Place d&#39;Armes", site: "#"},
	{name: "Centaur Theatre", type: "Theatre", address: "453 Rue Saint-Fran&ccedil;ois-Xavier", site: "https://centaurtheatre.com/"},
	{name: "H&ocirc;tel Bonaparte", type: "Hotel", address: "447 Rue Saint-Fran&ccedil;ois-Xavier", site: "http://bonaparte.com/en/"},
	{name: "Centre de Commerce Mondial de Montr&eacute;al via Underground City", type: "Mall", address: "747 Rue du Square-Victoria", site: "https://www.alliedreit.com/property/__trashed/"},
	{name: "Place Sun-Yat-Sen", type: "Park", address: "1055 Rue Clark", site: "https://montreal.ca/en/places/parc-sun-yat-sen"},
	{name: "H&ocirc;tel Monville", type: "Hotel", address: "1041 Rue de Bleury", site: "https://www.hotelmonville.com/en/"},
	{name: "SNC-Lavalin", type: "Office", address: "455 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "https://www.snclavalin.com/en"},
	{name: "H&ocirc;tel Le Dauphin Montr&eacute;al Centre-Ville", type: "Hotel", address: "1025 Rue de Bleury", site: "https://www.hotelsdauphin.ca/en/hotels/montreal/"},
	{name: "Saint Patrick&#39;s Basilica", type: "Church", address: "460 Boulevard Ren&eacute;-L&eacute;vesque Ouest", site: "http://www.stpatricksmtl.ca/"},
	{name: "&Eacute;difice Aldred", type: "Office", address: "507 Place d&#39;Armes", site: "https://imtl.org/montreal/building/Aldred-Building.php"},
	{name: "Cour d&#39;Appel du Qu&eacute;bec", type: "Courthouse", address: "100 Rue Notre-Dame Est", site: "https://courdappelduquebec.ca/en/"},
	{name: "R&eacute;gie des Alcools, des Courses et des Jeux du Qu&eacute;bec, Montreal offices", type: "Agency", address: "1 Rue Notre-Dame Est", site: "https://www.racj.gouv.qc.ca/accueil.html"},
	{name: "Expedia, Montreal offices", type: "Office", address: "63 Rue de Br&eacute;soles", site: "https://www.expedia.ca/"},
	{name: "SpringHill Suites Vieux Montr&eacute;al", type: "Hotel", address: "445 Rue Saint-Jean-Baptiste", site: "https://www.marriott.com/hotels/travel/yulsh-springhill-suites-old-montreal"},
	{name: "Place Marguerite-Bourgeoys", type: "Park", address: "", site: "https://montreal.ca/en/places/place-marguerite-bourgeoys"},
	{name: "&Eacute;cole du Barreau", type: "School", address: "445 Boulevard Saint-Laurent", site: "http://www.ecoledubarreau.qc.ca/fr/"},
	{name: "Modavie", type: "Restaurant", address: "1 Rue Saint-Paul Ouest", site: "https://modavie.com/en/"},
	{name: "Toqu&eacute;!", type: "Restaurant", address: "900 Place Jean-Paul-Riopelle", site: "https://www.restaurant-toque.com/en"},
	{name: "Pub Saint Pierre", type: "Restaurant", address: "410 Rue Saint-Pierre", site: "https://www.pubsaintpierre.ca/"},
	{name: "Terrasse sur l&#39;Auberge", type: "Restaurant", address: "97 Rue de la Commune Est", site: "https://aubergeduvieuxport.com/food/terrasse-sur-lauberge/"},
	{name: "Restaurant Oskar", type: "Restaurant", address: "414 Rue Saint-Sulpice", site: "http://restaurantoskar.com/"},
	{name: "Brasserie 701", type: "Restaurant", address: "701 C&ocirc;te de la Place d&#39;Armes", site: "https://brasserie701.com/en/"}];
	
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
