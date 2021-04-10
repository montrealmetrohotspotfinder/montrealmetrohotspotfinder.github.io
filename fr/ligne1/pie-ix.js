function init()
{
	hnames = [ "Stade Olympique", "Stade Saputo", "Biod&ocirc;me de Montr&eacute;al", "Jardin Botanique de Montr&eacute;al", 
	"Insectarium de Montr&eacute;al", "Ar&eacute;na Maurice-Richard", "Cineplex Starcit&eacute;", "Planetarium Rio Tinto Alcan", "H&ocirc;tel Universel Montr&eacute;al",
	"Centre Pierre-Charbonneau",
	"&Eacute;cole Eulalie-Durocher", "&Eacute;cole Saint-Jean-Baptiste-de-la-Salle", "Ch&acirc;teau Dufresne",
	"&Eacute;glise de Saint-Jean-Baptiste-De-La Salle", "&Eacute;cole Ir&eacute;n&eacute;e-Lussier",
	"Parc L&eacute;on-Provancher" ];
	
	htypes = [ "Sports", "Sports", "Mus&eacute;e", "Nature", "Nature", "Sports", "Cin&eacute;ma", "Mus&eacute;e", "H&ocirc;tel", "Fitness", "&Eacute;cole", "&Eacute;cole", "Mus&eacute;e",
	"&Eacute;glise", "&Eacute;cole", "Parc" ];
	
	haddresses = [ "4545 Avenue Pierre-de-Coubertin", "4750 Rue Sherbrooke Est", "4777 Avenue Pierre-de-Coubertin", "4101 Rue Sherbrooke Est", "4581 Rue Sherbrooke Est", "2800 Rue Viau", 
	"4825 Avenue Pierre-de-Coubertin", "4801 Avenue Pierre-de-Coubertin", "5000 Rue Sherbrooke Est", "3000 Rue Viau", "2455 Rue L&eacute;tourneux", "2355 Boulevard Pie-IX",
	"2929 Avenue Jeanne-d&#39;Arc", "2585 Boulevard Pie-IX", "4100 Rue Hochelaga", "5576 Boulevard Pie-IX" ];
	
	hsites = [ "https://parcolympique.qc.ca/", "https://www.impactmontreal.com/fr/stadium/stade-saputo", "https://espacepourlavie.ca/biodome", "https://espacepourlavie.ca/jardin-botanique",
	"https://m.espacepourlavie.ca/mobile/insectarium", "https://montreal.ca/lieux/arena-maurice-richard", "https://www.cineplex.com/Cinemas/theatredetails2017?theatre_url=cinema-starcite-montreal",
	"https://espacepourlavie.ca/le-planetarium-une-realisation-architecturale", "https://www.hoteluniverselmontreal.com/", "http://www.centrepierrecharbonneau.com/", "https://eulalie-durocher.csdm.ca/", "https://st-jean-baptiste-de-la-salle.csdm.ca/",
	"https://chateaudufresne.com/", "https://diocesemontreal.org/fr/vie-communautaire/eglises-paroisses/saint-jean-baptiste-salle", "https://irenee-lussier.cssdm.gouv.qc.ca/",
	"https://montreal.ca/lieux/parc-leon-provancher" ];
	
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