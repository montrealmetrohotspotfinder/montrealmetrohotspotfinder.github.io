function init()
{
	hnames = [ "Vieux Montr&eacute;al", "Vieux Port de Montr&eacute;al", "Place des Montr&eacute;alaises", "CHUM Saint-Luc", "Quartier Chinois", "Place Vauquelin", "Champ de Mars", "H&ocirc;tel de Ville de Montr&eacute;al", "&Eacute;difice Lucien-Saulnier", "Ch&acirc;teau Ramezay",
	"March&eacute; Bonsecours", "Terrasses Bonsecours", "Chappelle Notre-Dame-de-Bon-Secours", "Place Jacques-Cartier", "Quai Jacques-Cartier", "Quai de l&#39;Horloge", "Bassin Bonsecours", 
	"H&ocirc;tel William Gray", "Maggie Oakes", "BEVO Bar + Pizzeria", "Vieux-Port Steakhouse", "Auberge Saint-Gabriel", "Jardin Nelson", "Rue Saint-Amable", "Place de la Dauversi&egrave;re",
	"Parc Fleury-Mesplet", "Le Solano", "Parc de la Chasse-Galerie", "Place Victor-Morin", "Parc Fran&ccedil;ois-Dollier-De Casson" ];
	
	htypes = [ "District", "Port", "Parc", "H&ocirc;pital", "District", "Place de la Ville", "Site Historique", "Gouvernement", "Gouvernement", "Site Historique", "Magasinage", "Restaurant", "&Eacute;glise", "District", "Port", "Port", "Lac",
	"H&ocirc;tel", "Restaurant", "Restaurant", "Restaurant", "Restaurant", "Restaurant", "Site Historique", "Parc", "Parc", "R&eacute;sidence", "Parc", "Parc", "Parc" ];
	
	haddresses = [ "", "333 Rue de la Commune Ouest", "", "1051 Rue Sanguinet", "", "275 Rue Notre-Dame Est", "158 Rue Saint-Antoine Est", "275 Rue Notre-Dame Est", "155 Rue Notre-Dame Est", "280 Rue Notre-Dame Est",
	"350 Rue Saint-Paul Est", "364 Rue de la Commune Est", "400 Rue Saint-Paul Est", "", "", "", "", "421 Rue Saint-Vincent", "426 Place Jacques-Cartier", "410 Rue Saint-Vincent", "39 Rue Saint-Paul Est",
	"426 Rue Saint-Gabriel", "407 Place Jacques-Cartier", "", "", "", "901 Rue de la Commune Est", "", "", "" ];
	
	hsites = [ "https://vieuxmontreal.ca/", "https://www.vieuxportdemontreal.com/", "https://montreal.ca/lieux/place-des-montrealaises", "https://www.chumontreal.qc.ca/", "https://www.mtl.org/fr/experience/quartier-chinois-montreal", 
	"https://montreal.ca/lieux/place-vauquelin", "https://montreal.ca/lieux/le-champ-de-mars", "https://montreal.ca/lieux/hotel-de-ville", "https://montreal.ca/lieux/edifice-lucien-saulnier", "https://www.chateauramezay.qc.ca/fr/", 
	"https://www.marchebonsecours.qc.ca/fr/index.html", "https://terrassesbonsecours.com/fr/accueil/", "https://margueritebourgeoys.org/", "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/place-jacques-cartier-et-place-de-la-dauversiere", 
	"http://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=115163&type=bien#.X390DtVKiM8", "http://www.patrimoine-culturel.gouv.qc.ca/detail.do?methode=consulter&id=115167&type=bien#.X390UtVKiM8",
	"https://www.societeduvieuxport.com/activite/bassin-bonsecours", "https://hotelwilliamgray.com/fr", "https://maggieoakes.com", "https://bevopizza.com", "https://vieuxportsteakhouse.com",
	"http://aubergesaint-gabriel.com", "https://jardinnelson.com/", "https://vieuxmontreal.ca/publications/il-etait-une-fois-la-rue-saint-amable", "https://vieuxmontreal.ca/commerces/place-de-la-dauversiere", "https://montreal.ca/lieux/parc-fleury-mesplet",
	"https://www.lesolano.com/", "https://montreal.ca/lieux/parc-de-la-chasse-galerie", "https://montreal.ca/lieux/place-victor-morin", "https://montreal.ca/lieux/parc-francois-dollier-de-casson" ];
	
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
