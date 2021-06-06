function init()
{
	hnames = [ "Vieux Montr&eacute;al", "Vieux Port de Montr&eacute;al", "Centre des Sciences de Montr&eacute;al", "Mus&eacute;e Pointe-&agrave;-Calli&egrave;re", "Douanes de Montr&eacute;al", "Place d&#39;Youville",
	"Gibby&#39;s", "SeaSalt Ceviche & Bar", "Quartier Chinois", "La Presse", "Mission Old Brewery", "Palais des Congr&egrave;s", "Palais de Justice de Montr&eacute;al", "Basilique Notre-Dame", 
	"Place d&#39;Armes", "BMO, si&egrave;ge social", "&Eacute;difice New York Life Insurance", "H&ocirc;tel Saint-Sulpice", "Complexe Guy-Favreau / Services Canada", "Complexe Desjardins via le Montr&eacute;al Souterrain", "H&ocirc;tel Place d&#39;Armes",
	"Terrasse Place d&#39;Armes", "Kyo Bar Japonais", "Holiday Inn Montr&eacute;al Centre-Ville Downtown", "H&ocirc;tel St-Paul", "H&ocirc;tel Uville", "Auberge de la Place Royale", "Embassy Suites by Hilton Montr&eacute;al",
	"Auberge du Vieux-Port", "Verses Bistro", "H&ocirc;tel Nelligan", "Terrasse Nelligan", "Taverne Gaspar", "Restaurant M&eacute;chant Boeuf", "Caisse de D&eacute;p&ocirc;t et Placement du Qu&eacute;bec", "Place Jean-Paul-Riopelle",
	"&Eacute;difice Jacques-Parizeau", "&Eacute;glise de la Mission-Catholique-Chinoise-du-Saint-Esprit", "H&ocirc;tel &Eacute;pik Montr&eacute;al", "Le Petit H&ocirc;tel",
	"Coll&egrave;ge Sup&eacute;rieur de Montr&eacute;al", "Ogilvy, bureaux montr&eacute;alais", "Vieux S&eacute;minaire de Saint-Sulpice", "500 Place d&#39;Armes",
	"Th&eacute;&acirc;tre Centaur", "H&ocirc;tel Bonaparte", "Centre de Commerce Mondial de Montr&eacute;al via le Montr&eacute;al Souterrain", "Place Sun-Yat-Sen", "H&ocirc;tel Monville", "SNC-Lavalin", "H&ocirc;tel Le Dauphin Montr&eacute;al Centre-Ville",
	"Basilique Saint-Patrick", "&Eacute;difice Aldred", "Cour d&#39;Appel du Qu&eacute;bec", "R&eacute;gie des Alcools, des Courses et des Jeux du Qu&eacute;bec, bureaux montr&eacute;alais", "Expedia, bureaux montr&eacute;alais", "SpringHill Suites Vieux Montr&eacute;al",
	"Place Marguerite-Bourgeoys", "&Eacute;cole du Barreau", "Modavie" ];
	
	htypes = [ "District", "Port", "Mus&eacute;e", "Mus&eacute;e", "Mus&eacute;e", "Place de la Ville", "Restaurant", "Restaurant", "District", "Bureau", "Site Historique", "Centre de Convention", "Tribunal", "&Eacute;glise",
	"Site Historique", "Bureau", "Bureau", "H&ocirc;tel", "Gouvernement", "Centre Commercial", "H&ocirc;tel", "Restaurant", "Restaurant", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "H&ocirc;tel", "Restaurant", "H&ocirc;tel", "Restaurant", "Restaurant", "Restaurant",
	"Agence", "Place de la Ville", "Bureau", "&Eacute;glise", "H&ocirc;tel", "H&ocirc;tel", "Coll&egrave;ge", "Bureau", "Site Historique", "Bureau", "Th&eacute;&acirc;tre", "H&ocirc;tel", "Centre Commercial", "Parc", "H&ocirc;tel", "Bureau", "H&ocirc;tel", "&Eacute;glise",
	"Bureau", "Tribunal", "Agence", "Bureau", "H&ocirc;tel", "Parc", "&Eacute;cole", "Restaurant" ];
	
	haddresses = [ "", "333 Rue de la Commune Ouest", "2 Rue de la Commune Ouest", "350 Place Royale", "150 Rue Saint-Paul Ouest", "", "298 Place d&#39;Youville", "351 Place Royale", "", "40 Rue Saint-Antoine Ouest", "915 Rue Clark",
	"1001 Place Jean-Paul-Riopelle", "1 Rue Notre-Dame Est", "110 Rue Notre-Dame Ouest", "", "119 Rue Saint-Jacques", "511 Place d&#39;Armes", "414 Rue Saint-Sulpice", "200 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "150 Rue Sainte-Catherine Ouest", 
	"55 Rue Saint-Jacques", "55 Rue Saint-Jacques", "711 C&ocirc;te de la Place d&#39;Armes", "999 Rue Saint-Urbain", "355 Rue McGill", "204 Place d&#39;Youville", "115 Rue de la Commune Ouest", "208 Rue Saint-Antoine Ouest", "97 Rue de la Commune Est", "100 Rue Saint-Paul Ouest", "106 Rue Saint-Paul Ouest", "106 Rue Saint-Paul Ouest", "89 Rue de la Commune Est", "124 Rue Saint-Paul Ouest",
	"1000 Place Jean-Paul-Riopelle", "1000 Place Jean-Paul-Riopelle", "1000 Place Jean-Paul-Riopelle", "979 Rue C&ocirc;t&eacute;", "171 Rue Saint-Paul Ouest", "168 Rue Saint-Paul Ouest",
	"205 Avenue Viger Ouest", "215 Rue Saint-Jacques", "116 Rue Notre-Dame Ouest", "500 Place d&#39;Armes", "453 Rue Saint-Fran&ccedil;ois-Xavier", "447 Rue Saint-Fran&ccedil;ois-Xavier", "747 Rue du Square-Victoria", "1055 Rue Clark", "1041 Rue de Bleury", "455 Boulevard Ren&eacute;-L&eacute;vesque Ouest", "1025 Rue de Bleury", "460 Boulevard Ren&eacute;-L&eacute;vesque Ouest",
	"507 Place d&#39;Armes", "100 Rue Notre-Dame Est", "1 Rue Notre-Dame Est", "63 Rue de Br&eacute;soles", "445 Rue Saint-Jean-Baptiste", "", "445 Boulevard Saint-Laurent", "1 Rue Saint-Paul Ouest" ];
	
	hsites = [ "https://vieuxmontreal.ca/", "https://www.vieuxportdemontreal.com/", "https://www.centredessciencesdemontreal.com/", "https://pacmusee.qc.ca/fr/", "https://pacmusee.qc.ca/fr/histoires-de-montreal/article/l-ancienne-douane-joyau-de-l-architecture-dici/",
	"https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/place-d-youville", "https://www.gibbys.com/?lang=fr", "https://www.seasaltmontreal.ca/?lang=fr", "https://www.mtl.org/fr/experience/quartier-chinois-montreal", "https://www.lapresse.ca/", "https://www.missionoldbrewery.ca/fr/", 
	"https://congresmtl.com/", "https://www.justice.gouv.qc.ca/nous-joindre/trouver-un-palais-de-justice/palais-de-justice-de-montreal", "https://www.basiliquenotredame.ca/fr/", "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/place-d-armes", "https://branches.bmo.com/qc/montreal/b0001/?templatename=Location%20Landing%20Page%20FR", "http://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=100143&type=bien#.X4YeGNVKiM8", 
	"https://www.lesaintsulpice.com/fr", "http://complexeguyfavreau.com/fr", "https://www.complexedesjardins.com/fr", "https://hotelplacedarmes.com/fr", "http://terrasseplacedarmes.com/", "https://kyobar.com", "https://www.ihg.com/holidayinn/hotels/fr/fr/montreal/yulca/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-CA-_-YULCA",
	"https://hotelstpaul.com/fr/", "https://uvillehotelmontreal.com/fr/", "http://auberge-de-la-place-royale.to-montreal-hotels.com/fr/", "https://www.hiltonhotels.com/fr_FR/canada/embassy-suites-by-hilton-montreal/?cultureKey=fr_FR", "http://aubergeduvieuxport.com/fr/", "https://versesrestaurant.com/fr/", "https://hotelnelligan.com/fr", "http://terrassenelligan.com/accueil/", "https://tavernegaspar.com/", "https://mechantboeuf.com/",
	"https://www.cdpq.com/fr", "https://www.mtl.org/fr/quoi-faire/patrimoine-et-architecture/place-jean-paul-riopelle", "http://edificejacques-parizeau.com/", "https://www.patrimoine-culturel.gouv.qc.ca/rpcq/detail.do?methode=consulter&id=92746&type=bien",
	"http://www.epikmontreal.com/fr/", "https://petithotelmontreal.com/fr/accueil/", "https://www.collegecsm.com/", "https://www.ogilvy.com/ca/fre", "https://universcultureldesaintsulpice.ca/vs_fr.html", "#", "https://centaurtheatre.com/fr/", "http://bonaparte.com/", "https://www.alliedreit.com/fr/property/__trashed/", "https://montreal.ca/lieux/place-sun-yat-sen", "https://www.hotelmonville.com/", "https://www.snclavalin.com/fr-FR", "https://www.hotelsdauphin.ca/hotels/montreal/",
	"http://www.stpatricksmtl.ca/", "https://imtl.org/edifices/Aldred-Building.php", "https://courdappelduquebec.ca/", "https://www.racj.gouv.qc.ca/accueil.html", "https://www.expedia.ca/fr/?langid=3084&", "https://www.marriott.fr/hotels/travel/yulsh-springhill-suites-old-montreal", "https://montreal.ca/lieux/place-marguerite-bourgeoys", "http://www.ecoledubarreau.qc.ca/fr/", "https://modavie.com/fr/" ];
	
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
